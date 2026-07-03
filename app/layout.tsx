import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const displayFont = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KiudTech Solutions",
  description:
    "KiudTech Solutions is a premium web development agency crafting high-performance websites, web apps, and digital experiences that move businesses forward.",
  icons: {
    icon: "/kiud-logo.png",
    apple: "/kiud-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/kiud-logo.png" />
        <link rel="apple-touch-icon" href="/kiud-logo.png" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
