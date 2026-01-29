"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    id: 1,
    title: "Global Retail Brand Achieves 340% ROI",
    description: "How a leading retail chain transformed their OOH strategy across 15 markets, achieving unprecedented brand awareness and foot traffic increases.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    category: "Retail",
    metrics: "340% ROI",
    href: "/resources/case-studies/global-retail-brand-340-roi"
  },
  {
    id: 2,
    title: "FMCG Giant's Multi-Market Launch Success",
    description: "Orchestrating a synchronized product launch across 8 Asian markets using real-time programmatic DOOH and audience targeting.",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&h=600&fit=crop",
    category: "FMCG",
    metrics: "8 Markets",
    href: "/resources/case-studies/fmcg-multi-market-launch"
  },
  {
    id: 3,
    title: "Automotive Brand Drives Dealership Traffic",
    description: "Dynamic creative optimization and location-based targeting helped a premium auto brand increase showroom visits by 156%.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
    category: "Automotive",
    metrics: "156% Increase",
    href: "/resources/case-studies/automotive-dealership-traffic"
  },
  {
    id: 4,
    title: "Fintech App Acquisition at Scale",
    description: "Leveraging transit advertising and mobile retargeting to drive 2M+ app downloads across Southeast Asia in 90 days.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    category: "Finance",
    metrics: "2M+ Downloads",
    href: "/resources/case-studies/fintech-app-acquisition"
  }
];

export default function CaseStudiesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-mw-blue-100 rounded-full mb-6">
            <svg className="w-4 h-4 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-mw-blue-600 text-sm font-medium">Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-mw-gray-900 mb-4">
            Explore Our Case Studies
          </h2>
          <p className="text-lg text-mw-gray-600 max-w-3xl mx-auto">
            Discover how leading brands across industries have achieved remarkable results 
            with Moving Walls' connected media platform.
          </p>
        </motion.div>

        {/* Case Studies Grid - 2x2 */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-mw-gray-100"
            >
              {/* Image Thumbnail */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Category & Metrics overlay */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-mw-gray-800 text-xs font-semibold rounded-full">
                      {study.category}
                    </span>
                    <span className="px-3 py-1 bg-mw-blue-600 text-white text-xs font-bold rounded-full">
                      {study.metrics}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-mw-gray-900 mb-3 group-hover:text-mw-blue-600 transition-colors duration-300">
                  {study.title}
                </h3>
                <p className="text-mw-gray-600 text-sm leading-relaxed mb-5">
                  {study.description}
                </p>
                
                {/* CTA */}
                <Link 
                  href={study.href}
                  className="inline-flex items-center gap-2 text-mw-blue-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                >
                  View Case Study
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/resources/case-studies"
            className="inline-flex items-center gap-2 px-8 py-4 bg-mw-gray-900 text-white font-semibold rounded-full hover:bg-mw-gray-800 transition-colors duration-300"
          >
            View All Case Studies
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
