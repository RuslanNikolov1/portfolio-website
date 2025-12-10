import type { Metadata } from "next";
import { Rubik, Space_Grotesk, Inter } from "next/font/google";
import "./globals.scss";

// Google Fonts
const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

// Use Inter as Satoshi fallback for now
const satoshi = inter;

// Dynamic base URL for development vs production
const baseUrl = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:3000' 
  : 'https://portfolio-website-dusky-five-28.vercel.app';

export const metadata: Metadata = {
  title: "My Portfolio — Frontend Developer",
  description: "Portfolio of Ruslan Nikolov, Front-End Developer specializing in React, Next.js, and TypeScript.",
  keywords: [
    "frontend developer", 
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
    title: "My Portfolio — Frontend Developer",
    description: "Projects built with React, Next.js, and modern UI/UX design.",
    images: [`${baseUrl}/preview.png`],
    type: "website",
    url: baseUrl,
  },
  alternates: {
    canonical: baseUrl,
  },
  other: {
    // Ensure Apple devices open in Safari, not as web app
    "apple-mobile-web-app-capable": "no",
    "apple-mobile-web-app-status-bar-style": "default",
    // Prevent Apple from detecting and formatting phone numbers/emails
    "format-detection": "telephone=no, date=no, email=no, address=no",
    // Disable automatic app banner suggestions
    "apple-itunes-app": "app-id=",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
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
        <link rel="canonical" href={baseUrl} />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="no" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
      </head>
      <body
        className={`${rubik.variable} ${spaceGrotesk.variable} ${inter.variable} ${satoshi.variable} antialiased`}
      >
        {/* Skip Navigation Links temporarily removed */}
        {children}
      </body>
    </html>
  );
}
