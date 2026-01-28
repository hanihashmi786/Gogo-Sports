import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Gogo Sports | Premium Football Gear in KSA",
  description:
    "Official match balls, training gear, uniforms & goalkeeper gloves. Premium football equipment priced in SAR. Fast delivery across Saudi Arabia.",
  keywords: [
    "football",
    "soccer",
    "sports gear",
    "Saudi Arabia",
    "match ball",
    "goalkeeper gloves",
    "tracksuit",
  ],
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
    generator: 'v0.app'
};

export const viewport: Viewport = {
  themeColor: "#e64a19",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
