import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ExternalLink, Sparkles, Activity, ShoppingCart, Layout, ListTodo } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  thumbnail: React.ReactNode;
}

const projects: Project[] = [
  {
    name: 'AI Resume Analyzer',
    description: 'An intelligent platform analyzing resume PDFs against job descriptions with NLP to provide semantic matching, keyword gap analysis, and layout score feedback.',
    technologies: ['React', 'TypeScript', 'Node.js', 'OpenAI API', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://example.com',
    thumbnail: (
      <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center p-6 text-white overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="w-full max-w-[80%] bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-lg flex flex-col gap-2 relative">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-xs font-semibold tracking-wider flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-pink-300" /> RESUME ANALYZER</span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <div className="space-y-1.5">
            <div className="h-2 w-full bg-white/20 rounded-full" />
            <div className="h-2 w-3/4 bg-white/20 rounded-full" />
            <div className="h-2 w-1/2 bg-white/20 rounded-full" />
          </div>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-[10px] text-white/60">Matching Score</span>
            <span className="text-sm font-bold text-pink-300">94.8%</span>
          </div>
        </div>
      </div>
    )
  },
  {
    name: 'Smart Fitness Platform',
    description: 'Real-time workout platform tracks posture using client-side pose estimation to calculate reps, verify safety angles, and output audio-visual guidelines.',
    technologies: ['Next.js', 'TypeScript', 'TensorFlow.js', 'Framer Motion', 'Tailwind'],
    github: 'https://github.com',
    demo: 'https://example.com',
    thumbnail: (
      <div className="w-full h-full bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center p-6 text-white overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="w-full max-w-[80%] bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-lg flex flex-col gap-2">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-xs font-semibold tracking-wider flex items-center gap-1.5"><Activity className="w-3.5 h-3.5 text-rose-300" /> POSTURE CHECK</span>
            <span className="px-2 py-0.5 rounded bg-emerald-400/20 text-emerald-300 font-mono text-[9px]">ACTIVE</span>
          </div>
          <div className="flex justify-between items-center gap-4 py-2">
            <div className="flex flex-col">
              <span className="text-[10px] text-white/60">Squat Angle</span>
              <span className="text-lg font-bold">88°</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[10px] text-white/60">Correct Reps</span>
              <span className="text-lg font-bold text-emerald-300">12/15</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    name: 'E-Commerce Dashboard',
    description: 'A high-performance Stripe-inspired metrics visualizer containing conversion funnel analysis, subscription retention matrix, and instant checkout configuration.',
    technologies: ['React', 'Chart.js', 'PostgreSQL', 'Tailwind CSS', 'Radix UI'],
    github: 'https://github.com',
    demo: 'https://example.com',
    thumbnail: (
      <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center p-6 text-white overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="w-full max-w-[80%] bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-lg flex flex-col gap-2">
          <div className="flex items-center gap-1.5 border-b border-white/5 pb-2 text-xs font-mono text-slate-400">
            <ShoppingCart className="w-3.5 h-3.5 text-indigo-400" /> STRIPE ANALYTICS
          </div>
          <div className="flex gap-2 items-end h-16 pt-2">
            <div className="w-1/4 h-[30%] bg-indigo-500/60 rounded-t" />
            <div className="w-1/4 h-[50%] bg-indigo-500/70 rounded-t" />
            <div className="w-1/4 h-[85%] bg-indigo-500/80 rounded-t animate-pulse" />
            <div className="w-1/4 h-[65%] bg-indigo-500/70 rounded-t" />
            <div className="w-1/4 h-[95%] bg-indigo-500 rounded-t" />
          </div>
        </div>
      </div>
    )
  },
  {
    name: 'Premium Portfolio Website',
    description: 'A recruiter-first static website built with pure client architecture containing smooth Framer Motion micro-animations, glassmorphic navigations, and PDF generators.',
    technologies: ['React', 'TypeScript', 'Tailwind v4', 'Framer Motion', 'jsPDF'],
    github: 'https://github.com',
    demo: 'https://example.com',
    thumbnail: (
      <div className="w-full h-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center p-6 text-white overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="w-full max-w-[80%] bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-lg flex flex-col gap-2">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-xs font-semibold tracking-wider flex items-center gap-1.5"><Layout className="w-3.5 h-3.5 text-purple-300" /> PORTFOLIO</span>
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 py-1">
            <div className="w-10 h-10 rounded-full border border-white/20 overflow-hidden bg-white/20" />
            <span className="text-[10px] font-bold">Alex Carter</span>
            <span className="text-[8px] text-white/60">Full Stack Dev</span>
          </div>
        </div>
      </div>
    )
  },
  {
    name: 'Task Management System',
    description: 'A Kanban-based workflow management utility featuring nested sub-task matrices, priority sorting tags, keyboard shortcuts, and client-side indexDB backups.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'DnD-Kit', 'IndexedDB'],
    github: 'https://github.com',
    demo: 'https://example.com',
    thumbnail: (
      <div className="w-full h-full bg-gradient-to-br from-sky-500 to-sky-700 flex items-center justify-center p-6 text-white overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="w-full max-w-[80%] bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-lg flex flex-col gap-2">
          <div className="flex items-center gap-1.5 border-b border-white/10 pb-2 text-xs font-semibold">
            <ListTodo className="w-3.5 h-3.5 text-sky-300" /> KANBAN FLOW
          </div>
          <div className="grid grid-cols-3 gap-1.5 py-1">
            <div className="p-1 rounded bg-white/10 border border-white/10 space-y-1">
              <span className="text-[7px] text-white/50">TO DO</span>
              <div className="h-1 bg-white/30 rounded-full" />
            </div>
            <div className="p-1 rounded bg-white/10 border border-white/10 space-y-1">
              <span className="text-[7px] text-indigo-300">PROGRESS</span>
              <div className="h-1 bg-white/40 rounded-full" />
              <div className="h-1 bg-white/30 rounded-full" />
            </div>
            <div className="p-1 rounded bg-white/20 border border-white/30 space-y-1">
              <span className="text-[7px] text-emerald-300">DONE</span>
              <div className="h-1 bg-emerald-400/40 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    name: 'Healthcare AI Assistant',
    description: 'A clinical helper dashboard connecting LLM vector indexes with medical guidelines to provide symptom categorization and diagnostic suggestions for professionals.',
    technologies: ['Next.js', 'Python', 'FastAPI', 'LangChain', 'Pinecone'],
    github: 'https://github.com',
    demo: 'https://example.com',
    thumbnail: (
      <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center p-6 text-white overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="w-full max-w-[80%] bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-lg flex flex-col gap-2">
          <div className="flex items-center gap-1.5 border-b border-white/10 pb-2 text-xs font-semibold">
            <Activity className="w-3.5 h-3.5 text-teal-300" /> CLINICAL DATA
          </div>
          <div className="flex justify-between items-center gap-2 py-1">
            <div className="h-1.5 w-1/2 bg-white/20 rounded-full" />
            <span className="text-[8px] bg-teal-400/30 text-teal-200 px-1 py-0.5 rounded font-mono font-bold">PATIENT Vitals</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/5 p-1 rounded border border-white/10">
              <span className="text-[6px] text-white/50">Heart Rate</span>
              <p className="text-[10px] font-bold text-emerald-300">72 bpm</p>
            </div>
            <div className="bg-white/5 p-1 rounded border border-white/10">
              <span className="text-[6px] text-white/50">Temp</span>
              <p className="text-[10px] font-bold text-teal-300">98.6 °F</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

export const Projects: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring' as const, stiffness: 90, damping: 14 } 
    },
  };

  return (
    <section id="projects" className="py-24 relative bg-slate-50/50 border-y border-slate-100/60">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            A handpicked selection of professional engineering designs and full-stack solutions built to demonstrate architectural competency.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl overflow-hidden transition-all flex flex-col text-left h-full"
            >
              {/* Thumbnail Area */}
              <div className="h-48 overflow-hidden bg-slate-100 border-b border-slate-200/60 relative">
                {project.thumbnail}
              </div>

              {/* Card Details Area */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-600 text-[10px] font-bold">
                      +{project.technologies.length - 3} More
                    </span>
                  )}
                </div>

                <h3 className="font-display font-bold text-xl text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Card Action Buttons */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-100">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    <span>Source</span>
                  </a>
                  
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Projects;
