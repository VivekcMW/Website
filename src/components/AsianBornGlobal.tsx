"use client";

import { motion } from "framer-motion";

export default function AsianBornGlobal() {
  // Dots along continent borders
  const continentDots = [
    // North America border dots
    { cx: 150, cy: 140 }, { cx: 170, cy: 120 }, { cx: 200, cy: 105 }, { cx: 230, cy: 100 }, 
    { cx: 260, cy: 110 }, { cx: 280, cy: 120 }, { cx: 300, cy: 140 }, { cx: 310, cy: 160 },
    { cx: 305, cy: 185 }, { cx: 295, cy: 210 }, { cx: 280, cy: 235 }, { cx: 260, cy: 255 },
    { cx: 235, cy: 270 }, { cx: 210, cy: 280 }, { cx: 185, cy: 275 }, { cx: 160, cy: 260 },
    { cx: 145, cy: 235 }, { cx: 135, cy: 210 }, { cx: 130, cy: 185 }, { cx: 135, cy: 160 },
    
    // South America border dots
    { cx: 250, cy: 320 }, { cx: 270, cy: 305 }, { cx: 290, cy: 300 }, { cx: 305, cy: 315 },
    { cx: 315, cy: 340 }, { cx: 320, cy: 365 }, { cx: 315, cy: 390 }, { cx: 305, cy: 415 },
    { cx: 290, cy: 440 }, { cx: 270, cy: 460 }, { cx: 250, cy: 470 }, { cx: 235, cy: 455 },
    { cx: 225, cy: 430 }, { cx: 220, cy: 400 }, { cx: 225, cy: 370 }, { cx: 235, cy: 345 },
    
    // Europe border dots
    { cx: 480, cy: 120 }, { cx: 500, cy: 105 }, { cx: 525, cy: 100 }, { cx: 550, cy: 105 },
    { cx: 570, cy: 120 }, { cx: 585, cy: 140 }, { cx: 590, cy: 160 }, { cx: 580, cy: 180 },
    { cx: 560, cy: 195 }, { cx: 535, cy: 200 }, { cx: 510, cy: 195 }, { cx: 490, cy: 180 },
    { cx: 470, cy: 160 }, { cx: 465, cy: 140 },
    
    // Africa border dots
    { cx: 500, cy: 220 }, { cx: 525, cy: 205 }, { cx: 555, cy: 200 }, { cx: 580, cy: 215 },
    { cx: 600, cy: 240 }, { cx: 615, cy: 270 }, { cx: 620, cy: 305 }, { cx: 615, cy: 340 },
    { cx: 600, cy: 370 }, { cx: 580, cy: 395 }, { cx: 555, cy: 415 }, { cx: 525, cy: 420 },
    { cx: 500, cy: 405 }, { cx: 480, cy: 380 }, { cx: 465, cy: 350 }, { cx: 460, cy: 315 },
    { cx: 465, cy: 280 }, { cx: 480, cy: 250 },
    
    // Asia border dots (more dots for larger continent)
    { cx: 650, cy: 100 }, { cx: 680, cy: 85 }, { cx: 720, cy: 75 }, { cx: 760, cy: 80 },
    { cx: 800, cy: 90 }, { cx: 840, cy: 100 }, { cx: 875, cy: 115 }, { cx: 905, cy: 135 },
    { cx: 930, cy: 160 }, { cx: 950, cy: 190 }, { cx: 955, cy: 220 }, { cx: 945, cy: 250 },
    { cx: 920, cy: 275 }, { cx: 885, cy: 295 }, { cx: 845, cy: 305 }, { cx: 800, cy: 300 },
    { cx: 760, cy: 290 }, { cx: 720, cy: 280 }, { cx: 680, cy: 265 }, { cx: 650, cy: 245 },
    { cx: 630, cy: 220 }, { cx: 620, cy: 190 }, { cx: 620, cy: 160 }, { cx: 630, cy: 130 },
    
    // Australia border dots
    { cx: 880, cy: 360 }, { cx: 905, cy: 345 }, { cx: 935, cy: 340 }, { cx: 960, cy: 355 },
    { cx: 980, cy: 380 }, { cx: 990, cy: 410 }, { cx: 985, cy: 440 }, { cx: 965, cy: 465 },
    { cx: 935, cy: 480 }, { cx: 900, cy: 480 }, { cx: 870, cy: 465 }, { cx: 850, cy: 440 },
    { cx: 845, cy: 410 }, { cx: 855, cy: 380 },
  ];

  // Major city dots (larger, more prominent)
  const cityDots = [
    { cx: 200, cy: 180, label: "New York" },
    { cx: 550, cy: 150, label: "London" },
    { cx: 820, cy: 280, label: "Singapore" },
    { cx: 950, cy: 400, label: "Sydney" },
    { cx: 560, cy: 300, label: "Dubai" },
    { cx: 870, cy: 180, label: "Tokyo" },
    { cx: 760, cy: 240, label: "Mumbai" },
    { cx: 830, cy: 200, label: "Shanghai" },
    { cx: 500, cy: 160, label: "Paris" },
    { cx: 270, cy: 200, label: "Los Angeles" },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-mw-gray-900 to-mw-gray-800 overflow-hidden">
      {/* Animated World Map Background */}
      <div className="absolute inset-0 opacity-80">
        <svg
          viewBox="0 0 1200 600"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Blinking Border Dots for Continents */}
          {continentDots.map((dot, index) => (
            <motion.circle
              key={`border-${index}`}
              cx={dot.cx}
              cy={dot.cy}
              r="3"
              fill="#60A5FA"
              initial={{ opacity: 0.3 }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: (index % 20) * 0.1,
                ease: "easeInOut",
              }}
              filter="url(#glow)"
            />
          ))}

          {/* Animated Connection Lines */}
          <motion.g>
            {/* Singapore to various cities */}
            <motion.line
              x1="820" y1="280" x2="200" y2="180"
              stroke="#60A5FA"
              strokeWidth="1.5"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 1 }}
              opacity="0.6"
            />
            <motion.line
              x1="820" y1="280" x2="550" y2="150"
              stroke="#60A5FA"
              strokeWidth="1.5"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 1.2 }}
              opacity="0.6"
            />
            <motion.line
              x1="820" y1="280" x2="950" y2="400"
              stroke="#60A5FA"
              strokeWidth="1.5"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 1.4 }}
              opacity="0.6"
            />
            <motion.line
              x1="820" y1="280" x2="560" y2="300"
              stroke="#60A5FA"
              strokeWidth="1.5"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 1.6 }}
              opacity="0.6"
            />
            <motion.line
              x1="820" y1="280" x2="870" y2="180"
              stroke="#60A5FA"
              strokeWidth="1.5"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 1.8 }}
              opacity="0.6"
            />
          </motion.g>

          {/* Major City Points with Pulse */}
          {cityDots.map((city, index) => (
            <motion.g key={city.label}>
              {/* Outer pulse ring */}
              <motion.circle
                cx={city.cx}
                cy={city.cy}
                r="8"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: [0.8, 0, 0.8],
                  scale: [0.5, 1.5, 0.5],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: index * 0.25,
                }}
              />
              {/* Inner glow */}
              <motion.circle
                cx={city.cx}
                cy={city.cy}
                r="6"
                fill="#3B82F6"
                opacity="0.4"
                animate={{
                  r: [6, 10, 6],
                  opacity: [0.4, 0.15, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.25,
                }}
              />
              {/* Center dot */}
              <motion.circle
                cx={city.cx}
                cy={city.cy}
                r="4"
                fill="#60A5FA"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                filter="url(#glow)"
              />
            </motion.g>
          ))}
        </svg>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Asian Born, <span className="text-mw-blue-400">Global Footprint</span>
          </h2>
        </motion.div>

        {/* Centered Content */}
        <div className="space-y-8">
          {/* First Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-lg lg:text-xl text-white leading-relaxed">
              Out of Home is no longer static media. It is <span className="font-bold text-mw-blue-400">&apos;The World&apos;s Leading Connected Media Platform&apos;</span> powering real world influence. From Times Square to Orchard Road, every screen, sign, and space becomes a measurable touchpoint that brands can activate with digital precision.
            </p>
          </motion.div>

          {/* Second Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-lg lg:text-xl text-white leading-relaxed">
              Born in Asia and built for the world, our technology unifies fragmented outdoor inventory into a single ecosystem where advertisers can <span className="font-bold text-mw-blue-400">plan, buy, measure, reach, and influence</span> campaigns in real time.
            </p>
          </motion.div>

          {/* Third Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-lg lg:text-xl text-white leading-relaxed">
              We do not just place advertisements outside, we transform cities into intelligent media networks that deliver <span className="font-bold text-mw-blue-400">attention, relevance, and impact</span> everywhere audiences move.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
