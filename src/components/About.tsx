"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-mw-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Animated circles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-mw-blue-200 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border-2 border-mw-blue-300 rounded-full"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16 border-2 border-mw-blue-400 rounded-full"
              />
              
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8 bg-white rounded-2xl shadow-mw-lg border border-mw-gray-200">
                  <div className="text-5xl font-bold text-mw-blue-600 mb-2">15+</div>
                  <div className="text-mw-gray-500 text-sm">Years of Excellence</div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-0 right-1/4 bg-white p-4 rounded-xl shadow-mw-md border border-mw-gray-200"
              >
                <div className="text-2xl font-bold text-mw-gray-900">50M+</div>
                <div className="text-xs text-mw-gray-500">Daily Impressions</div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-0 left-1/4 bg-white p-4 rounded-xl shadow-mw-md border border-mw-gray-200"
              >
                <div className="text-2xl font-bold text-mw-gray-900">100+</div>
                <div className="text-xs text-mw-gray-500">Markets</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-mw-gray-900 mb-6">
              Redefining Out-of-Home Advertising
            </h2>
            <p className="text-mw-gray-600 text-lg mb-6">
              MWWST is the leading technology-driven out-of-home advertising company, 
              combining innovative platforms with deep industry expertise to deliver 
              exceptional results for brands worldwide.
            </p>
            <p className="text-mw-gray-600 mb-8">
              Our mission is to make out-of-home advertising as targetable, measurable, 
              and effective as digital advertising—bringing the best of both worlds to 
              help brands connect with audiences in meaningful ways.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { label: "Data-Driven", desc: "Insights that power decisions" },
                { label: "Full Service", desc: "End-to-end solutions" },
                { label: "Global Reach", desc: "100+ markets worldwide" },
                { label: "Innovation", desc: "Cutting-edge technology" },
              ].map((item, index) => (
                <div key={index}>
                  <h4 className="text-mw-gray-900 font-semibold mb-1">{item.label}</h4>
                  <p className="text-mw-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <button className="px-6 py-3 bg-mw-blue-600 hover:bg-mw-blue-700 text-white font-medium rounded-lg transition-all duration-200 shadow-mw-md">
              Learn Our Story
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
