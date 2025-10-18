import type { Metadata } from "next";
import { Rubik, Space_Grotesk } from "next/font/google";
import "./globals.scss";
import CustomCursor from "@/components/CustomCursor";
import SkipLinks from "@/components/SkipLinks";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ruslan Nikolov - Senior Frontend Developer & UI Designer | Available for Hire",
  description: "Senior Frontend Developer with 7+ years experience at EPAM Systems. Specializing in React, TypeScript, Next.js. Available for full-time positions and freelance projects. Proven track record of delivering high-quality web applications.",
  keywords: [
    "senior frontend developer", 
    "React developer", 
    "TypeScript developer", 
    "Next.js developer", 
    "UI designer", 
    "freelance developer", 
    "EPAM Systems", 
    "web development", 
    "hire developer", 
    "portfolio"
  ],
  authors: [{ name: "Ruslan Nikolov" }],
  icons: {
    icon: "/briefcase.svg",
    shortcut: "/briefcase.svg",
    apple: "/briefcase.svg",
  },
  openGraph: {
    title: "Ruslan Nikolov - Senior Frontend Developer & UI Designer",
    description: "7+ years experience | React, TypeScript, Next.js | Available for hire",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/briefcase.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${rubik.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {/* Skip Navigation Links */}
        <SkipLinks />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
