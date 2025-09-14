import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  HiStar,
  HiHeart,
  HiTrendingUp,
  HiUsers,
  HiSparkles,
  HiChevronLeft,
  HiChevronRight
} from 'react-icons/hi';


import { FaQuoteLeft } from "react-icons/fa";


const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Product Designer",
      company: "Figma",
      avatar: "SC",
      rating: 5,
      text: "TabsFlow completely transformed how I manage my research tabs. The vertical layout and command palette make switching between 50+ tabs effortless. It's like having a superpower for browsing.",
      highlight: "transformed how I manage research"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Software Engineer",
      company: "Stripe",
      avatar: "MR",
      rating: 5,
      text: "As a developer, I have dozens of docs, GitHub repos, and tools open. TabsFlow's smart notes and tab snoozing help me stay organized without losing my flow. Genuinely can't work without it now.",
      highlight: "can't work without it now"
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Content Creator",
      company: "YouTube",
      avatar: "EW",
      rating: 5,
      text: "The command palette is incredible! I can access any tab or feature instantly without hunting through browser menus. My productivity has increased by at least 40% since using TabsFlow.",
      highlight: "productivity increased by 40%"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Startup Founder",
      company: "TechCorp",
      avatar: "DK",
      rating: 5,
      text: "Managing multiple projects used to be chaos. TabsFlow's workspaces and focus mode help me context-switch seamlessly. The analytics show I'm 3x more focused during work sessions.",
      highlight: "3x more focused"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "UX Researcher",
      company: "Airbnb",
      avatar: "LT",
      rating: 5,
      text: "The smart notes feature is game-changing. I can annotate websites directly and everything syncs across devices. It's revolutionized how I conduct user research and competitive analysis.",
      highlight: "revolutionized user research"
    }
  ];

  const stats = [
    { number: "10K+", label: "Happy Users", icon: HiUsers },
    { number: "4.9/5", label: "Average Rating", icon: HiStar },
    { number: "50%", label: "Productivity Boost", icon: HiTrendingUp },
    { number: "99%", label: "Would Recommend", icon: HiHeart }
  ];

  const companies = [
    "Google", "Microsoft", "Apple", "Meta", "Netflix", "Spotify", "Uber", "Airbnb"
  ];

  // Auto-play testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-r from-teal-200/20 to-cyan-200/20 rounded-full blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-emerald-200 rounded-full px-4 py-2 text-sm text-emerald-700 mb-6">
            <HiHeart className="w-4 h-4" />
            <span className="font-semibold">Loved by Professionals</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              What Users Are
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Saying About TabsFlow
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of professionals who have transformed their browsing experience with TabsFlow.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-emerald-200 shadow-2xl shadow-emerald-100 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full blur-2xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-teal-100 to-cyan-100 rounded-full blur-xl opacity-40" />
            
            <div className="relative z-10">
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-200">
                  <FaQuoteLeft className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Testimonial Content */}
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                    >
                      <HiStar className="w-6 h-6 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed mb-8">
                  {testimonials[activeTestimonial].text.split(testimonials[activeTestimonial].highlight)[0]}
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-semibold">
                    {testimonials[activeTestimonial].highlight}
                  </span>
                  {testimonials[activeTestimonial].text.split(testimonials[activeTestimonial].highlight)[1]}
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {testimonials[activeTestimonial].avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-slate-900 text-lg">
                      {testimonials[activeTestimonial].name}
                    </div>
                    <div className="text-slate-600">
                      {testimonials[activeTestimonial].role} at {testimonials[activeTestimonial].company}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-white border border-emerald-200 rounded-full flex items-center justify-center hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-200 shadow-md"
                >
                  <HiChevronLeft className="w-6 h-6 text-emerald-600" />
                </button>

                {/* Dots */}
                <div className="flex space-x-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveTestimonial(index);
                        setIsAutoPlaying(false);
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeTestimonial
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-500 w-8'
                          : 'bg-slate-300 hover:bg-emerald-300'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-white border border-emerald-200 rounded-full flex items-center justify-center hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-200 shadow-md"
                >
                  <HiChevronRight className="w-6 h-6 text-emerald-600" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200 text-center hover:bg-white/90 hover:shadow-lg hover:shadow-emerald-100 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Companies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-emerald-200">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <HiSparkles className="w-5 h-5 text-emerald-500" />
              <span className="text-slate-600 font-medium">Trusted by teams at</span>
            </div>
            
            {/* Company Logos/Names */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              {companies.map((company, index) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                  viewport={{ once: true }}
                  className="text-slate-500 font-semibold text-lg hover:text-emerald-600 transition-colors duration-200 cursor-default"
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-xl" />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Join the TabsFlow Community
              </h3>
              <p className="text-emerald-100 mb-8 max-w-2xl mx-auto text-lg">
                Be part of the growing community of professionals who have revolutionized their browsing experience.
              </p>
              <motion.button
                className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-200"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Free Trial
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;