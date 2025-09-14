import React from 'react';
import { motion } from 'motion/react';
import { 
  HiDownload,
  HiCog,
  HiLightningBolt,
  HiArrowRight,
  HiCheckCircle,
  HiSparkles,
  HiPlay
} from 'react-icons/hi';

const HowItWorksSection = () => {
  const steps = [
    {
      step: '01',
      title: 'Install Extension',
      description: 'Download and install TabsFlow for Chrome, Firefox, or Safari. Setup takes less than 30 seconds.',
      icon: HiDownload,
      color: 'from-emerald-500 to-teal-500',
      features: ['One-click installation', 'Works on all major browsers', 'Secure & lightweight']
    },
    {
      step: '02',
      title: 'Configure Your Workspace',
      description: 'Customize your tab layout, enable features you need, and sync your preferences across devices.',
      icon: HiCog,
      color: 'from-teal-500 to-cyan-500',
      features: ['Vertical tab layout', 'Custom shortcuts', 'Cloud synchronization']
    },
    {
      step: '03',
      title: 'Boost Your Productivity',
      description: 'Start using powerful commands, smart notes, and advanced tab management to transform your browsing.',
      icon: HiLightningBolt,
      color: 'from-cyan-500 to-blue-500',
      features: ['25+ commands', 'Smart automation', 'Analytics insights']
    }
  ];

  const stats = [
    { number: '30sec', label: 'Setup Time' },
    { number: '25+', label: 'Commands' },
    { number: '3', label: 'Browsers' },
    { number: '∞', label: 'Productivity' }
  ];

  return (
    <section className="relative py-20 bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full blur-2xl opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.05),transparent_70%)]" />
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
          <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 text-sm text-emerald-700 mb-6">
            <HiPlay className="w-4 h-4" />
            <span className="font-semibold">Get Started</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              How TabsFlow
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Works for You
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Get up and running in minutes with our simple 3-step process. No complex setup, no learning curve.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <svg className="w-full h-32" viewBox="0 0 800 128">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path
                d="M100 64 Q400 20 700 64"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
              />
            </svg>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step Number */}
                <div className="flex justify-center mb-6">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-200 relative z-10`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border-2 border-emerald-300 flex items-center justify-center text-xs font-bold text-emerald-600 shadow-lg">
                      {step.step}
                    </div>
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-2xl blur-xl opacity-30 animate-pulse`} />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center space-x-2"
                      >
                        <HiCheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span className="text-sm text-slate-600 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-6 z-20">
                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <HiArrowRight className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 rounded-2xl p-8 border border-emerald-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Why Users Love TabsFlow
              </h3>
              <p className="text-slate-600">Simple setup, powerful results</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-xl" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <HiSparkles className="w-6 h-6 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Ready to Get Started?</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transform Your Browser Today
              </h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                {"Join thousands of users who have already upgraded their browsing experience with TabsFlow's powerful features."}
              </p>
              <motion.button
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 mx-auto hover:shadow-xl hover:shadow-emerald-200/50 transition-all duration-200"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiDownload className="w-5 h-5" />
                <span>Get TabsFlow Now</span>
                <HiArrowRight className="w-5 h-5" />
              </motion.button>
              <div className="text-slate-400 text-sm mt-4">
                Available for Chrome, Firefox & Safari • Free during beta
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;