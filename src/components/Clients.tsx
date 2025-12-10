"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "Google Ads", category: "Technology" },
  { name: "Meta Business", category: "Social Media" },
  { name: "Amazon Ads", category: "E-commerce" },
  { name: "Microsoft Advertising", category: "Technology" },
  { name: "TikTok For Business", category: "Social Media" },
  { name: "Spotify Advertising", category: "Audio" },
  { name: "LinkedIn Marketing", category: "Professional" },
  { name: "Snap Inc", category: "Social Media" },
];

export default function Clients() {
  return (
    <section className="py-16 bg-white border-y border-mw-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-mw-gray-500 text-sm font-medium uppercase tracking-wider">
            Integrated With Leading Platforms
          </span>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex flex-col items-center justify-center p-6 bg-mw-gray-50 rounded-xl border border-mw-gray-200 hover:border-mw-blue-300 hover:shadow-mw-md transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-mw-blue-600 to-mw-blue-700 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">
                  {client.name.split(' ')[0].substring(0, 2).toUpperCase()}
                </span>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-mw-gray-900 group-hover:text-mw-blue-600 transition-colors">
                  {client.name}
                </div>
                <div className="text-xs text-mw-gray-500 mt-1">{client.category}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-mw-gray-500 mt-12 text-sm"
        >
          Seamlessly integrate with your existing marketing stack
        </motion.p>
      </div>
    </section>
  );
}
