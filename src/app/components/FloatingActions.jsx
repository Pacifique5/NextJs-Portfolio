"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp, FaEnvelope, FaGithub, FaLinkedin, FaPlus, FaTimes } from "react-icons/fa";

const FloatingActions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const actions = [
    {
      icon: <FaArrowUp />,
      label: "Back to Top",
      onClick: scrollToTop,
      color: "from-primary-500 to-primary-600",
    },
    {
      icon: <FaEnvelope />,
      label: "Email Me",
      onClick: () => window.location.href = "mailto:Pacifiquem58@gmail.com",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      onClick: () => window.open("https://github.com/Pacifique5", "_blank"),
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      onClick: () => window.open("https://linkedin.com/in/mugisha-pacifique", "_blank"),
      color: "from-blue-600 to-blue-800",
    },
  ];

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-3">
      {/* Action Buttons */}
      <AnimatePresence>
        {isOpen && (
          <>
            {actions.map((action, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: 50, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 50, scale: 0.5 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                onClick={action.onClick}
                className="group flex items-center gap-3"
              >
                {/* Label */}
                <span className="px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {action.label}
                </span>
                
                {/* Icon Button */}
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${action.color} flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300`}>
                  {action.icon}
                </div>
              </motion.button>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
        whileHover={{ rotate: 180 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaTimes className="text-2xl" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaPlus className="text-2xl" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default FloatingActions;
