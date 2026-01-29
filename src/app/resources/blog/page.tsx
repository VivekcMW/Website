"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Industry Trends", "Best Practices", "Product Updates", "Case Studies", "Technology"];

  const articles = [
    {
      title: "The Future of Digital Out-of-Home Advertising in 2025",
      excerpt: "Explore the latest trends shaping the DOOH landscape and how AI is transforming campaign performance.",
      category: "Industry Trends",
      author: "Sarah Johnson",
      date: "Dec 1, 2025",
      readTime: "8 min read",
      image: "/placeholder.jpg",
      featured: true
    },
    {
      title: "10 Best Practices for Automotive Advertising Campaigns",
      excerpt: "Learn how to reach car shoppers at every stage of their journey with proven strategies.",
      category: "Best Practices",
      author: "Michael Chen",
      date: "Nov 28, 2025",
      readTime: "6 min read",
      image: "/placeholder.jpg"
    },
    {
      title: "Introducing MW-Science: AI-Powered Audience Insights",
      excerpt: "Discover how our new AI-powered platform helps you understand and target audiences better.",
      category: "Product Updates",
      author: "Emily Rodriguez",
      date: "Nov 25, 2025",
      readTime: "5 min read",
      image: "/placeholder.jpg"
    },
    {
      title: "How Retail Brands Are Winning with Location-Based Marketing",
      excerpt: "Real-world examples of successful retail campaigns using geo-targeting technology.",
      category: "Case Studies",
      author: "David Park",
      date: "Nov 22, 2025",
      readTime: "7 min read",
      image: "/placeholder.jpg"
    },
    {
      title: "Understanding Programmatic DOOH: A Beginner's Guide",
      excerpt: "Everything you need to know about programmatic digital out-of-home advertising.",
      category: "Best Practices",
      author: "Lisa Thompson",
      date: "Nov 19, 2025",
      readTime: "10 min read",
      image: "/placeholder.jpg"
    },
    {
      title: "The Role of Machine Learning in Ad Optimization",
      excerpt: "How ML algorithms are revolutionizing campaign performance and ROI.",
      category: "Technology",
      author: "James Wilson",
      date: "Nov 15, 2025",
      readTime: "9 min read",
      image: "/placeholder.jpg"
    },
    {
      title: "Healthcare Marketing: Reaching Patients Effectively",
      excerpt: "Strategies for healthcare brands to connect with patients while maintaining compliance.",
      category: "Industry Trends",
      author: "Dr. Amanda Lee",
      date: "Nov 12, 2025",
      readTime: "6 min read",
      image: "/placeholder.jpg"
    },
    {
      title: "Measuring Campaign Success: Key Metrics That Matter",
      excerpt: "A comprehensive guide to tracking and analyzing your advertising performance.",
      category: "Best Practices",
      author: "Robert Martinez",
      date: "Nov 8, 2025",
      readTime: "8 min read",
      image: "/placeholder.jpg"
    }
  ];

  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const featuredArticle = articles.find(a => a.featured);

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
                <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" />
              </svg>
              <span className="text-mw-blue-600 text-sm font-medium">Moving Walls Blog</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-mw-gray-900 mb-6">
              Industry Insights &
              <span className="text-mw-blue-600 block">Expert Tips</span>
            </h1>
            <p className="text-xl text-mw-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Stay ahead with the latest trends, best practices, and insights from advertising experts.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-6 py-4 pl-14 border border-mw-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-mw-blue-500 focus:border-transparent shadow-mw-sm"
                />
                <svg className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-mw-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-mw-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-mw-blue-600 text-white shadow-mw-sm"
                    : "bg-mw-gray-100 text-mw-gray-700 hover:bg-mw-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {selectedCategory === "All" && featuredArticle && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-mw-blue-600 to-mw-blue-800 rounded-2xl overflow-hidden shadow-mw-xl"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
                <div className="text-white">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full mb-4">
                    Featured Article
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">{featuredArticle.title}</h2>
                  <p className="text-blue-100 text-lg mb-6">{featuredArticle.excerpt}</p>
                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium">{featuredArticle.author[0]}</span>
                      </div>
                      <span className="text-sm">{featuredArticle.author}</span>
                    </div>
                    <span className="text-sm text-blue-100">{featuredArticle.date}</span>
                    <span className="text-sm text-blue-100">{featuredArticle.readTime}</span>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-mw-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Read Article
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="aspect-video bg-white/10 rounded-xl backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-20 h-20 text-white/30" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm2 0v8h12V6H4z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-16 bg-mw-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-mw-gray-900">
              {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
            </h2>
            <span className="text-sm text-mw-gray-600">{filteredArticles.length} articles</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href="#" className="group block bg-white rounded-xl overflow-hidden shadow-mw-sm hover:shadow-mw-lg transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-mw-blue-500 to-mw-blue-700 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-16 h-16 text-white/20" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm2 0v8h12V6H4z" />
                      </svg>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white text-mw-blue-600 text-xs font-medium rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-mw-gray-900 mb-3 group-hover:text-mw-blue-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-mw-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-mw-gray-200">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-mw-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-mw-gray-600">{article.author[0]}</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-mw-gray-900">{article.author}</p>
                          <p className="text-xs text-mw-gray-500">{article.date}</p>
                        </div>
                      </div>
                      <span className="text-sm text-mw-gray-500">{article.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-mw-blue-600 hover:bg-mw-blue-700 text-white font-medium rounded-lg transition-colors shadow-mw-md">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-mw-gray-900 to-mw-gray-800 rounded-2xl p-8 lg:p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Never Miss an Update</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest insights, tips, and industry news delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-mw-blue-500"
              />
              <button className="px-8 py-3 bg-mw-blue-600 hover:bg-mw-blue-700 text-white font-medium rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">No spam. Unsubscribe anytime.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
