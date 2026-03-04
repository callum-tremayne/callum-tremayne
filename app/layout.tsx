import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Callum Tremayne | Full-Stack Developer",
    template: "%s | Callum Tremayne",
  },
  description:
    "Personal portfolio homepage for Callum Tremayne, Full-Stack Developer.",
  applicationName: "Callum Tremayne - Full-Stack Developer",

  authors: [{ name: "Callum Tremayne" }],
  creator: "Callum Tremayne",
  publisher: "Callum Tremayne",
  metadataBase: new URL("https://callumtremayne.co.uk/"),
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },

  openGraph: {
    type: "website",
    url: "https://callumtremayne.co.uk/",
    title: "Callum Tremayne | Full-Stack Developer",
    description:
      "Personal portfolio homepage for Callum Tremayne, Full-Stack Developer.",
    siteName: "Callum Tremayne",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "Callum Tremayne - Full-Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Callum Tremayne | Full-Stack Developer",
    description:
      "Personal portfolio homepage for Callum Tremayne, Full-Stack Developer.",
    images: ["/icon.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#39ff88",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.variable}>{children}</body>
    </html>
  );
}
