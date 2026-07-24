import type { Metadata } from "next";
import { Archivo, Inter, Courier_Prime } from "next/font/google";
import "./globals.css";

const heading = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ohana Tech Inc",
  description:
    "Ohana Tech Inc is a tech consulting corporation based out of New York focused on optimizing routine workflows into automated web apps to reduce organizational demands, allowing our clients to more efficiently allocate their time and assets.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
