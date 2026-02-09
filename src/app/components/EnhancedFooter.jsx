"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp } from "react-icons/fa";

const EnhancedFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                Mugisha Pacifique
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Full-Stack Developer & AI Enthusiast passionate about building innovative solutions 
              that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Experience", "Skills", "Projects", "Testimonials", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Connect With Me</h3>
            <div className="flex gap-3 mb-4">
              <a
                href="https://github.com/Pacifique5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="https://linkedin.com/in/mugisha-pacifique"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="mailto:Pacifiquem58@gmail.com"
                className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <FaEnvelope className="text-lg" />
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <a href="mailto:Pacifiquem58@gmail.com" className="hover:text-primary-500 transition-colors">
                Pacifiquem58@gmail.com
              </a>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <a href="tel:+250795653123" className="hover:text-primary-500 transition-colors">
                +250 795 653 123
              </a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Mugisha Pacifique. Made with{" "}
              <FaHeart className="inline text-red-500 animate-pulse" /> using Next.js & Tailwind CSS
            </p>
            
            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-sm font-medium">Back to Top</span>
              <FaArrowUp className="text-sm group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-purple"></div>
    </footer>
  );
};

export default EnhancedFooter;
