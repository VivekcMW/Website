import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalCTA from "@/components/GlobalCTA";
import AIAssistant from "@/components/AIAssistant";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const siteUrl = "https://www.movingwalls.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Moving Walls - Connected Media Platform for OOH Advertising",
    template: "%s | Moving Walls",
  },
  description: "Moving Walls delivers innovative out-of-home advertising solutions with AI-powered media planning, programmatic buying, and real-time measurement to amplify your brand reach across 2.8B+ screens worldwide.",
  keywords: [
    "OOH advertising",
    "out-of-home advertising",
    "DOOH",
    "digital out-of-home",
    "programmatic OOH",
    "media planning",
    "billboard advertising",
    "outdoor advertising",
    "advertising platform",
    "Moving Walls",
  ],
  authors: [{ name: "Moving Walls" }],
  creator: "Moving Walls",
  publisher: "Moving Walls",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Moving Walls",
    title: "Moving Walls - Connected Media Platform for OOH Advertising",
    description: "Transform your advertising with AI-powered OOH media planning, programmatic buying, and real-time measurement across 2.8B+ screens worldwide.",
    images: [
      {
        url: "/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Moving Walls - Connected Media Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moving Walls - Connected Media Platform for OOH Advertising",
    description: "Transform your advertising with AI-powered OOH media planning, programmatic buying, and real-time measurement.",
    images: ["/assets/images/og-image.jpg"],
    creator: "@movingwalls",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* 
          Google Tag Manager & Analytics - Uncomment and replace IDs when ready:
          
          <Script id="gtm-script" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');`}
          </Script>
          
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
          <Script id="ga-script" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');`}
          </Script>
        */}
      </head>
      <body className={`${poppins.variable} font-sans antialiased bg-white text-mw-gray-900`}>
        <Header />
        <main>
          {children}
        </main>
        <GlobalCTA />
        <Footer />
        <AIAssistant />
      </body>
    </html>
  );
}
