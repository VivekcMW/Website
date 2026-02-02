"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Mega menu data
const megaMenuData = {
  Solutions: {
    sections: [
      {
        title: "By Industry",
        items: [
          { name: "Brand", description: "Reach buyers at every stage", href: "/solutions/brands" },
          { name: "Media Owners", description: "Connect with patients effectively", href: "/solutions/media-owners" },
          { name: "Agencies", description: "Build trust and awareness", href: "/solutions/agencies" },
        ],
      },
    ],
    featured: {
      title: "Case Study: Automotive",
      description: "Premium Automotive Brand Achieves 300% ROI in Q4",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
      href: "/resources/case-studies/automotive-dealership-traffic",
    },
  },
  Products: {
    sections: [
      {
        title: "MW Platform Suite",
        items: [
          { name: "MW-Planner", description: "Strategic campaign planning & optimization", href: "/products/mw-planner" },
          { name: "MW-Measure", description: "Advanced analytics & performance tracking", href: "/products/mw-measure" },
          { name: "MW-Reach", description: "Multi-channel audience targeting", href: "/products/mw-reach" },
          { name: "MW-Activate", description: "Real-time campaign activation & optimization", href: "/products/mw-activate" },
        ],
      },
      {
        title: "MW Intelligence Suite",
        items: [
          { name: "MW-Science", description: "AI-powered audience insights & research", href: "/products/mw-science" },
          { name: "MW-Studio", description: "Creative content management platform", href: "/products/mw-studio" },
          { name: "MW-Marketplace", description: "Premium inventory & partnership ecosystem", href: "/products/mw-marketplace" },
        ],
      },
    ],
    featured: {
      title: "Case Study: Retail",
      description: "National Retail Chain Drives 45% Foot Traffic Increase",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      href: "/resources/case-studies/global-retail-brand-340-roi",
    },
  },
  About: {
    sections: [
      {
        title: "Company",
        items: [
          { name: "Our Story", description: "Learn about our journey", href: "/about/our-story" },
          // { name: "Our Journey", description: "Timeline of innovation", href: "/about/our-journey" },
          { name: "Leadership Team", description: "Meet our executives", href: "/about/leadership" },
          { name: "Careers", description: "Join our growing team", href: "/about/careers" },
          { name: "Press & News", description: "Latest announcements", href: "/about/press-news" },
        ],
      },
      {
        title: "Connect",
        items: [
          { name: "Contact Us", description: "Get in touch with us", href: "/contact" },
          { name: "Partners", description: "Partner ecosystem", href: "/partners" },
          { name: "Locations", description: "Find us worldwide", href: "/locations" },
          { name: "Events", description: "Upcoming events", href: "/events" },
        ],
      },
    ],
    featured: {
      title: "Case Study: Finance",
      description: "Fintech Startup Generates 5,000+ Quality Leads",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      href: "/resources/case-studies/fintech-app-acquisition",
    },
  },
  Resources: {
    sections: [
      {
        title: "Learn",
        items: [
          { name: "Blog", description: "Industry insights and tips", href: "/resources/blog" },
          { name: "Webinars", description: "On-demand learning", href: "/resources/webinars" },
          { name: "Case Studies", description: "Success stories", href: "/resources/case-studies" },
          { name: "Whitepapers", description: "In-depth research", href: "/resources/whitepapers" },
        ],
      },
      {
        title: "Support",
        items: [
          { name: "Help Center", description: "Get answers fast", href: "/resources/help-center" },
          { name: "Documentation", description: "Technical guides", href: "/resources/documentation" },
          { name: "API Reference", description: "Developer resources", href: "/resources/api-reference" },
          { name: "Community", description: "Connect with peers", href: "/resources/community" },
          { name: "Integrations", description: "Connect your tools", href: "/integrations" },
        ],
      },
    ],
    featured: {
      title: "Case Study: Technology",
      description: "Tech Company Launches Product with 10M Impressions",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      href: "/resources/case-studies/tech-product-launch",
    },
  },
};

