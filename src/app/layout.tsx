import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nexapp.live/"),
  title: "Nex — Keyboard-first launcher for Windows",
  description: "Press a global hotkey to summon a floating search bar. Find and launch applications, files, folders, and custom actions instantly. Built in Rust.",
  keywords: ["launcher", "windows", "keyboard", "search", "rust", "spotlight", "productivity"],
  icons: {
    icon: "/nex-logo.svg",
  },
  openGraph: {
    title: "Nex — Keyboard-first launcher for Windows",
    description: "Press a global hotkey to summon a floating search bar. Built in Rust.",
    type: "website",
    images: [{ url: "/nex-logo.svg", width: 512, height: 512, alt: "Nex" }],
  },
  twitter: {
    card: "summary",
    images: ["/nex-logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
