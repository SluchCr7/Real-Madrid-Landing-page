import type { Metadata } from "next";
import { Barlow_Condensed, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Real Madrid CF | Hala Madrid",
  description: "Experience the legacy of the greatest club in history. Hala Madrid y nada más.",
  icons: {
    icon: "/Images/Real-Madrid-Logo-1.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${outfit.variable} h-full antialiased selection:bg-rm-gold selection:text-white dark`}>
      <body className="min-h-full flex flex-col transition-colors duration-500">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

