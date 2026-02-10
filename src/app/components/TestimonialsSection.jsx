"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Senior Developer at Tech Company",
    relationship: "Colleague",
    image: "/images/7.png", // Replace with actual testimonial images
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

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: isActive ? 1 : 0.3, scale: isActive ? 1 : 0.9 }}
      transition={{ duration: 0.5 }}
      className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 ${
        isActive ? '' : 'pointer-events-none'
      }`}
    >
      {/* Quote Icon */}
      <div className="mb-6">
        <FaQuoteLeft className="text-4xl text-primary-500/20" />
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6 italic">
        "{testimonial.text}"
      </p>

      {/* Rating */}
      <div className="flex gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400 text-xl" />
        ))}
      </div>

      {/* Author Info */}
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary-500">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="text-lg font-bold text-gray-900 dark:text-white">
            {testimonial.name}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {testimonial.role}
          </p>
          <p className="text-xs text-primary-600 dark:text-primary-400">
            {testimonial.relationship} • {testimonial.date}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

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

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <TestimonialCard testimonial={testimonials[currentIndex]} isActive={true} />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-primary-500 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-primary-500 w-8'
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-primary-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-primary-500 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
                aria-label="Next testimonial"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 mt-16"
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
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
