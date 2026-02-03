"use client";

import { motion } from "framer-motion";

export default function CustomerLogos() {
  const customers = [
    { 
      name: "Coca-Cola", 
      logo: (
        <svg viewBox="0 0 100 32" className="h-8 w-auto">
          <path fill="#E61A22" d="M17.7 2.7c-1.1 0-2.1.3-3.1 1-1.5 1-2.3 2.5-2.3 4.4 0 2 .8 3.5 2.3 4.5 1 .7 2 1 3.1 1 1.1 0 2.1-.3 3.1-1 1.5-1 2.3-2.5 2.3-4.5 0-2-.8-3.4-2.3-4.4-1-.7-2-1-3.1-1zm0 8.3c-.9 0-1.7-.3-2.3-1-.6-.6-.9-1.4-.9-2.4 0-1 .3-1.8.9-2.4.6-.6 1.4-1 2.3-1 .9 0 1.7.3 2.3 1 .6.6.9 1.4.9 2.4 0 1-.3 1.8-.9 2.4-.6.7-1.4 1-2.3 1zM35.5 8.2c0-1.8-.5-3.1-1.6-4.1-1.1-1-2.5-1.4-4.2-1.4-1.5 0-2.8.5-3.9 1.4-1.1 1-1.7 2.3-1.7 4.1 0 1.8.6 3.2 1.7 4.1 1.1.9 2.4 1.4 3.9 1.4 1.3 0 2.4-.3 3.4-1l-.9-1.4c-.7.5-1.5.7-2.5.7-.9 0-1.7-.3-2.3-.8-.6-.5-1-1.2-1-2.1h7.1v-.9zm-7.1-.8c.1-.8.4-1.4.9-1.8.5-.5 1.2-.7 2-.7.8 0 1.4.2 1.9.7.5.4.8 1 .9 1.8h-5.7zM41.8 2.7c-1.1 0-2.1.3-3.1 1-1.5 1-2.3 2.5-2.3 4.4 0 2 .8 3.5 2.3 4.5 1 .7 2 1 3.1 1 1.1 0 2.1-.3 3.1-1 1.5-1 2.3-2.5 2.3-4.5 0-2-.8-3.4-2.3-4.4-1-.7-2-1-3.1-1zm0 8.3c-.9 0-1.7-.3-2.3-1-.6-.6-.9-1.4-.9-2.4 0-1 .3-1.8.9-2.4.6-.6 1.4-1 2.3-1 .9 0 1.7.3 2.3 1 .6.6.9 1.4.9 2.4 0 1-.3 1.8-.9 2.4-.6.7-1.4 1-2.3 1z"/>
        </svg>
      )
    },
    { 
      name: "McDonald's", 
      logo: (
        <svg viewBox="0 0 88 80" className="h-10 w-auto">
          <path fill="#FFC72C" d="M0 56.8L16 0h14l-16 56.8c-2.3 8.1-7.1 14.3-14 18.5v-8.5c3.3-2.3 5.7-5.5 7-9.5L0 56.8zM58 0h14l16 56.8c1.3 4.5 3.7 7.7 7 9.5v8.5c-6.9-4.2-11.7-10.4-14-18.5L58 0z"/>
        </svg>
      )
    },
    { 
      name: "Nike", 
      logo: (
        <svg viewBox="0 0 100 35" className="h-7 w-auto">
          <path fill="#111" d="M21 0c-1.3 4.5-2.9 9-4.8 13.5C10.9 25.5 3.8 32.1 0 35c6.2-1.1 13.9-5.3 20.3-12.5 4.9-5.5 8.8-11.8 11.7-18.5H21z"/>
          <path fill="#111" d="M100 0H21c2.9 6.7 6.8 13 11.7 18.5C39 25.7 46.7 29.9 52.9 31c-3.8-2.9-10.9-9.5-16.2-21.5C34.9 5 33.3.5 32 0H100z"/>
        </svg>
      )
    },
    { 
      name: "Apple", 
      logo: (
        <svg viewBox="0 0 24 24" className="h-8 w-auto">
          <path fill="#000" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
      )
    },
    { 
      name: "Samsung", 
      logo: (
        <svg viewBox="0 0 100 16" className="h-5 w-auto">
          <path fill="#1428A0" d="M0 8c0-4.4 3.6-8 8-8h84c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8z"/>
          <text x="50" y="12" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Arial">SAMSUNG</text>
        </svg>
      )
    },
    { 
      name: "Adidas", 
      logo: (
        <svg viewBox="0 0 100 65" className="h-8 w-auto">
          <path fill="#000" d="M0 65l33-57.1L51 38 33 65H0zM38.5 0l33 57.1L53.5 65h-13l18-30L40 0h-1.5zM100 65L67 7.9 85 0l15 26V65z"/>
        </svg>
      )
    },
    { 
      name: "Pepsi", 
      logo: (
        <svg viewBox="0 0 100 100" className="h-10 w-auto">
          <circle cx="50" cy="50" r="48" fill="#E32934"/>
          <path fill="#004883" d="M50 2C24.6 2 4 22.1 4 47c0 3.4.4 6.7 1.1 9.9C13.7 37.3 30.5 22 50 22c19.5 0 36.3 15.3 44.9 34.9.7-3.2 1.1-6.5 1.1-9.9C96 22.1 75.4 2 50 2z"/>
          <path fill="#fff" d="M5.1 56.9C6.3 62 8.2 66.8 10.8 71c8.6-19.6 25.4-34.9 44.9-34.9s36.3 15.3 44.9 34.9c2.6-4.2 4.5-9 5.7-14.1C97.7 76.5 80.9 91.8 61.4 91.8c-19.5 0-36.3-15.3-44.9-34.9-8.6 19.6-25.4 34.9-44.9 34.9"/>
        </svg>
      )
    },
    { 
      name: "BMW", 
      logo: (
        <svg viewBox="0 0 100 100" className="h-10 w-auto">
          <circle cx="50" cy="50" r="48" fill="#fff" stroke="#000" strokeWidth="3"/>
          <circle cx="50" cy="50" r="40" fill="#fff"/>
          <path fill="#0066B1" d="M50 10v40h40c0-22.1-17.9-40-40-40z"/>
          <path fill="#0066B1" d="M50 90V50H10c0 22.1 17.9 40 40 40z"/>
          <text x="50" y="20" fill="#000" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="Arial">BMW</text>
        </svg>
      )
    },
    { 
      name: "Mercedes", 
      logo: (
        <svg viewBox="0 0 100 100" className="h-10 w-auto">
          <circle cx="50" cy="50" r="48" fill="none" stroke="#000" strokeWidth="3"/>
          <path fill="#000" d="M50 5L50 50 95 50C95 25.2 75.3 5 50 5z"/>
          <path fill="#000" d="M50 50L50 95 5 95C5 70.2 24.7 50 50 50z"/>
          <circle cx="50" cy="50" r="15" fill="#fff"/>
          <path fill="#000" d="M50 35v30M35 57l15-22 15 22"/>
        </svg>
      )
    },
    { 
      name: "Toyota", 
      logo: (
        <svg viewBox="0 0 100 65" className="h-8 w-auto">
          <ellipse cx="50" cy="32" rx="48" ry="30" fill="none" stroke="#CC0000" strokeWidth="3"/>
          <ellipse cx="50" cy="32" rx="20" ry="12" fill="none" stroke="#CC0000" strokeWidth="2"/>
          <path fill="none" stroke="#CC0000" strokeWidth="2" d="M30 32c0-16 8.9-29 20-29M50 3c11.1 0 20 13 20 29M70 32c0 16-8.9 29-20 29"/>
        </svg>
      )
    },
    { 
      name: "Unilever", 
      logo: (
        <svg viewBox="0 0 100 100" className="h-10 w-auto">
          <path fill="#1F36C7" d="M50 5C25.1 5 5 25.1 5 50c0 5.5 1 10.8 2.8 15.7l8.5-5c-.9-3.3-1.3-6.9-1.3-10.7 0-19.3 15.7-35 35-35s35 15.7 35 35c0 3.8-.5 7.4-1.3 10.7l8.5 5C94 60.8 95 55.5 95 50 95 25.1 74.9 5 50 5z"/>
          <text x="50" y="60" fill="#1F36C7" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="Arial">U</text>
        </svg>
      )
    },
    { 
      name: "P&G", 
      logo: (
        <svg viewBox="0 0 100 100" className="h-10 w-auto">
          <circle cx="50" cy="50" r="45" fill="#003DA5"/>
          <text x="50" y="58" fill="#fff" fontSize="24" fontWeight="bold" textAnchor="middle" fontFamily="serif">P&amp;G</text>
        </svg>
      )
    },
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
                className="flex-shrink-0 w-48 h-28 bg-white rounded-xl border-2 border-mw-gray-200 flex flex-col items-center justify-center group hover:border-mw-blue-400 hover:shadow-mw-lg transition-all duration-300 px-4"
              >
                <div className="flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                  {customer.logo}
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
