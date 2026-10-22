import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nexapp.live/"),
  title: {
    default: "Nex — the liquid-glass launcher for Windows",
    template: "%s · Nex",
  },
  description:
    "Press Win to open a glass panel over your desktop. Find apps, files and folders, run commands, do math, and ask questions without leaving the keyboard. Built in Rust.",
  keywords: [
    "launcher",
    "windows",
    "keyboard",
    "search",
    "rust",
    "spotlight",
    "productivity",
    "quick launch",
  ],
  applicationName: "Nex",
  icons: {
    shortcut: "/nex-logo.png",
    icon: [{ url: "/nex-logo.png", type: "image/png" }],
    apple: "/nex-logo.png",
  },
  openGraph: {
    title: "Nex — the liquid-glass launcher for Windows",
    description:
      "A glass panel over your desktop. Apps, files, commands, math and chat, one key away.",
    type: "website",
    siteName: "Nex",
    images: [{ url: "/nex-logo.png", width: 512, height: 512, alt: "Nex" }],
  },
  twitter: {
    card: "summary",
    title: "Nex — the liquid-glass launcher for Windows",
    description:
      "A glass panel over your desktop. Apps, files, commands, math and chat, one key away.",
    images: ["/nex-logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#111315",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-ink text-paper">
        <a
          href="#content"
          data-testid="skip-to-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-[8px] focus:bg-paper focus:px-3 focus:py-2 focus:text-[13px] focus:font-medium focus:text-ink"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
