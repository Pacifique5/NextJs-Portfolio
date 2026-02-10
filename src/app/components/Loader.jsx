"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center z-[9999] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated Background Gradient Orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -50, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20"
              animate={{
                scale: [1, 1.4, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  x: [0, Math.random() * 50 - 25, 0],
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Main Content */}
          <motion.div
            className="flex flex-col items-center gap-12 relative z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Logo Container with Orbit Rings */}
            <div className="relative w-[180px] h-[180px]">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-purple rounded-full blur-2xl opacity-30 animate-pulse" />

              {/* Orbit Rings */}
              <motion.div
                className="absolute w-full h-full border-[3px] border-transparent rounded-full"
                style={{
                  borderTopColor: "#0ea5e9",
                  borderRightColor: "#14b8a6",
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute w-[80%] h-[80%] top-[10%] left-[10%] border-[3px] border-transparent rounded-full"
                style={{
                  borderTopColor: "#14b8a6",
                  borderRightColor: "#a855f7",
                }}
                animate={{ rotate: -360 }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute w-[60%] h-[60%] top-[20%] left-[20%] border-[3px] border-transparent rounded-full"
                style={{
                  borderTopColor: "#a855f7",
                  borderRightColor: "#ec4899",
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Center Logo */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                  rotate: [0, 10, -10, 0],
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="relative">
                  <div className="absolute inset-0 text-[6rem] blur-xl opacity-50">
                    💼
                  </div>
                  <div className="relative text-[6rem] filter drop-shadow-[0_0_30px_rgba(14,165,233,0.8)]">
                    💼
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Text Container */}
            <div className="flex flex-col items-center gap-4">
              <motion.h2
                className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary-400 via-secondary-500 to-accent-purple bg-clip-text text-transparent"
                style={{
                  backgroundSize: "200% 200%",
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  y: { delay: 0.3 },
                  opacity: { delay: 0.3 },
                  backgroundPosition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                Mugisha Pacifique
              </motion.h2>
              <motion.p
                className="text-gray-300 text-base md:text-xl font-medium"
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: [1, 0.6, 1],
                }}
                transition={{
                  y: { delay: 0.5 },
                  opacity: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                Full-Stack Developer | AI Enthusiast
              </motion.p>
            </div>

            {/* Progress Bar */}
            <div className="w-[400px] max-w-[90vw]">
              <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden relative backdrop-blur-sm border border-gray-600/30">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-purple rounded-full relative overflow-hidden"
                  initial={{ width: "0%" }}
                  animate={{
                    width: "100%",
                  }}
                  transition={{
                    duration: 2.3,
                    ease: "easeInOut",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              </div>
              
              <motion.p
                className="text-center text-gray-400 text-sm mt-3"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Loading your experience...
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
