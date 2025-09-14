import React from 'react';
import { motion } from 'motion/react';
import {
  HiViewGrid,
  HiMail,
  HiExternalLink,
  HiHeart,
  HiLightningBolt,
  HiShieldCheck,
  HiBookOpen,
  HiUsers,
  HiCash,
  HiSupport
} from 'react-icons/hi';
import { FaTwitter, FaLinkedin, FaYoutube, FaDiscord, FaGithub } from 'react-icons/fa';

const FooterSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const hoverScale = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 }
  };

  const productLinks = [
    { name: 'Features', href: '#features', icon: HiLightningBolt },
    { name: 'Guides', href: '#guides', icon: HiBookOpen },
    { name: 'Pricing', href: '#pricing', icon: HiCash },
    { name: 'About', href: '#about', icon: HiUsers }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '#help', icon: HiSupport },
    { name: 'Contact Support', href: 'mailto:support@tabsflow.com', icon: HiMail },
    { name: 'Community', href: '#community', icon: HiUsers },
    { name: 'Status Page', href: '#status', icon: HiShieldCheck }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Cookie Policy', href: '#cookies' }
  ];

  const otherProducts = [
    { name: 'TabsFlow Pro', href: '#pro', description: 'Advanced features for teams' },
    { name: 'TabsFlow API', href: '#api', description: 'Integrate with your tools' },
    { name: 'TabsFlow Desktop', href: '#desktop', description: 'Native desktop app' }
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/tabsflow', icon: FaTwitter, color: 'hover:text-blue-400' },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/tabsflow',
      icon: FaLinkedin,
      color: 'hover:text-blue-600'
    },
    { name: 'YouTube', href: 'https://youtube.com/@tabsflow', icon: FaYoutube, color: 'hover:text-red-500' },
    { name: 'Discord', href: 'https://discord.gg/tabsflow', icon: FaDiscord, color: 'hover:text-indigo-500' },
    { name: 'GitHub', href: 'https://github.com/tabsflow', icon: FaGithub, color: 'hover:text-gray-700' }
  ];

  return (
    <footer className='relative bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 border-t border-emerald-100'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <motion.div
          className='absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl'
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        <motion.div
          className='absolute top-40 -right-20 w-48 h-48 bg-gradient-to-r from-teal-400/15 to-cyan-400/15 rounded-full blur-2xl'
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear'
          }}
        />

        {/* Subtle Grid Pattern */}
        <div className='absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:32px_32px]' />
      </div>

      {/* Main Footer Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-6 py-16'>
        <motion.div
          variants={staggerChildren}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'
        >
          {/* Company Info */}
          <motion.div variants={fadeInUp} className='space-y-6'>
            <div className='flex items-center space-x-3'>
              <div className='w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200'>
                <HiViewGrid className='w-6 h-6 text-white' />
              </div>
              <span className='text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent'>
                TabsFlow
              </span>
            </div>

            <p className='text-slate-600 leading-relaxed max-w-sm'>
              Transform your browser experience with powerful tab management, command palette, and
              productivity features designed for modern workflows.
            </p>

            <div className='bg-white/60 backdrop-blur-sm border border-emerald-200 rounded-xl p-4 shadow-sm'>
              <div className='flex items-center space-x-2 mb-2'>
                <HiMail className='w-4 h-4 text-emerald-600' />
                <span className='font-semibold text-slate-700'>Get in touch</span>
              </div>
              <a
                href='mailto:hello@tabsflow.com'
                className='text-emerald-600 hover:text-emerald-700 font-medium transition-colors'
              >
                hello@tabsflow.com
              </a>
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div variants={fadeInUp} className='space-y-6'>
            <h3 className='font-bold text-slate-800 text-lg flex items-center space-x-2'>
              <HiLightningBolt className='w-5 h-5 text-emerald-600' />
              <span>Product</span>
            </h3>
            <ul className='space-y-4'>
              {productLinks.map(link => (
                <motion.li key={link.name} {...hoverScale}>
                  <a
                    href={link.href}
                    className='flex items-center space-x-3 text-slate-600 hover:text-emerald-600 transition-colors group'
                  >
                    <link.icon className='w-4 h-4 group-hover:text-emerald-500 transition-colors' />
                    <span className='font-medium'>{link.name}</span>
                    <HiExternalLink className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity' />
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div className='bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-4 mt-6'>
              <h4 className='font-semibold text-slate-700 mb-2'>Stay Updated</h4>
              <p className='text-sm text-slate-600 mb-3'>Get the latest features and tips</p>
              <div className='flex gap-2'>
                <input
                  type='email'
                  placeholder='Your email'
                  className='flex-1 px-3 py-2 rounded-lg border border-emerald-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white/80'
                />
                <button className='bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200 hover:scale-105'>
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>

          {/* Support & Resources */}
          <motion.div variants={fadeInUp} className='space-y-6'>
            <h3 className='font-bold text-slate-800 text-lg flex items-center space-x-2'>
              <HiSupport className='w-5 h-5 text-emerald-600' />
              <span>Support</span>
            </h3>
            <ul className='space-y-4'>
              {supportLinks.map(link => (
                <motion.li key={link.name} {...hoverScale}>
                  <a
                    href={link.href}
                    className='flex items-center space-x-3 text-slate-600 hover:text-emerald-600 transition-colors group'
                  >
                    <link.icon className='w-4 h-4 group-hover:text-emerald-500 transition-colors' />
                    <span className='font-medium'>{link.name}</span>
                    <HiExternalLink className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity' />
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Quick Stats */}
            <div className='bg-white/60 backdrop-blur-sm border border-emerald-200 rounded-xl p-4 shadow-sm'>
              <h4 className='font-semibold text-slate-700 mb-3'>Quick Stats</h4>
              <div className='space-y-2'>
                <div className='flex justify-between text-sm'>
                  <span className='text-slate-600'>Early Users</span>
                  <span className='font-semibold text-emerald-600'>500+</span>
                </div>
                <div className='flex justify-between text-sm'>
                  <span className='text-slate-600'>Commands</span>
                  <span className='font-semibold text-emerald-600'>25+</span>
                </div>
                <div className='flex justify-between text-sm'>
                  <span className='text-slate-600'>Status</span>
                  <span className='font-semibold text-teal-600'>Coming Soon</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Products & Social */}
          <motion.div variants={fadeInUp} className='space-y-6'>
            <h3 className='font-bold text-slate-800 text-lg flex items-center space-x-2'>
              <HiViewGrid className='w-5 h-5 text-emerald-600' />
              <span>Other Products</span>
            </h3>
            <div className='space-y-4'>
              {otherProducts.map(product => (
                <motion.div key={product.name} {...hoverScale}>
                  <a
                    href={product.href}
                    className='block bg-white/60 backdrop-blur-sm border border-emerald-200 rounded-lg p-3 hover:bg-white/80 hover:shadow-md hover:shadow-emerald-100 transition-all duration-200 group'
                  >
                    <div className='flex items-start justify-between'>
                      <div>
                        <h4 className='font-semibold text-slate-700 group-hover:text-emerald-700 transition-colors'>
                          {product.name}
                        </h4>
                        <p className='text-sm text-slate-500 mt-1'>{product.description}</p>
                      </div>
                      <HiExternalLink className='w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors' />
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className='pt-4'>
              <h4 className='font-semibold text-slate-700 mb-4'>Follow Us</h4>
              <div className='flex space-x-4'>
                {socialLinks.map(social => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`w-10 h-10 bg-white/70 backdrop-blur-sm border border-emerald-200 rounded-lg flex items-center justify-center text-slate-600 ${social.color} transition-all duration-200 hover:shadow-lg hover:shadow-emerald-100 hover:border-emerald-300`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className='w-5 h-5' />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeInUp}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          className='pt-8 border-t border-emerald-200'
        >
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            {/* Copyright */}
            <div className='flex items-center space-x-2 text-slate-600'>
              <span>© 2025 TabsFlow.</span>
              <span className='flex items-center space-x-1'>
                <span>Made with</span>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  <HiHeart className='w-4 h-4 text-red-500' />
                </motion.div>
                <span>for productivity</span>
              </span>
            </div>

            {/* Legal Links */}
            <div className='flex items-center space-x-6'>
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  <motion.a
                    href={link.href}
                    className='text-slate-600 hover:text-emerald-600 transition-colors text-sm font-medium'
                    whileHover={{ scale: 1.05 }}
                  >
                    {link.name}
                  </motion.a>
                  {index < legalLinks.length - 1 && <div className='w-1 h-1 bg-slate-400 rounded-full'></div>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Final Branding Element */}
          <motion.div
            className='mt-8 text-center'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className='inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-medium'>
              <HiLightningBolt className='w-4 h-4 text-emerald-600' />
              <span>Supercharge your browser workflow</span>
              <HiLightningBolt className='w-4 h-4 text-teal-600' />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
