import type { Metadata } from "next";
import { Rubik, Inter } from "next/font/google";
import "./globals.scss";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

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
    images: [`${baseUrl}/preview.webp`],
    type: "website",
    url: baseUrl,
  },
  alternates: {
    canonical: baseUrl,
  },
  other: {
    "apple-mobile-web-app-capable": "no",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no, date=no, email=no, address=no",
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
        <link
          rel="preload"
          href="/Hero Initial Picture.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
      </head>
      <body className={`${rubik.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
