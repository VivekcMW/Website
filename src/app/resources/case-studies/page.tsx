"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const industries = ["All", "Automotive", "Retail", "Healthcare", "Finance", "Technology", "FMCG"];

  const caseStudies = [
    {
      title: "Premium Automotive Brand Achieves 300% ROI in Q4",
      slug: "automotive-dealership-traffic",
      industry: "Automotive",
      client: "Luxury Auto Group",
      challenge: "Increase dealership visits and test drive bookings during competitive holiday season",
      solution: "Multi-channel DOOH campaign with geo-targeting around dealerships and high-traffic areas",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
      results: [
        { metric: "ROI Increase", value: "+300%" },
        { metric: "Dealership Visits", value: "+187%" },
        { metric: "Test Drives", value: "+245%" },
        { metric: "Campaign Reach", value: "5.2M" }
      ],
      testimonial: "Moving Walls helped us completely transform our Q4 performance. The results exceeded all expectations.",
      author: "James Patterson",
      role: "Marketing Director",
      duration: "90 days",
      budget: "$250K",
      featured: true
    },
    {
      title: "National Retail Chain Drives 45% Foot Traffic Increase",
      slug: "global-retail-brand-340-roi",
      industry: "Retail",
      client: "FashionForward Stores",
      challenge: "Combat declining in-store visits amid shift to online shopping",
      solution: "Location-based targeting with dynamic creative showcasing real-time promotions",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      results: [
        { metric: "Foot Traffic", value: "+45%" },
        { metric: "In-Store Sales", value: "+62%" },
        { metric: "Brand Awareness", value: "+38%" },
        { metric: "Mobile Engagement", value: "+156%" }
      ],
      testimonial: "The geo-targeting capabilities brought customers back to our physical stores in record numbers.",
      author: "Maria Gonzalez",
      role: "VP of Marketing",
      duration: "120 days",
      budget: "$180K"
    },
    {
      title: "Healthcare Provider Reaches 2M Patients with Compliance",
      slug: "healthcare-patient-reach",
      industry: "Healthcare",
      client: "MedCare Network",
      challenge: "Increase awareness of preventive care services while maintaining HIPAA compliance",
      solution: "Privacy-first targeting campaign focused on wellness messaging and appointment bookings",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
      results: [
        { metric: "Impressions", value: "2.1M" },
        { metric: "Appointments", value: "+78%" },
        { metric: "Website Traffic", value: "+124%" },
        { metric: "Cost Per Lead", value: "-42%" }
      ],
      testimonial: "Moving Walls understood our compliance needs while delivering exceptional results.",
      author: "Dr. Robert Chen",
      role: "Chief Marketing Officer",
      duration: "60 days",
      budget: "$95K"
    },
    {
      title: "Fintech Startup Generates 5,000+ Quality Leads",
      slug: "fintech-app-acquisition",
      industry: "Finance",
      client: "NextGen Financial",
      challenge: "Build brand awareness and generate qualified leads in competitive market",
      solution: "Strategic DOOH placement in financial districts with QR code integration",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      results: [
        { metric: "Qualified Leads", value: "5,234" },
        { metric: "Brand Lift", value: "+89%" },
        { metric: "App Downloads", value: "+312%" },
        { metric: "Customer Acquisition", value: "+145%" }
      ],
      testimonial: "Outstanding performance. The quality of leads was exceptional and conversion rates surpassed benchmarks.",
      author: "Sarah Williams",
      role: "Head of Growth",
      duration: "45 days",
      budget: "$125K"
    },
    {
      title: "Tech Company Launches Product with 10M Impressions",
      slug: "tech-product-launch",
      industry: "Technology",
      client: "InnovateTech Corp",
      challenge: "Create buzz for new product launch in saturated market",
      solution: "Integrated campaign across major tech hubs with interactive digital displays",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      results: [
        { metric: "Impressions", value: "10.2M" },
        { metric: "Website Visits", value: "+425%" },
        { metric: "Pre-orders", value: "12.5K" },
        { metric: "Social Engagement", value: "+278%" }
      ],
      testimonial: "The campaign exceeded our wildest expectations. Product launch was our most successful ever.",
      author: "Alex Kumar",
      role: "Product Marketing Lead",
      duration: "30 days",
      budget: "$200K"
    },
    {
      title: "Regional Bank Increases Branch Visits by 67%",
      slug: "bank-branch-visits",
      industry: "Finance",
      client: "Community Trust Bank",
      challenge: "Drive awareness of new branch locations and digital banking services",
      solution: "Hyperlocal targeting around new branches with financial education messaging",
      image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=800&h=600&fit=crop",
      results: [
        { metric: "Branch Visits", value: "+67%" },
        { metric: "New Accounts", value: "+142%" },
        { metric: "Digital Adoption", value: "+89%" },
        { metric: "Brand Recall", value: "+73%" }
      ],
      testimonial: "Moving Walls helped us successfully launch 5 new branches with measurable results.",
      author: "Thomas Anderson",
      role: "Regional Marketing Director",
      duration: "90 days",
      budget: "$145K"
    },
    {
      title: "FMCG Giant's Multi-Market Launch Success",
      slug: "fmcg-multi-market-launch",
      industry: "FMCG",
      client: "Global Consumer Brands",
      challenge: "Orchestrate a synchronized product launch across 8 Asian markets",
      solution: "Real-time programmatic DOOH and audience targeting across multiple regions",
      image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&h=600&fit=crop",
      results: [
        { metric: "Markets", value: "8" },
        { metric: "Brand Awareness", value: "+156%" },
        { metric: "Sales Lift", value: "+89%" },
        { metric: "Impressions", value: "45M" }
      ],
      testimonial: "The synchronized launch across all markets was flawlessly executed.",
      author: "Jennifer Lee",
      role: "Regional Marketing Head",
      duration: "60 days",
      budget: "$350K"
    }
  ];

  const filteredCaseStudies = selectedIndustry === "All"
    ? caseStudies
    : caseStudies.filter(cs => cs.industry === selectedIndustry);

  const featuredCase = caseStudies.find(cs => cs.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-mw-blue-50 via-white to-mw-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-mw-blue-100 rounded-full mb-8">
              <svg className="w-4 h-4 text-mw-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-mw-blue-600 text-sm font-medium">Success Stories</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-mw-gray-900 mb-6">
              Case Studies &
              <span className="text-mw-blue-600 block">Client Success</span>
            </h1>
            <p className="text-xl text-mw-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Discover how leading brands achieve exceptional results with Moving Walls's advertising solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {[
                { number: "500+", label: "Success Stories" },
                { number: "275%", label: "Avg ROI" },
                { number: "98%", label: "Client Retention" },
                { number: "$2B+", label: "Ad Spend Managed" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-mw-blue-600 mb-1">{stat.number}</div>
                  <div className="text-sm text-mw-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-8 bg-white border-b border-mw-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                  selectedIndustry === industry
                    ? "bg-mw-blue-600 text-white shadow-mw-sm"
                    : "bg-mw-gray-100 text-mw-gray-700 hover:bg-mw-gray-200"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      {selectedIndustry === "All" && featuredCase && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-mw-blue-600 to-mw-blue-800 rounded-2xl overflow-hidden shadow-mw-xl"
            >
              <div className="p-8 lg:p-12">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full mb-6">
                  Featured Case Study
                </span>
                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="text-white">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">{featuredCase.title}</h2>
                    <p className="text-blue-100 text-lg mb-6">{featuredCase.challenge}</p>
                    
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      {featuredCase.results.map((result, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                          <div className="text-3xl font-bold mb-1">{result.value}</div>
                          <div className="text-sm text-blue-100">{result.metric}</div>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/resources/case-studies/${featuredCase.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-mw-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      Read Full Story
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-white font-bold mb-4">Client Testimonial</h3>
                    <blockquote className="text-blue-100 text-lg mb-4">"{featuredCase.testimonial}"</blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium">{featuredCase.author[0]}</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">{featuredCase.author}</p>
                        <p className="text-sm text-blue-100">{featuredCase.role}, {featuredCase.client}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Case Studies Grid */}
      <section className="py-16 bg-mw-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-mw-gray-900">
              {selectedIndustry === "All" ? "All Case Studies" : `${selectedIndustry} Case Studies`}
            </h2>
            <span className="text-sm text-mw-gray-600">{filteredCaseStudies.length} stories</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredCaseStudies.map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-mw-gray-100"
              >
                {/* Image Thumbnail */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Category & Key Metric overlay */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-mw-gray-800 text-xs font-semibold rounded-full">
                        {caseStudy.industry}
                      </span>
                      <span className="px-3 py-1 bg-mw-blue-600 text-white text-xs font-bold rounded-full">
                        {caseStudy.results[0].value}
                      </span>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="text-white/80 text-sm">{caseStudy.duration}</span>
                      <span className="text-white/80 text-sm">{caseStudy.budget}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-mw-gray-900 mb-2 group-hover:text-mw-blue-600 transition-colors duration-300">
                    {caseStudy.title}
                  </h3>
                  <p className="text-sm text-mw-blue-600 font-medium mb-3">{caseStudy.client}</p>
                  <p className="text-mw-gray-600 text-sm leading-relaxed mb-5">
                    {caseStudy.challenge}
                  </p>
                  
                  {/* CTA */}
                  <Link 
                    href={`/resources/case-studies/${caseStudy.slug}`}
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-mw-blue-600 to-mw-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve exceptional results like these.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-mw-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors shadow-mw-lg"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
