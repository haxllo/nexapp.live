import type { MetadataRoute } from "next";

const routes = [
  "",
  "/features",
  "/download",
  "/docs",
  "/docs/getting-started",
  "/docs/configuration",
  "/changelog",
  "/plugin-sdk",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://www.nexapp.live${route}`,
    lastModified: new Date("2026-10-19"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
