"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaBriefcase } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const SideDecorations = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Left Side - Social Links */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
        <div className="flex flex-col gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-r-2xl p-3 shadow-xl border-r-4 border-primary-500">
          <a
            href="https://github.com/Pacifique5"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-12 h-12 rounded-lg bg-transparent flex items-center justify-center hover:scale-110 transition-all duration-300"
            title="GitHub"
          >
            <FaGithub className="text-gray-800 dark:text-white text-2xl" />
            <span className="absolute left-full ml-3 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              GitHub
            </span>
          </a>
          
          <a
            href="https://linkedin.com/in/mugisha-pacifique"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-12 h-12 rounded-lg bg-transparent flex items-center justify-center hover:scale-110 transition-all duration-300"
            title="LinkedIn"
          >
            <FaLinkedin className="text-[#0A66C2] text-2xl" />
            <span className="absolute left-full ml-3 px-3 py-1 bg-blue-700 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              LinkedIn
            </span>
          </a>
          
          <a
            href="mailto:Pacifiquem58@gmail.com"
            className="group relative w-12 h-12 rounded-lg bg-transparent flex items-center justify-center hover:scale-110 transition-all duration-300"
            title="Gmail"
          >
            <SiGmail className="text-[#EA4335] text-2xl" />
            <span className="absolute left-full ml-3 px-3 py-1 bg-red-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Email Me
            </span>
          </a>

          {/* Decorative Line */}
          <div className="w-full h-px bg-gradient-to-r from-primary-500 to-transparent" />
          
          {/* WhatsApp Badge */}
          <a
            href="https://wa.me/250795653123"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-12 h-12 rounded-lg bg-transparent flex items-center justify-center hover:scale-110 transition-all duration-300"
            title="WhatsApp"
          >
            <FaWhatsapp className="text-[#25D366] text-2xl" />
            <span className="absolute left-full ml-3 px-3 py-1 bg-green-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              WhatsApp Me
            </span>
          </a>
        </div>
      </div>

      {/* Right Side - Progress & Stats */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
        <div className="flex flex-col gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-l-2xl p-3 shadow-xl border-l-4 border-secondary-500">
          {/* Scroll Progress */}
          <div className="relative w-12 h-32 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-500 via-secondary-500 to-accent-purple"
              style={{ height: `${scrollProgress}%` }}
              transition={{ duration: 0.1 }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold text-gray-700 dark:text-white z-10">
                {Math.round(scrollProgress)}%
              </span>
            </div>
          </div>

          {/* Decorative Line */}
          <div className="w-full h-px bg-gradient-to-l from-secondary-500 to-transparent" />

          {/* Quick Stats */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-12 h-12 rounded-lg bg-transparent flex flex-col items-center justify-center cursor-default group relative"
            title="Years of Experience"
          >
            <span className="text-lg font-bold text-primary-600 dark:text-primary-400">5+</span>
            <span className="text-[8px] leading-none text-gray-600 dark:text-gray-400">Years</span>
            <span className="absolute right-full mr-3 px-3 py-1 bg-primary-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Years Experience
            </span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-12 h-12 rounded-lg bg-transparent flex flex-col items-center justify-center cursor-default group relative"
            title="Projects Completed"
          >
            <span className="text-lg font-bold text-secondary-600 dark:text-secondary-400">25+</span>
            <span className="text-[8px] leading-none text-gray-600 dark:text-gray-400">Projects</span>
            <span className="absolute right-full mr-3 px-3 py-1 bg-secondary-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Projects Completed
            </span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-12 h-12 rounded-lg bg-transparent flex flex-col items-center justify-center cursor-default group relative"
            title="Certificates Earned"
          >
            <span className="text-lg font-bold text-accent-purple">25+</span>
            <span className="text-[8px] leading-none text-gray-600 dark:text-gray-400">Certs</span>
            <span className="absolute right-full mr-3 px-3 py-1 bg-purple-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Certificates
            </span>
          </motion.div>

          {/* Decorative Line */}
          <div className="w-full h-px bg-gradient-to-l from-accent-purple to-transparent" />

          {/* Availability Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-12 h-12 rounded-lg bg-transparent flex items-center justify-center cursor-default group relative"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaBriefcase className="text-green-500 text-2xl" />
            <span className="absolute right-full mr-3 px-3 py-1 bg-green-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Available for Work
            </span>
          </motion.div>
        </div>
      </div>

      {/* Top Decorative Lines */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-purple z-50" />
    </>
  );
};

export default SideDecorations;
