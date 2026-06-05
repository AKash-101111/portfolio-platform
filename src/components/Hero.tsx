import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Mail, FileText, ArrowRight } from 'lucide-react';
import { downloadResume } from '../utils/downloadResume';

export const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100, damping: 15 } },
  };


  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 font-semibold text-xs tracking-wider uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            Available for Opportunities
          </motion.div>

          {/* Name & Title */}
          <motion.h1 
            variants={itemVariants}
            className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-slate-900 tracking-tight mb-4"
          >
            ALEX CARTER
          </motion.h1>
          
          <motion.h2 
            variants={itemVariants}
            className="font-display font-medium text-2xl md:text-3xl text-indigo-600 tracking-tight mb-6"
          >
            Full Stack Developer
          </motion.h2>

          {/* Headline & Subheadline */}
          <motion.h3 
            variants={itemVariants}
            className="font-display text-xl md:text-2xl font-semibold text-slate-800 leading-snug mb-4 max-w-xl"
          >
            Building scalable digital experiences with modern web technologies.
          </motion.h3>

          <motion.p 
            variants={itemVariants}
            className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl"
          >
            Passionate about creating elegant software solutions, AI-powered applications, and user-focused digital experiences.
          </motion.p>

          {/* Call to Actions */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8"
          >
            <a 
              href="#projects" 
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-lg shadow-indigo-100 hover:shadow-xl hover:translate-y-[-2px] group"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            
            <button 
              onClick={downloadResume}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-medium text-sm transition-all border border-slate-200 hover:shadow-sm hover:translate-y-[-2px]"
            >
              <FileText className="w-4 h-4 text-slate-500" />
              <span>Download Resume</span>
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-4 text-slate-400"
          >
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-50 hover:bg-slate-100 hover:text-slate-800 border border-slate-100 hover:border-slate-200 transition-all flex items-center justify-center"
              aria-label="GitHub Profile"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-50 hover:bg-slate-100 hover:text-slate-800 border border-slate-100 hover:border-slate-200 transition-all flex items-center justify-center"
              aria-label="LinkedIn Profile"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a 
              href="mailto:alex.carter@dev.com" 
              className="p-2.5 rounded-full bg-slate-50 hover:bg-slate-100 hover:text-slate-800 border border-slate-100 hover:border-slate-200 transition-all"
              aria-label="Email Address"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Graphic/Avatar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative group">
            {/* SaaS Ambient Backlight Glow (Purple + Indigo mix, low opacity, soft radial glow) */}
            <div className="absolute -inset-10 rounded-full bg-gradient-to-tr from-[#8B5CF6] to-[#6366F1] opacity-[0.12] blur-[80px] pointer-events-none transition-all duration-700 group-hover:opacity-[0.18]" />
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#8B5CF6] to-[#6366F1] opacity-25 blur-xl transition-all duration-500 group-hover:opacity-35 group-hover:blur-2xl" />
            
            {/* Main Avatar Container */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden bg-slate-50 border border-slate-200 shadow-2xl p-3 flex items-center justify-center">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-100 relative">
                <img 
                  src="/avatar.png" 
                  alt="Alex Carter Professional Headshot" 
                  className="w-full h-full object-cover select-none"
                  draggable={false}
                />
                
                {/* Micro tech overlay lines */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 py-2 px-3 rounded-xl bg-white/80 backdrop-blur-md border border-white/50 shadow-sm flex items-center justify-between text-left">
                  <div>
                    <p className="font-display font-semibold text-xs text-slate-800 uppercase tracking-wider">Currently Based</p>
                    <p className="text-sm font-semibold text-indigo-600">San Francisco, CA</p>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
