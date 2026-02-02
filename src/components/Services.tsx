"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const solutions = [
  {
    title: "Brand",
    description: "Amplify your brand message across premium out-of-home inventory. Reach your target audience at scale with data-driven campaigns that drive awareness and engagement.",
    bgColor: "bg-transparent",
    href: "/solutions/brands",
    image: "/assets/images/brands/Brand.png",
    features: [
      "Multi-channel campaign management",
      "Advanced audience targeting",
      "Real-time performance analytics",
      "Creative optimization tools"
    ]
  },
  {
    title: "Media Owners",
    description: "Maximize your inventory value with our advanced programmatic platform. Connect with premium advertisers and optimize yield across all your digital and traditional OOH assets.",
    bgColor: "bg-mw-blue-50",
    href: "/solutions/media-owners",
    icon: <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Billboard/Screen Illustration */}
      <rect x="30" y="20" width="140" height="120" rx="8" fill="white" stroke="#2563eb" strokeWidth="2"/>
      <rect x="50" y="40" width="100" height="70" rx="4" fill="#2563eb"/>
      <rect x="60" y="50" width="35" height="25" rx="2" fill="#93c5fd"/>
      <rect x="60" y="80" width="35" height="4" rx="2" fill="#93c5fd"/>
      <rect x="60" y="88" width="25" height="4" rx="2" fill="#93c5fd"/>
      <rect x="105" y="50" width="35" height="50" rx="2" fill="#93c5fd"/>
      <line x1="75" y1="120" x2="75" y2="135" stroke="#2563eb" strokeWidth="3"/>
      <line x1="125" y1="120" x2="125" y2="135" stroke="#2563eb" strokeWidth="3"/>
      <line x1="60" y1="135" x2="140" y2="135" stroke="#2563eb" strokeWidth="3"/>
    </svg>,
    features: [
      "Programmatic marketplace access",
      "Inventory management system",
      "Dynamic pricing optimization",
      "Publisher analytics dashboard"
    ]
  },
  {
    title: "Agencies",
    description: "Streamline your DOOH operations with enterprise-grade tools. Manage multiple client campaigns, access premium inventory, and deliver exceptional results with our agency platform.",
    bgColor: "bg-mw-gray-100",
    href: "/solutions/agencies",
    icon: <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Team/Agency Illustration */}
      <rect x="30" y="20" width="140" height="120" rx="8" fill="white" stroke="#4b5563" strokeWidth="2"/>
      <circle cx="70" cy="60" r="15" fill="#93c5fd"/>
      <path d="M 70 75 Q 70 80 75 85 L 65 85 Q 70 80 70 75" fill="#2563eb"/>
      <rect x="50" y="85" width="40" height="30" rx="4" fill="#2563eb"/>
      <circle cx="100" cy="55" r="18" fill="#2563eb"/>
      <path d="M 100 73 Q 100 78 105 83 L 95 83 Q 100 78 100 73" fill="#2563eb"/>
      <rect x="77" y="83" width="46" height="35" rx="4" fill="#2563eb"/>
      <circle cx="130" cy="60" r="15" fill="#93c5fd"/>
      <path d="M 130 75 Q 130 80 135 85 L 125 85 Q 130 80 130 75" fill="#2563eb"/>
      <rect x="110" y="85" width="40" height="30" rx="4" fill="#2563eb"/>
    </svg>,
    features: [
      "Multi-client campaign management",
      "White-label reporting",
      "Consolidated billing & invoicing",
      "Dedicated account support"
    ]
  },
];

export default function Services() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-mw-blue-600 text-sm font-medium uppercase tracking-wider">
            Our Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-mw-gray-900 mt-4 mb-6">
            Tailored Solutions for Every Stakeholder
          </h2>
          <p className="text-mw-gray-600 max-w-2xl mx-auto text-lg">
            Whether you&apos;re a brand, media owner, or agency, we provide the tools 
            and technology you need to succeed in the DOOH ecosystem.
          </p>
        </motion.div>

        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
            >
              {/* Illustration */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative h-80 rounded-2xl overflow-hidden border border-mw-gray-200 group hover:border-mw-blue-300 transition-all duration-300 hover:shadow-mw-lg">
                  <div className={`absolute inset-0 ${solution.bgColor}`} />
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="w-full h-full relative">
                      {solution.image ? (
                        <Image
                          src={solution.image}
                          alt={`${solution.title} illustration`}
                          fill
                          className="object-contain"
                        />
                      ) : (
                        solution.icon
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <h3 className="text-3xl font-bold text-mw-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-lg text-mw-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base text-mw-gray-700">
                      <svg className="w-6 h-6 text-mw-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href={solution.href}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-mw-blue-600 hover:bg-mw-blue-700 text-white font-medium rounded-lg transition-all duration-200 shadow-mw-md hover:shadow-mw-lg"
                >
                  Explore {solution.title} Solutions
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
