import type { Metadata, Viewport } from "next";
import { Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nexapp.live/"),
  title: {
    default: "Nex, the keyboard-first launcher for Windows",
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
  icons: {
    icon: "/nex-logo.svg",
  },
  openGraph: {
    title: "Nex, the keyboard-first launcher for Windows",
    description:
      "A glass panel over your desktop. Apps, files, commands, math and chat, one key away.",
    type: "website",
    siteName: "Nex",
    images: [{ url: "/nex-logo.svg", width: 512, height: 512, alt: "Nex" }],
  },
  twitter: {
    card: "summary",
    images: ["/nex-logo.svg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0b0d",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrument.variable} ${jetbrains.variable}`}>
      <body className="min-h-dvh bg-ink text-paper">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-[8px] focus:bg-paper focus:px-3 focus:py-2 focus:text-[13px] focus:font-medium focus:text-ink"
        >
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
