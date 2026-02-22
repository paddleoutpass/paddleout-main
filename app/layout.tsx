import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paddleout — Handpick your founding team",
  description: "Handpick your first engineers with GitHub-backed proof they ship. Searchable by stack, availability, and work type.",
  openGraph: {
    title: "Paddleout — Handpick your founding team",
    description: "Handpick your first engineers with GitHub-backed proof they ship. Searchable by stack, availability, and work type.",
    siteName: "Paddleout",
    url: "https://paddleout.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paddleout — Handpick your founding team",
    description: "Handpick your first engineers with GitHub-backed proof they ship.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
