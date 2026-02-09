"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// Character data for "3,000,000+"
const numberChars = [
  { char: '3', isZero: false },
  { char: ',', isZero: false },
  { char: '0', isZero: true },
  { char: '0', isZero: true },
  { char: '0', isZero: true },
  { char: ',', isZero: false },
  { char: '0', isZero: true },
  { char: '0', isZero: true },
  { char: '0', isZero: true },
  { char: '+', isZero: false },
];

export default function Sustainability() {
  const [visibleChars, setVisibleChars] = useState<number[]>([]);
  const [heartPhase, setHeartPhase] = useState<number[]>([]); // 0 = heart, 1 = transitioning, 2 = number
  const [startAnimation, setStartAnimation] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !startAnimation) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [startAnimation]);

  useEffect(() => {
    if (!startAnimation) return;

    let charIndex = 0;
    const timings = [
      300,  // 3
      200,  // ,
      400,  // 0 (heart first)
      400,  // 0
      400,  // 0
      200,  // ,
      400,  // 0
      400,  // 0
      400,  // 0
      300,  // +
    ];

    const showNextChar = () => {
      if (charIndex >= numberChars.length) return;

      const currentChar = numberChars[charIndex];
      const currentIndex = charIndex;

      if (currentChar.isZero) {
        // Show heart first
        setVisibleChars(prev => [...prev, currentIndex]);
        setHeartPhase(prev => [...prev, 0]); // Heart phase

        // After 300ms, transition to number
        setTimeout(() => {
          setHeartPhase(prev => {
            const newPhase = [...prev];
            const phaseIndex = newPhase.length - 1;
            if (phaseIndex >= 0) newPhase[phaseIndex] = 2;
            return newPhase;
          });
        }, 350);
      } else {
        // Show character directly
        setVisibleChars(prev => [...prev, currentIndex]);
        setHeartPhase(prev => [...prev, 2]); // Already number
      }

      charIndex++;
      if (charIndex < numberChars.length) {
        setTimeout(showNextChar, timings[charIndex]);
      }
    };

    // Start after initial delay
    setTimeout(showNextChar, 500);
  }, [startAnimation]);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background Video with fallback */}
      {!videoError ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setVideoError(true)}
        >
          <source src="/assets/videos/Sustainability BG.mp4" type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900" />
      )}

      {/* Green Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/85 to-green-800/85" />

      {/* Animated Falling Hearts Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(35)].map((_, i) => {
          const leftPosition = (i / 35) * 100;
          const size = 0.5 + (i % 4) * 0.2;
          const duration = 20 + (i % 6) * 4; // Much slower: 20-44 seconds
          const delay = (i / 35) * 12;
          
          // Multi-color palette for hearts
          const colors = [
            'text-pink-400',
            'text-rose-400', 
            'text-red-400',
            'text-orange-400',
            'text-amber-400',
            'text-yellow-400',
            'text-lime-400',
            'text-emerald-400',
            'text-teal-400',
            'text-cyan-400',
            'text-sky-400',
            'text-blue-400',
            'text-indigo-400',
            'text-violet-400',
            'text-purple-400',
            'text-fuchsia-400',
          ];
          const colorClass = colors[i % colors.length];
          
          return (
            <motion.div
              key={`heart-${i}`}
              className={`absolute ${colorClass}`}
              style={{ left: `${leftPosition}%` }}
              initial={{ 
                y: "-10%",
                scale: size,
                rotate: -15 + (i % 3) * 15,
                opacity: 0
              }}
              animate={{ 
                y: "-10%",
                rotate: [-15 + (i % 3) * 15, 15 - (i % 3) * 15],
                opacity: [0, 0.7, 0.7, 0]
              }}
              transition={{
                y: {
                  duration: duration,
                  repeat: Infinity,
                  delay: delay,
                  ease: "linear"
                },
                rotate: {
                  duration: duration,
                  repeat: Infinity,
                  delay: delay,
                  ease: "easeInOut"
                },
                opacity: {
                  duration: duration,
                  repeat: Infinity,
                  delay: delay,
                  times: [0, 0.05, 0.92, 1],
                  ease: "easeOut"
                }
              }}
            >
              <motion.div
                animate={{ y: ["-10%", "1100%"] }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  delay: delay,
                  ease: "linear"
                }}
              >
                <svg className="w-5 h-5 sm:w-7 sm:h-7 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Moving Hearts
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl text-emerald-100 mb-12"
          >
            Towards Sustainable OOH Media
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-block bg-white/10 backdrop-blur-md rounded-2xl p-8 sm:p-12 border border-white/20"
          >
            <p className="text-lg sm:text-xl text-emerald-100 mb-4">
              To date, our partners have generated
            </p>
            <div className="flex items-center justify-center min-h-[80px] sm:min-h-[96px] lg:min-h-[112px]">
              <div className="flex items-center">
                {numberChars.map((charData, index) => {
                  const isVisible = visibleChars.includes(index);
                  const phaseIndex = visibleChars.indexOf(index);
                  const phase = phaseIndex >= 0 ? heartPhase[phaseIndex] : -1;
                  const showHeart = charData.isZero && phase === 0;
                  
                  return (
                    <span
                      key={index}
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold relative inline-block"
                      style={{ minWidth: charData.char === ',' ? '20px' : '45px' }}
                    >
                      <AnimatePresence mode="wait">
                        {isVisible && (
                          <>
                            {showHeart ? (
                              <motion.span
                                key={`heart-${index}`}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ 
                                  scale: [0, 1.3, 1], 
                                  opacity: 1,
                                }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="absolute inset-0 flex items-center justify-center text-red-400"
                              >
                                <svg className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 drop-shadow-[0_0_15px_rgba(248,113,113,0.8)]" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                              </motion.span>
                            ) : (
                              <motion.span
                                key={`char-${index}`}
                                initial={{ scale: charData.isZero ? 0.5 : 0, opacity: 0, y: charData.isZero ? 0 : 10 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                transition={{ 
                                  duration: charData.isZero ? 0.25 : 0.2,
                                  ease: "easeOut"
                                }}
                                className="text-white inline-block"
                              >
                                {charData.char}
                              </motion.span>
                            )}
                          </>
                        )}
                      </AnimatePresence>
                    </span>
                  );
                })}
              </div>
            </div>
            <p className="text-2xl sm:text-3xl font-semibold text-emerald-200 mt-2">
              Hearts
            </p>
          </motion.div>

          {/* Additional Info */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-emerald-200/80 mt-8 max-w-2xl mx-auto"
          >
            Every campaign contributes to a more sustainable future for outdoor advertising.
          </motion.p>

          {/* Learn More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8"
          >
            <a
              href="https://movinghearts.media/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white hover:bg-emerald-50 text-emerald-700 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Learn More
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
