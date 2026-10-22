import { changelogDetailed } from "@/lib/changelog";
import { GITHUB_REPO } from "@/lib/site";

export type ReleaseAsset = {
  id: string;
  label: string;
  name: string;
  size: string;
  url: string;
};

const asset = (
  version: string,
  suffix: string,
  label: string,
  size: string,
  id: string,
): ReleaseAsset => {
  const fileSuffix = suffix.startsWith(".") ? suffix : `-${suffix}`;
  const name = `nex-${version}-windows-x64${fileSuffix}`;
  return {
    id,
    label,
    name,
    size,
    url: `${GITHUB_REPO}/releases/download/v${version}/${name}`,
  };
};

export const latestAssets: ReleaseAsset[] = [
  asset("2.30.0", "setup.exe", "Installer", "6.9 MB", "installer"),
  asset("2.30.0", ".zip", "Portable zip", "7.3 MB", "portable-zip"),
  asset("2.30.0", "manifest.json", "Update manifest", "3.0 KB", "update-manifest"),
];

/** Homepage copy can differ from the longer changelog entry. */
const homeSummary: Record<string, string> = {
  "2.28.0":
    "The search panel is no longer a page painted over a blur. It is drawn natively as a pane of glass: what is behind it bends into the edges, the rim picks up light on all four sides, and the whole thing sits above a soft…",
};

/** The four releases summarised on the homepage. */
export const homeReleases = changelogDetailed
  .slice(0, 4)
  .map((release) => ({
    ...release,
    summary: homeSummary[release.version] ?? release.summary,
  }));
