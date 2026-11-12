import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "YOUNGKONCEPT | Professional Photography in Accra",
  description: "We Capture Moments That Matter - Professional Photography Services in Accra, Ghana. Portrait, Wedding, Birthday, Graduation & Fashion Photography.",
  keywords: "photography, Accra, Ghana, portrait, wedding, birthday, graduation, fashion, photographer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
