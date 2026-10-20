import { GITHUB_REPO } from "@/lib/constants";

export type ReleaseAsset = {
  name: string;
  label: string;
  size: string;
  url: string;
};

export type Release = {
  version: string;
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  url: string;
  assets: ReleaseAsset[];
};

type GitHubRelease = {
  tag_name: string;
  name: string | null;
  body: string | null;
  draft: boolean;
  prerelease: boolean;
  published_at: string | null;
  html_url: string;
  assets: { name: string; size: number; browser_download_url: string }[];
};

// ponytail: one page of 100 covers every release so far. Add pagination if Nex
// ever ships past it.
const API_URL = `${GITHUB_REPO.replace(
  "https://github.com/",
  "https://api.github.com/repos/",
)}/releases?per_page=100`;

const ASSET_LABELS: [string, string][] = [
  ["setup.exe", "Installer"],
  [".zip", "Portable zip"],
  ["manifest.json", "Update manifest"],
];

/** Used when GitHub is unreachable or rate limited, so the site still builds. */
const FALLBACK: Release[] = [
  {
    version: "2.28.0",
    tag: "v2.28.0",
    date: "2026-10-19",
    title: "The panel is glass now",
    excerpt:
      "The panel is drawn as a pane of glass: the desktop behind it bends into the rim, the edge picks up light, and the whole thing sits above a soft contact shadow.",
    url: `${GITHUB_REPO}/releases/tag/v2.28.0`,
    assets: [
      {
        name: "nex-2.28.0-windows-x64-setup.exe",
        label: "Installer",
        size: "7.1 MB",
        url: `${GITHUB_REPO}/releases/download/v2.28.0/nex-2.28.0-windows-x64-setup.exe`,
      },
      {
        name: "nex-2.28.0-windows-x64.zip",
        label: "Portable zip",
        size: "7.5 MB",
        url: `${GITHUB_REPO}/releases/download/v2.28.0/nex-2.28.0-windows-x64.zip`,
      },
      {
        name: "nex-2.28.0-windows-x64-manifest.json",
        label: "Update manifest",
        size: "2.8 KB",
        url: `${GITHUB_REPO}/releases/download/v2.28.0/nex-2.28.0-windows-x64-manifest.json`,
      },
    ],
  },
];

function formatBytes(bytes: number): string {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  if (bytes >= 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${bytes} B`;
}

/** Release notes start with `## Title`; fall back to the release name. */
function titleOf(release: GitHubRelease): string {
  const heading = release.body?.match(/^#{1,3}\s+(.+)$/m)?.[1]?.trim();
  return heading || release.name || release.tag_name;
}

/** First prose paragraph of the notes, trimmed to fit a card. */
function excerptOf(release: GitHubRelease): string {
  const paragraph = (release.body ?? "")
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .find((block) => block && !/^[#>\-*|]/.test(block));
  if (!paragraph) return "";
  const text = paragraph
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*_`]/g, "")
    .replace(/\s+/g, " ");
  if (text.length <= 220) return text;
  const cut = text.slice(0, 220);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trimEnd()}…`;
}

function assetsOf(release: GitHubRelease): ReleaseAsset[] {
  return ASSET_LABELS.flatMap(([suffix, label]) => {
    const asset = release.assets.find(
      (candidate) =>
        candidate.name.includes("windows-x64") && candidate.name.endsWith(suffix),
    );
    if (!asset) return [];
    return [
      {
        name: asset.name,
        label,
        size: formatBytes(asset.size),
        url: asset.browser_download_url,
      },
    ];
  });
}

function mapRelease(release: GitHubRelease): Release {
  const version = release.tag_name.replace(/^v/, "");
  return {
    version,
    tag: release.tag_name,
    date: (release.published_at ?? "").slice(0, 10),
    title: titleOf(release),
    excerpt: excerptOf(release),
    url: release.html_url,
    assets: assetsOf(release),
  };
}

export async function getReleases(): Promise<Release[]> {
  try {
    const response = await fetch(API_URL, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "nex-website",
        ...(process.env.GITHUB_TOKEN
          ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
          : {}),
      },
      next: { revalidate: 3600 },
    });
    if (!response.ok) throw new Error(`GitHub releases: ${response.status}`);
    const releases = ((await response.json()) as GitHubRelease[])
      .filter((release) => !release.draft && !release.prerelease)
      .map(mapRelease);
    return releases.length > 0 ? releases : FALLBACK;
  } catch {
    return FALLBACK;
  }
}

export async function getLatestRelease(): Promise<Release> {
  const [latest] = await getReleases();
  return latest;
}
