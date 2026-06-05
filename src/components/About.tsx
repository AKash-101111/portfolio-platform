import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { GraduationCap, Target, Award, User } from 'lucide-react';

export const About: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 80, damping: 14 } },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50/50 border-y border-slate-100/60">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 tracking-tight mb-4">
            About Me
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            A comprehensive look at my background, formal education, career goals, and core developer strengths.
          </p>
        </div>

        {/* Two Column Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Left Column: Bio Card (Premium Glass style) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-7 p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-600">
                <User className="w-6 h-6" />
              </span>
              <h3 className="font-display font-bold text-xl text-slate-900">Professional Summary</h3>
            </div>
            
            <div className="space-y-4 text-slate-600 leading-relaxed text-left text-base">
              <p>
                Hi, I'm Alex Carter. I'm a passionate full-stack developer who loves designing and building applications that solve real-world problems. I combine a strong foundation in computer science with modern frontend and backend tools to create elegant solutions.
              </p>
              <p>
                My development philosophy centers around **performance, usability, and scale**. I believe clean code, thorough documentation, and deliberate interface design are critical for creating long-term software assets.
              </p>
              <p>
                I thrive in collaborative teams that value code quality, testing, and continuous improvement. I constantly challenge myself to learn new architectural patterns, system design principles, and modern tools.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Key Details Stack */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full">
            {/* Education Card */}
            <motion.div 
              variants={itemVariants}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex gap-4 text-left"
            >
              <span className="p-3 rounded-xl bg-purple-50 text-purple-600 h-fit">
                <GraduationCap className="w-5 h-5" />
              </span>
              <div>
                <h4 className="font-display font-bold text-lg text-slate-900 mb-1">Education</h4>
                <p className="font-semibold text-slate-700 text-sm">B.S. in Computer Science</p>
                <p className="text-slate-500 text-sm">Stanford University (2020 - 2024)</p>
                <p className="text-indigo-600 text-xs font-semibold mt-1">GPA: 3.92 / 4.00</p>
              </div>
            </motion.div>

            {/* Career Objectives Card */}
            <motion.div 
              variants={itemVariants}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex gap-4 text-left"
            >
              <span className="p-3 rounded-xl bg-pink-50 text-pink-600 h-fit">
                <Target className="w-5 h-5" />
              </span>
              <div>
                <h4 className="font-display font-bold text-lg text-slate-900 mb-1">Career Objectives</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Striving to engineer high-throughput web architectures, build responsive client dashboards, and leverage AI/ML integrations to deliver measurable business impact at scale.
                </p>
              </div>
            </motion.div>

            {/* Strengths Card */}
            <motion.div 
              variants={itemVariants}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex gap-4 text-left"
            >
              <span className="p-3 rounded-xl bg-indigo-50 text-indigo-600 h-fit">
                <Award className="w-5 h-5" />
              </span>
              <div>
                <h4 className="font-display font-bold text-lg text-slate-900 mb-1">Core Strengths</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['Clean Code Architecture', 'UI/UX Excellence', 'System Scalability', 'Test-Driven Development', 'Problem Solving'].map((strength) => (
                    <span 
                      key={strength} 
                      className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium"
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default About;
