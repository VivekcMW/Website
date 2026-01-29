"use client";

import { motion } from "framer-motion";

export default function CustomerLogos() {
  const customers = [
    { name: "Coca-Cola", logo: "CC" },
    { name: "McDonald's", logo: "M" },
    { name: "Nike", logo: "NK" },
    { name: "Apple", logo: "A" },
    { name: "Samsung", logo: "S" },
    { name: "Adidas", logo: "AD" },
    { name: "Pepsi", logo: "P" },
    { name: "BMW", logo: "BMW" },
    { name: "Mercedes", logo: "MB" },
    { name: "Toyota", logo: "T" },
    { name: "Unilever", logo: "U" },
    { name: "P&G", logo: "P&G" },
  ];

  return (
    <section className="py-20 bg-mw-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-mw-blue-600 text-sm font-medium uppercase tracking-wider">
            Our Customers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-mw-gray-900 mt-4 mb-6">
            Trusted by Global Brands
          </h2>
          <p className="text-mw-gray-600 max-w-2xl mx-auto text-lg">
            Join hundreds of leading brands that trust Moving Walls for their out-of-home advertising campaigns
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-mw-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-mw-gray-50 to-transparent z-10" />

          {/* Scrolling logos */}
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            className="flex gap-8"
          >
            {/* Triple the customers for seamless loop */}
            {[...customers, ...customers, ...customers].map((customer, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-28 bg-white rounded-xl border-2 border-mw-gray-200 flex flex-col items-center justify-center group hover:border-mw-blue-400 hover:shadow-mw-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-mw-blue-600 to-mw-blue-700 rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">
                    {customer.logo}
                  </span>
                </div>
                <span className="text-sm font-semibold text-mw-gray-700 group-hover:text-mw-blue-600 transition-colors">
                  {customer.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-8 flex-wrap justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-mw-blue-600">500+</div>
              <div className="text-sm text-mw-gray-600 mt-1">Global Brands</div>
            </div>
            <div className="w-px h-12 bg-mw-gray-300 hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-mw-blue-600">50+</div>
              <div className="text-sm text-mw-gray-600 mt-1">Countries</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
