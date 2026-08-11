import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bean There Cafe Jaipur — Grounded, Earthy & Open-Air Cafe Chain",
  description: "Experience Bean There Cafe in Jaipur. Open pebble courtyards, bamboo cabins, hazelnut cold coffee, full menu with prices, real reviews, live table reservation, and weekend unplugged acoustic jams.",
  keywords: [
    "Bean There Cafe Jaipur",
    "Bean There Pratap Nagar",
    "Bean There Jagatpura",
    "Bean There Mansarovar",
    "Jaipur Open Air Cafe",
    "Hazelnut Cold Coffee Jaipur",
    "Acoustic Open Mic Jaipur",
    "Best cafe for students SKIT Rawat Jaipur"
  ],
  openGraph: {
    title: "Bean There Cafe Jaipur — Grounded & Earthy Cafe",
    description: "Open pebble courtyards, bamboo cabins, signature coffee, real customer reviews, & weekend acoustic jamming sessions.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${outfit.variable}`}>
      <body className="bg-[#FAF6F0] text-[#241B14] antialiased min-h-screen flex flex-col font-sans selection:bg-[#C86D51] selection:text-white">
        {children}
      </body>
    </html>
  );
}
