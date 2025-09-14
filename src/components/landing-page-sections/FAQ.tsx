import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HiQuestionMarkCircle,
  HiChevronDown,
  HiChevronUp,
  HiLightningBolt,
  HiShieldCheck,
  HiGlobe,
  HiCog,
  HiUsers,
  HiSparkles,
  HiSupport,
  HiMail
} from 'react-icons/hi';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Which browsers does TabsFlow support?",
      answer: "TabsFlow works seamlessly with Chrome, Firefox, Safari, and Edge. We provide native extensions for each browser with full feature parity. Installation takes less than 30 seconds on any supported browser.",
      icon: HiGlobe,
      category: "compatibility"
    },
    {
      id: 2,
      question: "How does TabsFlow handle my browsing data and privacy?",
      answer: "Your privacy is our top priority. TabsFlow processes all data locally on your device. Only encrypted sync data (if you choose to enable cloud sync) is stored on our secure servers. We never track your browsing habits or sell your data to third parties.",
      icon: HiShieldCheck,
      category: "privacy"
    },
    {
      id: 3,
      question: "Can I use TabsFlow across multiple devices?",
      answer: "Yes! TabsFlow offers seamless cloud synchronization across all your devices. Your tabs, notes, workspaces, and preferences sync automatically. You can start work on your laptop and continue on your desktop without missing a beat.",
      icon: HiUsers,
      category: "sync"
    },
    {
      id: 4,
      question: "What makes TabsFlow different from other tab managers?",
      answer: "TabsFlow combines vertical tab management with a powerful command palette (25+ commands), contextual notes, smart tab snoozing, and advanced productivity features. It's designed specifically for professionals who manage complex workflows with many tabs and need intelligent organization tools.",
      icon: HiLightningBolt,
      category: "features"
    },
    {
      id: 5,
      question: "Is there a learning curve to using TabsFlow?",
      answer: "Not at all! TabsFlow is designed to feel intuitive from day one. The vertical tab layout is immediately familiar, and the command palette works just like Spotlight or Raycast. Most users are productive within minutes of installation.",
      icon: HiCog,
      category: "usability"
    },
    {
      id: 6,
      question: "How much does TabsFlow cost?",
      answer: "TabsFlow is currently free during our beta period! We're planning a freemium model with basic features free forever and advanced features (unlimited workspaces, advanced analytics, team collaboration) available in our Pro plan for $4.99/month.",
      icon: HiSparkles,
      category: "pricing"
    },
    {
      id: 7,
      question: "Can I migrate my existing bookmarks and tab groups?",
      answer: "Absolutely! TabsFlow automatically imports your existing bookmarks and can convert browser tab groups into TabsFlow workspaces. The migration process is seamless and preserves all your existing organization.",
      icon: HiCog,
      category: "migration"
    },
    {
      id: 8,
      question: "What kind of customer support do you provide?",
      answer: "We offer comprehensive support including detailed documentation, video tutorials, email support, and live chat during business hours. Our community Discord also provides peer support and feature discussions with the TabsFlow team.",
      icon: HiSupport,
      category: "support"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Questions', count: faqs.length },
    { id: 'features', label: 'Features', count: faqs.filter(f => f.category === 'features').length },
    { id: 'privacy', label: 'Privacy & Security', count: faqs.filter(f => f.category === 'privacy').length },
    { id: 'compatibility', label: 'Compatibility', count: faqs.filter(f => f.category === 'compatibility').length },
    { id: 'pricing', label: 'Pricing', count: faqs.filter(f => f.category === 'pricing').length }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredFAQs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="relative py-20 bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full blur-2xl opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.05),transparent_70%)]" />
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
            <HiQuestionMarkCircle className="w-4 h-4" />
            <span className="font-semibold">Frequently Asked</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Got Questions?
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              We've Got Answers
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about TabsFlow, from setup to advanced features.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2.5 rounded-full border font-medium text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-transparent shadow-lg shadow-emerald-200'
                  : 'bg-white/80 text-slate-600 border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-700'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          <AnimatePresence mode="wait">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm border border-emerald-200 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-emerald-100 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-start space-x-4 hover:bg-emerald-50/50 transition-colors duration-200"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-md">
                    <faq.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 text-lg mb-1 pr-4">
                      {faq.question}
                    </h3>
                    <div className="text-emerald-600 text-sm font-medium">
                      Click to {openFAQ === faq.id ? 'collapse' : 'expand'}
                    </div>
                  </div>
                  <div className="flex-shrink-0 transition-transform duration-300" style={{
                    transform: openFAQ === faq.id ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}>
                    <HiChevronDown className="w-5 h-5 text-emerald-600" />
                  </div>
                </button>

                <AnimatePresence>
                  {openFAQ === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="ml-14 text-slate-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Contact Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-2xl p-8 md:p-12 border border-emerald-200"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Our support team is here to help you get the most out of TabsFlow. 
                Reach out anytime and we'll get back to you within 24 hours.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <HiMail className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-slate-700 font-medium">support@tabsflow.app</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <HiUsers className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-slate-700 font-medium">Join our Discord community</span>
                </div>
              </div>
            </div>

            <div className="text-center md:text-right">
              <motion.button
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:shadow-emerald-200 transition-all duration-200 inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiSupport className="w-5 h-5" />
                <span>Contact Support</span>
              </motion.button>
              
              <div className="mt-4 text-sm text-slate-500">
                Average response time: 2 hours
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '< 30sec', label: 'Setup Time' },
              { number: '99.9%', label: 'Uptime' },
              { number: '24/7', label: 'Support' },
              { number: '10K+', label: 'Happy Users' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-1">
                  {stat.number}
                </div>
                <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;