import type { Metadata } from "next";
import { Rubik, Space_Grotesk } from "next/font/google";
import "./globals.scss";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

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
    images: ["https://portfolio-website-dusky-five-28.vercel.app/preview.png"],
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
        {/* Skip Navigation Links temporarily removed */}
        {children}
      </body>
    </html>
  );
}
