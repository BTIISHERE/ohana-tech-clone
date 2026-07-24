import type { Metadata } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ohana Tech Inc. | Compliance Automation for the Drug Supply Chain",
  description:
    "Ohana Tech Inc. is a New York-based technology consulting corporation founded by a multi-state licensed pharmacist, building automated software that optimizes routine drug supply chain compliance workflows.",
  keywords: [
    "FDA Establishment Verification",
    "OIG Background Search Automation",
    "State License Verification",
    "Data Matrix Parsing",
    "Drug Supply Chain Compliance",
    "Pharmacy Compliance Software",
    "Ohana Tech",
  ],
  openGraph: {
    title: "Ohana Tech Inc. | Compliance Automation for the Drug Supply Chain",
    description:
      "Founder-led software automating FDA, OIG, and state license compliance checks for the US drug supply chain.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
