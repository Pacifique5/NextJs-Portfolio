"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaRobot, FaGraduationCap } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "Next Portfolio Website",
    description: "A modern portfolio website built with Next.js and Tailwind CSS featuring smooth animations and responsive design.",
    image: "/images/projects/11.png",
    tags: ["Next.js", "React", "Tailwind CSS"],
    category: "Web",
    icon: <FaCode />,
    gitUrl: "https://github.com",
    previewUrl: "https://github.com",
    featured: true,
  },
  {
    id: 2,
    title: "FARM PRO",
    description: "A full-stack farm management system with inventory tracking, crop monitoring, and analytics dashboard.",
    image: "/images/projects/2.png",
    tags: ["Laravel", "PHP", "MySQL"],
    category: "Web",
    icon: <FaCode />,
    gitUrl: "https://github.com",
    previewUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Library Management System",
    description: "A comprehensive library management solution with book tracking, borrowing history, and admin panel.",
    image: "/images/projects/3.png",
    tags: ["Laravel", "PHP", "MySQL"],
    category: "Web",
    icon: <FaCode />,
    gitUrl: "https://github.com",
    previewUrl: "https://github.com",
  },
  {
    id: 4,
    title: "CacheNet",
    description: "A network caching solution enabling offline content access for education during internet outages.",
    image: "/images/projects/4.png",
    tags: ["Next.js", "React Native", "Node.js"],
    category: "Mobile",
    icon: <FaMobile />,
    gitUrl: "https://github.com",
    previewUrl: "https://github.com",
    featured: true,
  },
  {
    id: 5,
    title: "Umurava-Website",
    description: "Youth mentorship platform with authentication and CRUD operations supporting empowerment and leadership.",
    image: "/images/projects/12.png",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    category: "Web",
    icon: <FaCode />,
    gitUrl: "https://github.com",
    previewUrl: "https://github.com",
  },
  {
    id: 6,
    title: "Vehicle Management System",
    description: "A complete vehicle management solution for tracking parking spaces, fees, and vehicle information.",
    image: "/images/projects/6.png",
    tags: ["HTML", "CSS", "PHP"],
    category: "Web",
    icon: <FaCode />,
    gitUrl: "https://github.com",
    previewUrl: "https://github.com",
  },
];

const categories = ["All", "Web", "Mobile", "AI"];

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${
        project.featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-20 px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full text-white text-sm font-semibold shadow-lg">
          ⭐ Featured
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

        {/* Hover Actions */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute inset-0 flex items-center justify-center gap-4 z-10"
            >
              <a
                href={project.gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white/90 dark:bg-gray-900/90 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white/90 dark:bg-gray-900/90 flex items-center justify-center hover:bg-secondary-500 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <FaExternalLinkAlt className="text-xl" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Icon Badge */}
        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/90 dark:bg-gray-900/90 flex items-center justify-center text-2xl">
          {project.icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full border border-primary-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const EnhancedProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Showcasing innovative solutions across web, mobile, and AI development
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg scale-105'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Pacifique5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            View More on GitHub
            <FaGithub className="text-xl" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EnhancedProjectsSection;
