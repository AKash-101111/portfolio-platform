import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { downloadResume } from '../utils/downloadResume';

interface NavbarProps {
  activeSection: string;
}

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'py-3 bg-white/75 backdrop-blur-md border-b border-slate-100 shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 font-display font-semibold text-xl tracking-tight text-slate-900 cursor-default">
          <span className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-indigo-200">
            AC
          </span>
          <span>alex<span className="text-indigo-600">carter</span></span>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <button
                key={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  isActive ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-indigo-50/70 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Resume Button */}
        <div className="hidden lg:block">
          <button
            onClick={downloadResume}
            className="flex items-center gap-1 px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-all shadow-sm hover:shadow-md cursor-pointer"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-4 h-4 opacity-70" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl py-6 px-6 lg:hidden flex flex-col gap-4"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <button
                  key={item.href}
                  onClick={(e) => {
                    handleNavClick(e, item.href);
                    setIsOpen(false);
                  }}
                  className={`px-4 py-2 rounded-xl text-base font-semibold text-left transition-all cursor-pointer ${
                    isActive ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              onClick={() => {
                setIsOpen(false);
                downloadResume();
              }}
              className="flex items-center justify-center gap-1 py-3 mt-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-base transition-all"
            >
              <span>Download Resume</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Navbar;
