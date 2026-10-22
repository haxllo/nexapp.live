export const GITHUB_REPO = "https://github.com/haxllo/nex";
export const GITHUB_ISSUES = `${GITHUB_REPO}/issues`;
export const GITHUB_RELEASES = `${GITHUB_REPO}/releases`;
export const GITHUB_LATEST = `${GITHUB_REPO}/releases/latest`;
export const LICENSE_URL = `${GITHUB_REPO}/blob/master/LICENSE`;

export const CONFIG_PATH = "%APPDATA%\\Nex\\config.toml";

export const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Docs", href: "/docs" },
  { label: "Changelog", href: "/changelog" },
  { label: "Plugin SDK", href: "/plugin-sdk" },
] as const;

export const LATEST = {
  version: "2.30.0",
  tag: "v2.30.0",
  date: "2026-10-21",
  title: "A faster, steadier glass panel",
  headline: "A little less friction.",
  installerSize: "6.9 MB",
} as const;
