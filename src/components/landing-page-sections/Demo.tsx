import React, { useState } from 'react';
import { motion } from 'motion/react';
import { HiPlay, HiPause, HiViewGrid, HiDocument, HiClock, HiSparkles, HiEye } from 'react-icons/hi';

import { MdKeyboardCommandKey } from 'react-icons/md';

const DemoSection = () => {
  const [activeDemo, setActiveDemo] = useState('vertical-tabs');
  const [isPlaying, setIsPlaying] = useState(false);

  const demoFeatures = [
    {
      id: 'vertical-tabs',
      title: 'Vertical Tabs',
      icon: HiViewGrid,
      description: 'See how vertical tab management transforms your browser organization',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'command-palette',
      title: 'Command Palette',
      icon: MdKeyboardCommandKey,
      description: 'Experience the power of 25+ commands at your fingertips',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      id: 'smart-notes',
      title: 'Smart Notes',
      icon: HiDocument,
      description: 'Watch contextual note-taking in action on any website',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'tab-snoozing',
      title: 'Tab Snoozing',
      icon: HiClock,
      description: 'Learn how to schedule tabs and set smart reminders',
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  return (
    <section id='demo' className='relative py-20 bg-gradient-to-br from-slate-50 to-emerald-50'>
      {/* Background Elements */}
      <div className='absolute inset-0'>
        <div className='absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-emerald-300/20 to-teal-300/20 rounded-full blur-2xl' />
        <div className='absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-teal-300/15 to-cyan-300/15 rounded-full blur-3xl' />
        <div className='absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:64px_64px]' />
      </div>

      <div className='relative max-w-7xl mx-auto px-6'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <div className='inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-emerald-200 rounded-full px-4 py-2 text-sm text-emerald-700 mb-6'>
            <HiEye className='w-4 h-4' />
            <span className='font-semibold'>See It In Action</span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            <span className='bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent'>
              Experience TabsFlow
            </span>
            <br />
            <span className='bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent'>
              In Real Time
            </span>
          </h2>
          <p className='text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed'>
            Watch how TabsFlow transforms your browsing experience with powerful features that actually work.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-3 gap-8'>
          {/* Feature Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='lg:col-span-1'
          >
            <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200 shadow-lg'>
              <h3 className='text-xl font-bold text-slate-900 mb-6'>Interactive Demo</h3>
              <div className='space-y-3'>
                {demoFeatures.map(feature => (
                  <motion.button
                    key={feature.id}
                    onClick={() => setActiveDemo(feature.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                      activeDemo === feature.id
                        ? 'bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-300 shadow-md'
                        : 'bg-white/50 border-slate-200 hover:bg-emerald-25 hover:border-emerald-200'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className='flex items-start space-x-3'>
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${
                          feature.color
                        } rounded-lg flex items-center justify-center flex-shrink-0 ${
                          activeDemo === feature.id ? 'shadow-lg' : ''
                        }`}
                      >
                        <feature.icon className='w-5 h-5 text-white' />
                      </div>
                      <div>
                        <h4 className='font-semibold text-slate-900 mb-1'>{feature.title}</h4>
                        <p className='text-sm text-slate-600 leading-relaxed'>{feature.description}</p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Demo Video/Screenshot Area */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className='lg:col-span-2'
          >
            <div className='relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200 shadow-lg'>
              {/* Video Controls */}
              <div className='flex items-center justify-between mb-6'>
                <div className='flex items-center space-x-4'>
                  <motion.button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className='flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isPlaying ? <HiPause className='w-4 h-4' /> : <HiPlay className='w-4 h-4' />}
                    <span>{isPlaying ? 'Pause' : 'Play'} Demo</span>
                  </motion.button>
                  <div className='text-sm text-slate-600'>
                    Showing:{' '}
                    <span className='font-semibold text-emerald-600'>
                      {demoFeatures.find(f => f.id === activeDemo)?.title}
                    </span>
                  </div>
                </div>
                <div className='hidden md:flex items-center space-x-2 text-xs text-slate-500'>
                  <div className='w-2 h-2 bg-red-400 rounded-full'></div>
                  <div className='w-2 h-2 bg-yellow-400 rounded-full'></div>
                  <div className='w-2 h-2 bg-green-400 rounded-full'></div>
                </div>
              </div>

              {/* Demo Content Area */}
              <div className='relative bg-gradient-to-br from-slate-50 to-emerald-25 rounded-xl aspect-video flex items-center justify-center border border-emerald-100 overflow-hidden'>
                {/* Placeholder Content */}
                <motion.div
                  key={activeDemo}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className='text-center'
                >
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${
                      demoFeatures.find(f => f.id === activeDemo)?.color
                    } rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl`}
                  >
                    {React.createElement(demoFeatures.find(f => f.id === activeDemo)?.icon || HiViewGrid, {
                      className: 'w-10 h-10 text-white'
                    })}
                  </div>
                  <h3 className='text-2xl font-bold text-slate-900 mb-3'>
                    {demoFeatures.find(f => f.id === activeDemo)?.title} Demo
                  </h3>
                  <p className='text-slate-600 mb-6 max-w-md mx-auto'>
                    Interactive demo video/GIF will be placed here showing the{' '}
                    {demoFeatures.find(f => f.id === activeDemo)?.title.toLowerCase()} feature in action.
                  </p>

                  {/* Mock Interface Elements */}
                  <div className='flex justify-center space-x-4'>
                    <div className='w-24 h-16 bg-white/60 rounded-lg border border-emerald-200 flex items-center justify-center'>
                      <div className='w-4 h-4 bg-emerald-400 rounded'></div>
                    </div>
                    <div className='w-24 h-16 bg-white/60 rounded-lg border border-emerald-200 flex items-center justify-center'>
                      <div className='w-4 h-4 bg-teal-400 rounded'></div>
                    </div>
                    <div className='w-24 h-16 bg-white/60 rounded-lg border border-emerald-200 flex items-center justify-center'>
                      <div className='w-4 h-4 bg-cyan-400 rounded'></div>
                    </div>
                  </div>
                </motion.div>

                {/* Loading Animation when "playing" */}
                {isPlaying && (
                  <motion.div
                    className='absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10'
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                  />
                )}
              </div>

              {/* Demo Info */}
              <div className='mt-6 flex items-center justify-between'>
                <div className='text-sm text-slate-600'>
                  <span className='font-semibold'>Coming Soon:</span> Interactive demos and screen recordings
                </div>
                <div className='flex items-center space-x-2'>
                  <HiSparkles className='w-4 h-4 text-emerald-500' />
                  <span className='text-sm font-medium text-emerald-600'>Live Preview</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className='mt-16'
        >
          <div className='grid md:grid-cols-3 gap-6'>
            {[
              {
                title: 'Real-time Sync',
                description: 'All changes sync instantly across your devices',
                icon: '⚡'
              },
              {
                title: 'Zero Learning Curve',
                description: 'Intuitive interface that works just like you expect',
                icon: '🎯'
              },
              {
                title: 'Blazing Fast',
                description: 'Optimized for speed with native browser integration',
                icon: '🚀'
              }
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className='bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 text-center hover:bg-white/80 transition-all duration-300'
              >
                <div className='text-3xl mb-4'>{highlight.icon}</div>
                <h3 className='font-bold text-slate-900 mb-2'>{highlight.title}</h3>
                <p className='text-slate-600 text-sm'>{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
