"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  company: [
    { name: "Our Story", href: "/about/our-story" },
    { name: "Leadership", href: "/about/leadership" },
    { name: "Careers", href: "/about/careers" },
    { name: "Press & News", href: "/about/press-news" },
    { name: "Contact Us", href: "/contact" },
  ],
  solutions: [
    { name: "Brand Awareness", href: "/solutions/brand-awareness" },
    { name: "Lead Generation", href: "/solutions/lead-generation" },
    { name: "Retail", href: "/solutions/retail" },
    { name: "Healthcare", href: "/solutions/healthcare" },
    { name: "Automotive", href: "/solutions/automotive" },
    { name: "Finance", href: "/solutions/finance" },
  ],
  products: [
    { name: "AdPlatform Pro", href: "/products/adplatform-pro" },
    { name: "Audience Insights", href: "/products/audience-insights" },
    { name: "Campaign Manager", href: "/products/campaign-manager" },
    { name: "Measure360", href: "/products/measure360" },
    { name: "Digital Billboards", href: "/products/digital-billboards" },
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "System Status", href: "#" },
    { name: "Training", href: "/events" },
  ],
};

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/moving-walls/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com/movingwalls",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.80l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@movingwalls",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/movingwalls",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
];

const quickStats = [
  { label: "Global Offices", value: "6" },
  { label: "Countries Served", value: "25+" },
  { label: "Active Campaigns", value: "10K+" },
  { label: "Client Satisfaction", value: "98%" },
];

export default function Footer() {
  return (
    <footer className="bg-mw-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="footer-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#3B82F6" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#footer-grid)" />
        </svg>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Top Section - Brand & Office Address */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Brand Section */}
              <div className="max-w-xl">
                <Link href="/" className="inline-block mb-6">
                  <Image
                    src="/assets/logo/MW-logo-web.svg"
                    alt="Moving Walls Logo"
                    width={180}
                    height={40}
                    className="h-10 w-auto brightness-0 invert"
                  />
                </Link>
                <p className="text-mw-gray-300 text-lg mb-6 leading-relaxed">
                  Moving Walls unifies the entire Out-of-Home ecosystem through a single, intelligent cloud platform. From audience discovery to booking, activation, measurement, and optimisation, we streamline every step with data-driven precision.
                </p>
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-mw-gray-800 hover:bg-mw-blue-600 rounded-lg flex items-center justify-center text-mw-gray-400 hover:text-white transition-all duration-200"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Office Address Section */}
              <div className="lg:pl-8">
                <h5 className="text-white font-semibold text-lg mb-4">Moving Walls Pte Ltd</h5>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-mw-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-mw-gray-300">
                      14, Robinson Road #8-02<br />
                      Far East Financial Building<br />
                      Singapore 048545
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-mw-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p className="text-mw-gray-300">+65 6714 6699</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-mw-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-mw-gray-300">Open · Closes 6 pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Company */}
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-mw-gray-300 hover:text-white transition-colors flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Solutions</h4>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-mw-gray-300 hover:text-white transition-colors flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Products</h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-mw-gray-300 hover:text-white transition-colors flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-mw-gray-300 hover:text-white transition-colors flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-mw-gray-800 bg-mw-gray-900/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <p className="text-mw-gray-400 text-sm">
                  © {new Date().getFullYear()} Moving Walls. All rights reserved.
                </p>
                <div className="flex items-center gap-6 text-sm">
                  <Link href="/privacy" className="text-mw-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="text-mw-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                  <Link href="/cookies" className="text-mw-gray-400 hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
