import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Trophy, Code2, HeartHandshake, Users } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  badge: string;
  icon: React.ReactNode;
  color: string;
}

const achievements: Achievement[] = [
  {
    title: 'Hackathon Winner',
    description: 'Secured 1st place out of 120+ teams at Stanford Web3 Hackathon 2023 for designing a zero-knowledge credential verification interface.',
    badge: '1st Place Award',
    icon: <Trophy className="w-6 h-6" />,
    color: 'text-indigo-600 bg-indigo-50 border-indigo-100'
  },
  {
    title: 'Coding Competition Finalist',
    description: 'Ranked in the top 2% of over 5,000 global participants in Google Kick Start Round F 2022 algorithm challenges.',
    badge: 'Top 2% Global',
    icon: <Code2 className="w-6 h-6" />,
    color: 'text-purple-600 bg-purple-50 border-purple-100'
  },
  {
    title: 'Open Source Contributor',
    description: 'Active contributor to Vite core & Tailwind components, optimizing build system plugins and documentation.',
    badge: '20+ Merged PRs',
    icon: <HeartHandshake className="w-6 h-6" />,
    color: 'text-pink-600 bg-pink-50 border-pink-100'
  },
  {
    title: 'Technical Event Organizer',
    description: 'Co-organized Stanford Developer Meetups (300+ attendees), coordinating speakers, venue logistics, and live-coding workshops.',
    badge: 'Lead Organizer',
    icon: <Users className="w-6 h-6" />,
    color: 'text-emerald-600 bg-emerald-50 border-emerald-100'
  }
];

export const Achievements: React.FC = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring' as const, stiffness: 90, damping: 14 } 
    },
  };

  return (
    <section id="achievements" className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 tracking-tight mb-4">
            Honors & Achievements
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Key professional accolades, competition awards, and leadership achievements outside of school and work.
          </p>
        </div>

        {/* Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {achievements.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-6 rounded-3xl bg-slate-50/50 border border-slate-200/60 shadow-sm hover:shadow-md hover:bg-white hover:border-slate-200 transition-all flex flex-col sm:flex-row gap-6 text-left"
            >
              {/* Icon Container */}
              <div className={`p-4 rounded-2xl border flex items-center justify-center h-fit w-fit ${item.color}`}>
                {item.icon}
              </div>

              {/* Text Context */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-display font-bold text-xl text-slate-900">
                      {item.title}
                    </h3>
                    <span className="px-2 py-0.5 rounded bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-bold uppercase tracking-wide">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Achievements;
