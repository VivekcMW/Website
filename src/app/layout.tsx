import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "MWWST - Modern Marketing & Advertising Solutions",
  description: "MWWST delivers innovative out-of-home advertising solutions, media planning, buying, and measurement services to amplify your brand reach.",
  keywords: ["marketing", "advertising", "OOH", "media planning", "brand strategy"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans antialiased bg-white text-mw-gray-900`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <AIAssistant />
      </body>
    </html>
  );
}
