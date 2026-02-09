"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    title: "ALX Africa",
    role: "Software Engineering & AI Internship",
    period: "2024",
    description: "Advanced software engineering practices and AI/ML implementation",
    icon: "🎓",
    color: "from-primary-500 to-primary-600"
  },
  {
    title: "Harvard Remote Internship",
    role: "Global Remote Work & Professional Skills",
    period: "2024",
    description: "Remote collaboration, professional development, and global teamwork",
    icon: "🌍",
    color: "from-secondary-500 to-secondary-600"
  },
  {
    title: "Code Alpha",
    role: "Python & Web Development Internship",
    period: "2023-2024",
    description: "Full-stack web development with Python frameworks",
    icon: "💻",
    color: "from-accent-purple to-accent-pink"
  },
  {
    title: "ThinkCyber",
    role: "Cybersecurity & Systems Security",
    period: "2023",
    description: "Security protocols, penetration testing, and system hardening",
    icon: "🔒",
    color: "from-accent-orange to-red-500"
  },
  {
    title: "DTP Academy",
    role: "DevOps & Software Engineering",
    period: "2023",
    description: "CI/CD pipelines, containerization, and cloud infrastructure",
    icon: "⚙️",
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Cyberium",
    role: "Linux, Python & Networking",
    period: "2022-2023",
    description: "System administration, scripting, and network architecture",
    icon: "🐧",
    color: "from-green-500 to-teal-600"
  }
];

const ExperienceCard = ({ experience, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex items-center gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'} mb-12`}
    >
      {/* Content Card */}
      <div className={`flex-1 ${isEven ? 'text-right' : 'text-left'}`}>
        <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500">
          <div className={`absolute inset-0 bg-gradient-to-r ${experience.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-2" style={{ justifyContent: isEven ? 'flex-end' : 'flex-start' }}>
              <span className="text-3xl">{experience.icon}</span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.title}</h3>
            </div>
            <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">{experience.role}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{experience.period}</p>
            <p className="text-gray-600 dark:text-gray-300">{experience.description}</p>
          </div>
        </div>
      </div>

      {/* Timeline Dot */}
      <div className="relative flex items-center justify-center">
        <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${experience.color} z-10 ring-4 ring-white dark:ring-gray-900`}></div>
      </div>

      {/* Spacer */}
      <div className="flex-1"></div>
    </motion.div>
  );
};

const ExperienceTimeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 relative">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Experience & Training
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            My journey through internships, training programs, and professional development
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-purple opacity-20"></div>

          {/* Experience Cards */}
          <div className="relative">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} index={index} />
            ))}
          </div>
        </div>

        {/* Additional Certifications Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-6 shadow-xl">
            <p className="text-white text-lg font-semibold mb-2">🏆 25+ Verified Certificates</p>
            <p className="text-white/90 text-sm">Cybersecurity • Linux • AI • Python • Remote Work • Software Engineering</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ExperienceTimeline;