const navLinks = [
  { name: "Solutions", href: "#solutions", hasMegaMenu: true },
  { name: "Products", href: "#products", hasMegaMenu: true },
  { name: "About", href: "#about", hasMegaMenu: true },
  { name: "Resources", href: "#resources", hasMegaMenu: true },
  { name: "Contact", href: "/contact", hasMegaMenu: false },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null);

  const handleMouseEnter = (name: string) => {
    if (megaMenuData[name as keyof typeof megaMenuData]) {
      setActiveMegaMenu(name);
    }
  };

  const handleMouseLeave = () => {
    setActiveMegaMenu(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-mw-gray-200 shadow-mw-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <Image
                src="/assets/logo/MW-logo-web.svg"
                alt="Moving Walls Logo"
                width={180}
                height={40}
                priority
                className="h-8 lg:h-10 w-auto"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
                onMouseEnter={() => handleMouseEnter(link.name)}
                onMouseLeave={handleMouseLeave}
              >
                {link.hasMegaMenu ? (
                  <button
                    className="flex items-center gap-1 text-mw-gray-600 hover:text-mw-blue-600 transition-colors duration-200 text-sm font-medium py-2"
                  >
                    {link.name}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeMegaMenu === link.name ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-mw-gray-600 hover:text-mw-blue-600 transition-colors duration-200 text-sm font-medium py-2"
                  >
                    {link.name}
                  </Link>
                )}
              </motion.div>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-mw-blue-600 hover:bg-mw-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-mw-gray-600 hover:text-mw-blue-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mega Menu */}
        <AnimatePresence>
          {activeMegaMenu && megaMenuData[activeMegaMenu as keyof typeof megaMenuData] && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-full bg-white border-t border-mw-gray-200 shadow-mw-lg"
              onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-4 gap-8">
                  {/* Menu Sections */}
                  {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].sections.map(
                    (section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <h3 className="text-xs font-semibold text-mw-gray-400 uppercase tracking-wider mb-4">
                          {section.title}
                        </h3>
                        <ul className="space-y-3">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <Link
                                href={item.href}
                                className="group block"
                                onClick={() => setActiveMegaMenu(null)}
                              >
                                <span className="text-mw-gray-900 font-medium group-hover:text-mw-blue-600 transition-colors">
                                  {item.name}
                                </span>
                                <p className="text-sm text-mw-gray-500 mt-0.5">
                                  {item.description}
                                </p>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  )}

                  {/* Featured Section */}
                  <div className="bg-mw-gray-50 rounded-xl p-6 border border-mw-gray-200">
                    <div className="h-32 bg-mw-blue-100 rounded-lg mb-4 overflow-hidden relative">
                      <img
                        src={megaMenuData[activeMegaMenu as keyof typeof megaMenuData].featured.image}
                        alt={megaMenuData[activeMegaMenu as keyof typeof megaMenuData].featured.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-semibold text-mw-gray-900 mb-1">
                      {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].featured.title}
                    </h4>
                    <p className="text-sm text-mw-gray-500 mb-4">
                      {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].featured.description}
                    </p>
                    <Link
                      href={megaMenuData[activeMegaMenu as keyof typeof megaMenuData].featured.href}
                      className="text-sm font-medium text-mw-blue-600 hover:text-mw-blue-700 inline-flex items-center gap-1"
                      onClick={() => setActiveMegaMenu(null)}
                    >
                      Learn more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-white"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.hasMegaMenu ? (
                      <div>
                        <button
                          className="w-full flex items-center justify-between text-mw-gray-600 hover:text-mw-blue-600 transition-colors duration-200 text-sm font-medium py-2"
                          onClick={() =>
                            setMobileExpandedMenu(
                              mobileExpandedMenu === link.name ? null : link.name
                            )
                          }
                        >
                          {link.name}
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${
                              mobileExpandedMenu === link.name ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {mobileExpandedMenu === link.name &&
                            megaMenuData[link.name as keyof typeof megaMenuData] && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="pl-4 pb-2 space-y-4"
                              >
                                {megaMenuData[link.name as keyof typeof megaMenuData].sections.map(
                                  (section, sectionIndex) => (
                                    <div key={sectionIndex}>
                                      <h4 className="text-xs font-semibold text-mw-gray-400 uppercase tracking-wider mb-2">
                                        {section.title}
                                      </h4>
                                      <ul className="space-y-2">
                                        {section.items.map((item, itemIndex) => (
                                          <li key={itemIndex}>
                                            <Link
                                              href={item.href}
                                              className="block text-sm text-mw-gray-600 hover:text-mw-blue-600"
                                              onClick={() => {
                                                setIsOpen(false);
                                                setMobileExpandedMenu(null);
                                              }}
                                            >
                                              {item.name}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )
                                )}
                              </motion.div>
                            )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className="block text-mw-gray-600 hover:text-mw-blue-600 transition-colors duration-200 text-sm font-medium py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <button className="w-full bg-mw-blue-600 hover:bg-mw-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 mt-4">
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
