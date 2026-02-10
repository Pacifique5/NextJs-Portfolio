"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp } from "react-icons/fa";

const EnhancedFooter = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/Pacifique5",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/mugisha-pacifique",
      label: "LinkedIn",
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:Pacifiquem58@gmail.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Experience", href: "#experience" },
    { title: "Projects", href: "#projects" },
    { title: "Testimonials", href: "#testimonials" },
    { title: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-900 text-white py-12 mt-20">
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-purple-500"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Mugisha Pacifique</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full-Stack Developer & AI Enthusiast from Rwanda rw | Building innovative solutions with modern technologies
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <span className="font-medium text-white">EMAIL:</span>{" "}
                <a href="mailto:pacifiquem58@gmail.com" className="hover:text-primary-400 transition-colors duration-300 block">
                  pacifiquem58@gmail.com
                </a>
              </p>
              <p>
                <span className="font-medium text-white">LOCATION:</span>{" "}
                <span className="block">Kigali, Rwanda rw</span>
              </p>
              <p>
                <span className="font-medium text-white">PHONE:</span>{" "}
                <a href="tel:+250795653123" className="hover:text-primary-400 transition-colors duration-300 block">
                  +250 795 653 123
                </a>
              </p>
              <p className="text-white font-medium pt-2">
                <span className="font-medium">AVAILABLE FOR:</span>{" "}
                <span className="block text-gray-400">Remote Internships & Freelance</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Mugisha Pacifique. Made with <FaHeart className="inline text-red-500 animate-pulse" /> in Rwanda rw
          </p>
          
          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white hover:shadow-lg hover:scale-110 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;
