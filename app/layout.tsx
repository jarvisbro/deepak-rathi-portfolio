import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deepak-rathi-portfolio.vercel.app"),

  title: {
    default: "Deepak Rathi | Senior Frontend Engineer",
    template: "%s | Deepak Rathi",
  },

  description:
    "Senior Frontend Engineer specializing in React, Next.js, TypeScript and scalable frontend architecture.",

  keywords: [
    "Deepak Rathi",
    "Frontend Engineer",
    "Senior Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "React",
    "Next.js",
    "Frontend Architecture",
  ],

  authors: [
    {
      name: "Deepak Rathi",
    },
  ],

  creator: "Deepak Rathi",

openGraph: {
  title: "Deepak Rathi | Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer specializing in React, Next.js, TypeScript and scalable frontend architecture.",
  type: "website",
  locale: "en_US",
  siteName: "Deepak Rathi Portfolio",
},

twitter: {
  card: "summary_large_image",
  title: "Deepak Rathi | Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer specializing in React, Next.js, TypeScript and scalable frontend architecture.",
},

  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
    
      <body className="min-h-full flex flex-col">   <Providers>
    {children}
  </Providers></body>
    </html>
  );
}
