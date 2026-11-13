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
  title: "YOUNGKONCEPT | Photography, Videography & Branding in Accra",
  description: "We create to inspire - Ghana's fastest-growing integrated Photography & Communications company. Photography, Videography, Graphic Design, Printing, Branding, Event Coverage & Social Media Strategy in Accra, Ghana.",
  keywords: "photography, videography, branding, graphic design, printing, Accra, Ghana, wedding, event coverage, social media strategy, digital offset printing",
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
