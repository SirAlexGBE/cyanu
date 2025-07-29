import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CyANU",
  description: "The Best Tech Solutions for your Business",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
