"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaPhp, FaDocker, 
  FaGitAlt, FaLinux, FaDatabase, FaFigma 
} from "react-icons/fa";
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, 
  SiPostgresql, SiDjango, SiLaravel, SiExpress, SiFirebase 
} from "react-icons/si";

const skillCategories = [
  {
    name: "Frontend",
    icon: "🎨",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", icon: <FaReact />, level: 95 },
      { name: "Next.js", icon: <SiNextdotjs />, level: 90 },
      { name: "TypeScript", icon: <SiTypescript />, level: 85 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 95 },
      { name: "HTML5/CSS3", icon: "🌐", level: 98 },
    ]
  },
  {
    name: "Backend",
    icon: "⚙️",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, level: 90 },
      { name: "Python", icon: <FaPython />, level: 88 },
      { name: "Java", icon: <FaJava />, level: 82 },
      { name: "PHP", icon: <FaPhp />, level: 80 },
      { name: "Express", icon: <SiExpress />, level: 85 },
    ]
  },
  {
    name: "Databases",
    icon: "🗄️",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql />, level: 85 },
      { name: "MongoDB", icon: <SiMongodb />, level: 88 },
      { name: "MySQL", icon: <FaDatabase />, level: 82 },
      { name: "Firebase", icon: <SiFirebase />, level: 80 },
    ]
  },
  {
    name: "Tools & Frameworks",
    icon: "🛠️",
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Git & GitHub", icon: <FaGitAlt />, level: 92 },
      { name: "Docker", icon: <FaDocker />, level: 78 },
      { name: "Linux", icon: <FaLinux />, level: 85 },
      { name: "Django", icon: <SiDjango />, level: 80 },
      { name: "Laravel", icon: <SiLaravel />, level: 75 },
    ]
  },
  {
    name: "AI & Data",
    icon: "🤖",
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "TensorFlow", icon: "🧠", level: 75 },
      { name: "OpenAI APIs", icon: "🤖", level: 85 },
      { name: "Data Analysis", icon: "📊", level: 80 },
      { name: "Prompt Engineering", icon: "💬", level: 88 },
    ]
  },
  {
    name: "Design & UX",
    icon: "🎭",
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "Figma", icon: <FaFigma />, level: 85 },
      { name: "UI/UX Design", icon: "✨", level: 82 },
      { name: "Responsive Design", icon: "📱", level: 95 },
    ]
  }
];

const SkillCard = ({ category, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-transparent overflow-hidden"
    >
      {/* Gradient Border on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
      <div className="absolute inset-[2px] bg-white dark:bg-gray-800 rounded-2xl -z-10"></div>

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-4xl">{category.icon}</span>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{category.name}</h3>
      </div>

      {/* Skills List */}
      <div className="space-y-4">
        {category.skills.map((skill, idx) => (
          <div key={idx}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xl text-gray-600 dark:text-gray-400">{skill.icon}</span>
                <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
              </div>
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">{skill.level}%</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : {}}
                transition={{ duration: 1, delay: index * 0.1 + idx * 0.1 }}
                className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 relative">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Soft Skills & Interests
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Team Leadership 👥",
              "Problem Solving 🧩",
              "Communication 💬",
              "Adaptability 🔄",
              "Time Management ⏰",
              "Critical Thinking 🧠",
              "Collaboration 🤝",
              "Continuous Learning 📚"
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                className="px-6 py-3 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 rounded-full text-gray-700 dark:text-gray-300 font-medium hover:scale-105 transition-transform duration-300"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillsShowcase;
