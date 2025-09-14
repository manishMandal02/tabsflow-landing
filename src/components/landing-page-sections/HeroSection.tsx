import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { HiArrowRight, HiLightningBolt, HiUsers, HiStar, HiViewGrid, HiSparkles } from 'react-icons/hi';

import { MdKeyboardCommandKey } from 'react-icons/md';

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);

  const rotatingWords = ['Browser Experience', 'Tab Workflow', 'Productivity Game'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(prev => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleWaitListSubmit = () => {
    if (email) {
      setIsSubmitted(true);
      console.log('WaitList signup:', email);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const letterAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 }
  };

  const floatingAnimation = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0'>
        {/* Floating Geometric Shapes */}
        <motion.div
          className='absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-xl'
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        <motion.div
          className='absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-teal-400/30 to-cyan-400/30 rounded-lg blur-lg rotate-45'
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className='absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-r from-cyan-400/15 to-emerald-400/15 rounded-full blur-2xl'
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear'
          }}
        />

        {/* Grid Pattern */}
        <div className='absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:64px_64px]' />

        {/* Radial Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-radial from-transparent via-transparent to-emerald-50/50' />
      </div>

      {/* Navigation */}
      <nav className='relative z-10 px-6 py-4'>
        <div className='max-w-7xl mx-auto flex justify-between items-center'>
          <motion.div
            className='flex items-center space-x-2'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className='w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-lg'>
              <HiViewGrid className='w-5 h-5 text-white' />
            </div>
            <span className='text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent'>
              TabsFlow
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='hidden md:flex items-center space-x-6'
          >
            <a
              href='#features'
              className='text-slate-600 hover:text-emerald-600 transition-colors font-medium'
            >
              Features
            </a>
            <a href='#demo' className='text-slate-600 hover:text-emerald-600 transition-colors font-medium'>
              Demo
            </a>
            <button className='bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg transition-all duration-200 hover:scale-105 shadow-emerald-200'>
              Join WaitList
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className='relative px-6 pt-12 pb-20 z-10'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center'>
            <motion.div
              variants={staggerChildren}
              initial='initial'
              animate='animate'
              className='max-w-4xl mx-auto'
            >
              {/* Badge */}
              <motion.div
                variants={fadeInUp}
                className='inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-emerald-200 rounded-full px-5 py-2.5 text-sm text-emerald-700 mb-8 shadow-lg shadow-emerald-100'
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                >
                  <HiLightningBolt className='w-4 h-4' />
                </motion.div>
                <span className='font-semibold'>25+ Powerful Commands</span>
                <div className='w-1 h-1 bg-emerald-400 rounded-full'></div>
                <span>Browser Extension</span>
                <HiSparkles className='w-4 h-4 text-emerald-500' />
              </motion.div>

              {/* Main Heading with Text Animation */}
              <motion.h1 variants={fadeInUp} className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>
                <motion.span
                  className='bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent block'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Transform Your
                </motion.span>
                <div className='h-20 md:h-24 flex items-center justify-center'>
                  <motion.span
                    key={currentWord}
                    className='bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                  >
                    {rotatingWords[currentWord]}
                  </motion.span>
                </div>
              </motion.h1>

              {/* Subtitle with Letter Animation */}
              <motion.div variants={fadeInUp} className='mb-8'>
                <motion.p
                  className='text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed'
                  initial='initial'
                  animate='animate'
                  variants={{
                    initial: {},
                    animate: {
                      transition: { staggerChildren: 0.02, delayChildren: 1.2 }
                    }
                  }}
                >
                  {'Manage tabs like a pro with vertical tabs, powerful command palette, smart notes, and productivity features that adapt to your workflow.'
                    .split('')
                    .map((char, index) => (
                      <motion.span key={index} variants={letterAnimation} transition={{ duration: 0.05 }}>
                        {char}
                      </motion.span>
                    ))}
                </motion.p>
              </motion.div>

              {/* Feature Pills */}
              <motion.div variants={fadeInUp} className='flex flex-wrap justify-center gap-3 mb-10'>
                {[
                  'Vertical Tab Management',
                  'Command Palette',
                  'Smart Notes',
                  'Tab Snoozing',
                  'Quick Links',
                  'Focus Mode'
                ].map((feature, index) => (
                  <motion.span
                    key={index}
                    className='px-4 py-2.5 bg-white/70 backdrop-blur-sm border border-emerald-200 rounded-full text-slate-700 text-sm font-medium hover:bg-white/90 hover:shadow-md hover:shadow-emerald-100 transition-all duration-200 cursor-default'
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.8 + index * 0.1 }}
                  >
                    {feature}
                  </motion.span>
                ))}
              </motion.div>

              {/* WaitList Form */}
              <motion.div variants={fadeInUp} className='max-w-md mx-auto mb-8'>
                {!isSubmitted ? (
                  <div className='flex gap-3'>
                    <input
                      type='email'
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder='Enter your email'
                      className='flex-1 px-4 py-3.5 rounded-lg border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white/80 backdrop-blur-sm shadow-sm text-slate-700 placeholder:text-slate-500'
                    />
                    <motion.button
                      onClick={handleWaitListSubmit}
                      className='bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3.5 rounded-lg font-semibold flex items-center space-x-2 hover:shadow-xl hover:shadow-emerald-200 transition-all duration-200 hover:scale-105'
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Join WaitList</span>
                      <HiArrowRight className='w-4 h-4' />
                    </motion.button>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className='bg-emerald-100 border border-emerald-300 rounded-lg p-4 text-emerald-800 shadow-lg'
                  >
                    <div className='flex items-center justify-center space-x-2'>
                      <HiStar className='w-5 h-5' />
                      <span className='font-semibold'>{"Thanks for joining! We'll keep you updated."}</span>
                    </div>
                  </motion.div>
                )}
              </motion.div>

              {/* Social Proof */}
              <motion.div
                variants={fadeInUp}
                className='flex items-center justify-center space-x-6 text-slate-500'
              >
                <div className='flex items-center space-x-2'>
                  <HiUsers className='w-4 h-4' />
                  <span className='text-sm font-medium'>500+ Early Users</span>
                </div>
                <div className='w-1 h-1 bg-slate-400 rounded-full'></div>
                <div className='flex items-center space-x-2'>
                  <MdKeyboardCommandKey className='w-4 h-4' />
                  <span className='text-sm font-medium'>25+ Commands</span>
                </div>
                <div className='w-1 h-1 bg-slate-400 rounded-full'></div>
                <span className='text-sm font-medium'>Coming Soon</span>
              </motion.div>
            </motion.div>
          </div>

          {/* App Preview Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            variants={floatingAnimation}
            className='mt-16 max-w-5xl mx-auto'
          >
            <div className='relative'>
              {/* Enhanced Gradient Orbs */}
              <motion.div
                className='absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-3xl opacity-30'
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
              <motion.div
                className='absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full blur-3xl opacity-25'
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.25, 0.4, 0.25]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1
                }}
              />

              {/* App Preview Container */}
              <motion.div
                className='relative bg-white/80 backdrop-blur-md border border-emerald-200 rounded-2xl p-8 shadow-2xl shadow-emerald-100 hover:shadow-3xl transition-all duration-300'
                whileHover={{ y: -5 }}
              >
                <div className='aspect-video bg-gradient-to-br from-slate-50 to-emerald-50 rounded-lg flex items-center justify-center border border-emerald-100'>
                  <div className='text-center'>
                    <motion.div
                      className='w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-200'
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <HiViewGrid className='w-8 h-8 text-white' />
                    </motion.div>
                    <p className='text-slate-700 font-semibold text-lg'>App Preview</p>
                    <p className='text-emerald-600 text-sm mt-1 font-medium'>
                      Screenshots & GIFs coming soon
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

   
    </div>
  );
};

export default HeroSection;
