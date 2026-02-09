"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const EnhancedHeroSection = () => {
  return (
    <section className="relative lg:py-16 min-h-screen flex items-center overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="col-span-1 lg:col-span-7 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-sm font-medium inline-block">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          <h1 className="text-black dark:text-white mb-4 text-4xl sm:text-5xl lg:text-7xl font-extrabold">
            <span className="block mb-2">Hi, I'm</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-500 to-accent-purple">
              Mugisha Pacifique
            </span>
          </h1>

          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 h-20">
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                2000,
                "AI Enthusiast",
                2000,
                "Open-Source Contributor",
                2000,
                "Problem Solver",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500"
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-8 lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Passionate Full-Stack Developer specializing in <span className="text-primary-500 font-semibold">Next.js</span>, 
            <span className="text-secondary-500 font-semibold"> React</span>, and 
            <span className="text-accent-purple font-semibold"> AI</span>. Building innovative solutions 
            with a focus on user experience and performance.
          </p>

          {/* Quick Contact Info */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 text-sm text-gray-600 dark:text-gray-400">
            <a href="mailto:Pacifiquem58@gmail.com" className="flex items-center gap-2 hover:text-primary-500 transition-colors">
              <FaEnvelope /> Pacifiquem58@gmail.com
            </a>
            <a href="tel:+250795653123" className="flex items-center gap-2 hover:text-primary-500 transition-colors">
              <FaPhone /> +250 795 653 123
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <Link
              href="/#contact"
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
            >
              <span className="flex items-center justify-center gap-2">
                Let's Connect
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <a
              href="/MUGISHA PACIFIQUE.pdf"
              download
              className="px-8 py-4 rounded-full border-2 border-primary-500 text-primary-500 dark:text-primary-400 hover:bg-primary-500 hover:text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
            >
              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="https://github.com/Pacifique5"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://linkedin.com/in/mugisha-pacifique"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-1 lg:col-span-5 flex justify-center"
        >
          <div className="relative">
            {/* Animated Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-purple rounded-full blur-2xl opacity-30 animate-pulse"></div>
            
            {/* Image Container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-spin-slow" style={{ animationDuration: '8s' }}></div>
              <div className="absolute inset-2 bg-white dark:bg-gray-900 rounded-full overflow-hidden">
                <Image
                  src="/images/7.png"
                  alt="Mugisha Pacifique"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-3 border border-gray-200 dark:border-gray-700"
            >
              <div className="text-2xl">💻</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-3 border border-gray-200 dark:border-gray-700"
            >
              <div className="text-2xl">🚀</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500">
          <span className="text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default EnhancedHeroSection;
