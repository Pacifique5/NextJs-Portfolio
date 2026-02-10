"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Senior Developer at Tech Company",
    relationship: "Colleague",
    image: "/images/7.png",
    text: "Working with Pacifique was an incredible experience. His dedication to clean code and innovative solutions is unmatched. He consistently delivered high-quality work and was always willing to help team members.",
    rating: 5,
    date: "January 2024"
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Project Manager",
    relationship: "Supervisor",
    image: "/images/8.png",
    text: "Pacifique demonstrated exceptional problem-solving skills and leadership throughout our project. His ability to learn new technologies quickly and apply them effectively made him an invaluable team member.",
    rating: 5,
    date: "December 2023"
  },
  {
    id: 3,
    name: "Alex Johnson",
    role: "Full-Stack Developer",
    relationship: "Colleague",
    image: "/images/10.png",
    text: "I had the pleasure of collaborating with Pacifique on multiple projects. His technical expertise in React and Next.js, combined with his excellent communication skills, made every project a success.",
    rating: 5,
    date: "November 2023"
  },
  {
    id: 4,
    name: "Sarah Williams",
    role: "UI/UX Designer",
    relationship: "Team Member",
    image: "/images/12.png",
    text: "Pacifique's attention to detail and commitment to creating user-friendly interfaces is remarkable. He bridges the gap between design and development seamlessly.",
    rating: 5,
    date: "October 2023"
  },
  {
    id: 5,
    name: "Michael Brown",
    role: "Tech Lead",
    relationship: "Mentor",
    image: "/images/7.png",
    text: "As Pacifique's mentor, I've watched him grow into an exceptional developer. His passion for learning and his ability to tackle complex challenges head-on is truly inspiring.",
    rating: 5,
    date: "September 2023"
  }
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex-shrink-0 w-[350px] md:w-[400px] bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 mx-3">
      {/* Quote Icon */}
      <div className="mb-4">
        <FaQuoteLeft className="text-3xl text-primary-500/20" />
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-4 italic line-clamp-4">
        "{testimonial.text}"
      </p>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400 text-lg" />
        ))}
      </div>

      {/* Author Info */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary-500 flex-shrink-0">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-base font-bold text-gray-900 dark:text-white truncate">
            {testimonial.name}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
            {testimonial.role}
          </p>
          <p className="text-xs text-primary-600 dark:text-primary-400">
            {testimonial.relationship} • {testimonial.date}
          </p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate testimonials for infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += scrollSpeed;
        
        // Reset scroll position for infinite loop
        const maxScroll = scrollContainer.scrollWidth / 3;
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused]);

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Testimonials & Recommendations
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            What colleagues, mentors, and team members say about working with me
          </p>
        </div>

        {/* Scrolling Testimonials Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-hidden py-4"
            style={{ scrollBehavior: 'auto' }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto"
        >
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 mb-2">
              {testimonials.length}+
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              Recommendations
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 mb-2">
              5.0
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              Average Rating
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 mb-2">
              100%
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              Would Recommend
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
