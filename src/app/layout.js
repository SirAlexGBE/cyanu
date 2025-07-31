import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Layout/Navbar";
import Link from "next/link";
import {Suspense} from "react";

// Optimize font loading
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Improve font loading performance
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false, // Only preload primary font
});

export const metadata = {
  title: "CyANU",
  description: "The Best Tech Solutions for your Business",
  icons: {
    icon: "/Favicon.png",
  },
  // Performance-related meta tags
  other: {
    "theme-color": "#000000",
    "color-scheme": "dark light",
  },
};

import Head from "next/head";

// Loading component for Suspense boundaries
function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#cabb67]"></div>
    </div>
  );
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <Head>
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for potential external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />

        {/* Viewport meta for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
