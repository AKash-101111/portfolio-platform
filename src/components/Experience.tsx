import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  position: string;
  organization: string;
  location: string;
  duration: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    position: 'Software Engineer',
    organization: 'Vercel',
    location: 'Remote',
    duration: 'Jun 2024 - Present',
    description: [
      'Designed and built high-performance frontend components for core Vercel dashboards using React, TailwindCSS, and TypeScript.',
      'Optimized client-side page load metrics and decreased initial bundle sizes by 18% using dynamic imports and code splitting.',
      'Collaborated closely with product and design teams to implement Stripe-like billing experience UI flows.',
      'Maintained test pipelines with Playwright E2E and Jest integration assertions.'
    ]
  },
  {
    position: 'Software Engineering Intern',
    organization: 'Stripe',
    location: 'San Francisco, CA',
    duration: 'Jun 2023 - Sep 2023',
    description: [
      'Integrated custom telemetry visualizations into the core Stripe dashboard using D3.js and SVG charting.',
      'Improved code coverage of transaction processing components from 74% to 92% by writing Jest unit specs.',
      'Developed responsive UI dashboards during internal company hackathons using Tailwind and Framer Motion.'
    ]
  },
  {
    position: 'Full Stack Developer Contractor',
    organization: 'Notion Labs',
    location: 'Remote',
    duration: 'Jan 2023 - May 2023',
    description: [
      'Assisted in development of workspace template marketplace pages using React and Next.js static generator hooks.',
      'Fixed responsive layout bugs on tablets and mobile displays, ensuring standard design token consistency.'
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 tracking-tight mb-4">
            Professional Experience
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            A chronological timeline of my roles, achievements, and contributions in the software engineering sector.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 -translate-x-1/2" />

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row items-stretch md:justify-between w-full ${
                    isEven ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline node marker */}
                  <div className="absolute left-4 md:left-1/2 top-1.5 w-7 h-7 rounded-full bg-white border-4 border-indigo-600 -translate-x-1/2 z-10 flex items-center justify-center shadow-md shadow-indigo-100" />

                  {/* Left spacer for desktop */}
                  <div className="hidden md:block w-[45%]" />

                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ type: 'spring', stiffness: 85, damping: 14 }}
                    className="w-full md:w-[45%] pl-10 md:pl-0"
                  >
                    <div className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/60 shadow-sm hover:shadow-md hover:bg-white hover:border-slate-200 transition-all text-left">
                      {/* Meta header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-full">
                          <Briefcase className="w-3.5 h-3.5" />
                          {exp.organization}
                        </span>
                        
                        <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.duration}
                        </span>
                      </div>

                      {/* Job details */}
                      <h3 className="font-display font-bold text-xl text-slate-900 mb-1">
                        {exp.position}
                      </h3>
                      
                      <p className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-4">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </p>

                      {/* Bullet points */}
                      <ul className="space-y-2 text-slate-600 text-sm leading-relaxed">
                        {exp.description.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <span className="text-indigo-500 font-semibold mt-0.5">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
