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
    bgColor: "bg-transparent",
    href: "/solutions/media-owners",
    image: "/assets/images/brands/Media-Owners.png",
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
    bgColor: "bg-transparent",
    href: "/solutions/agencies",
    image: "/assets/images/brands/Agencies.png",
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
                <div className="relative h-[280px] sm:h-[350px] md:h-[420px] lg:h-[500px] w-full">
                  <Image
                    src={solution.image}
                    alt={`${solution.title} illustration`}
                    fill
                    className="object-contain object-center lg:object-left"
                  />
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
