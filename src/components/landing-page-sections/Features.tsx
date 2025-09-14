import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { HiArrowRight, HiLightningBolt, HiUsers, HiStar, HiViewGrid, HiSparkles } from 'react-icons/hi';

import { MdKeyboardCommandKey } from 'react-icons/md';

const FeaturesSection = () => {
  return (
    <section id='features' className='relative py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-6'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <div className='inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 text-sm text-emerald-700 mb-6'>
            <HiSparkles className='w-4 h-4' />
            <span className='font-semibold'>Powerful Features</span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            <span className='bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent'>
              Everything You Need to
            </span>
            <br />
            <span className='bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent'>
              Master Your Tabs
            </span>
          </h2>
          <p className='text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed'>
            From vertical tab management to powerful command palette, TabsFlow transforms how you work with
            your browser.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {[
            {
              icon: HiViewGrid,
              title: 'Vertical Tab Management',
              description:
                'Organize tabs in a clean vertical layout with grouping, pinning, and drag-and-drop functionality.',
              color: 'from-emerald-500 to-teal-500'
            },
            {
              icon: MdKeyboardCommandKey,
              title: 'Command Palette',
              description:
                'Access 25+ powerful commands instantly with our Raycast-inspired command interface.',
              color: 'from-teal-500 to-cyan-500'
            },
            {
              icon: HiLightningBolt,
              title: 'Smart Notes',
              description:
                'Take contextual notes on any website with rich text formatting and automatic syncing.',
              color: 'from-cyan-500 to-blue-500'
            },
            {
              icon: HiUsers,
              title: 'Tab Snoozing',
              description: 'Schedule tabs to reappear later with smart reminders and notification system.',
              color: 'from-blue-500 to-indigo-500'
            },
            {
              icon: HiStar,
              title: 'Quick Links',
              description: 'Create custom aliases for frequently visited sites with instant access commands.',
              color: 'from-indigo-500 to-purple-500'
            },
            {
              icon: HiSparkles,
              title: 'Focus Mode',
              description: 'Eliminate distractions with focused browsing sessions and productivity tracking.',
              color: 'from-purple-500 to-pink-500'
            },
            {
              icon: HiArrowRight,
              title: 'Usage Analytics',
              description: 'Track your browsing patterns and optimize your workflow with detailed insights.',
              color: 'from-pink-500 to-rose-500'
            },
            {
              icon: HiLightningBolt,
              title: 'Cloud Sync',
              description: 'Seamlessly sync your tabs, notes, and settings across all your devices.',
              color: 'from-rose-500 to-orange-500'
            },
            {
              icon: MdKeyboardCommandKey,
              title: 'Browser Extension',
              description: 'Works with Chrome, Firefox, and Safari with native integration and performance.',
              color: 'from-orange-500 to-yellow-500'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className='group relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-100 transition-all duration-300'
            >
              {/* Background Gradient */}
              <div className='absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

              <div className='relative z-10'>
                {/* Icon */}
                <motion.div
                  className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <feature.icon className='w-6 h-6 text-white' />
                </motion.div>

                {/* Content */}
                <h3 className='text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300'>
                  {feature.title}
                </h3>
                <p className='text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300'>
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className='absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-emerald-200 transition-all duration-300' />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className='text-center mt-16'
        >
          <div className='bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200'>
            <h3 className='text-2xl font-bold text-slate-900 mb-4'>Ready to Transform Your Browser?</h3>
            <p className='text-slate-600 mb-6 max-w-2xl mx-auto'>
              Join thousands of users who have already upgraded their browsing experience with TabsFlow.
            </p>
            <motion.button
              className='bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 mx-auto hover:shadow-xl hover:shadow-emerald-200 transition-all duration-200'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Early Access</span>
              <HiArrowRight className='w-5 h-5' />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
