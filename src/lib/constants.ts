export const GITHUB_REPO = "https://github.com/haxllo/nex";
export const GITHUB_ISSUES = `${GITHUB_REPO}/issues`;
export const GITHUB_DISCUSSIONS = `${GITHUB_REPO}/discussions`;
export const GITHUB_RELEASES = `${GITHUB_REPO}/releases`;
export const GITHUB_LATEST = `${GITHUB_REPO}/releases/latest`;
export const LICENSE_URL = `${GITHUB_REPO}/blob/master/LICENSE`;

export const DOCS = [
  { title: "Overview", href: "/docs" },
  { title: "Getting started", href: "/docs/getting-started" },
  { title: "Configuration", href: "/docs/configuration" },
];

export type Release = {
  version: string;
  tag: string;
  date: string;
  title: string;
  summary?: string;
  assets: { name: string; label: string; size: string; url: string }[];
};

export const RELEASE: Release = {
  version: "2.28.0",
  tag: "v2.28.0",
  date: "2026-10-19",
  title: "The panel is glass now",
  assets: [
    {
      name: "nex-2.28.0-windows-x64-setup.exe",
      label: "Installer",
      size: "7.4 MB",
      url: "https://github.com/haxllo/nex/releases/download/v2.28.0/nex-2.28.0-windows-x64-setup.exe",
    },
    {
      name: "nex-2.28.0-windows-x64.zip",
      label: "Portable zip",
      size: "7.8 MB",
      url: "https://github.com/haxllo/nex/releases/download/v2.28.0/nex-2.28.0-windows-x64.zip",
    },
    {
      name: "nex-2.28.0-windows-x64-manifest.json",
      label: "Update manifest",
      size: "2.9 KB",
      url: "https://github.com/haxllo/nex/releases/download/v2.28.0/nex-2.28.0-windows-x64-manifest.json",
    },
  ],
};

export const CONFIG_PATH = "%APPDATA%\\Nex\\config.toml";
