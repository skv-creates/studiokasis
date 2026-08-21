import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import GridOverlay from "./grid-overlay";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Studio Kasis",
  description:
    "We are Kasis. A brand design studio. We partner with good people who believe in good design to create brands, products and campaigns that set their business apart.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}
        <GridOverlay />
      </body>
    </html>
  );
}
