import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Layout, Server, Database, Wrench, Cloud, BrainCircuit } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Layout className="w-5 h-5" />,
    color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux Toolkit', 'Framer Motion', 'HTML5/CSS3', 'Vite', 'Astro']
  },
  {
    title: 'Backend Concepts',
    icon: <Server className="w-5 h-5" />,
    color: 'text-purple-600 bg-purple-50 border-purple-100',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Microservices', 'WebSockets', 'Serverless Functions', 'JWT Auth']
  },
  {
    title: 'Databases',
    icon: <Database className="w-5 h-5" />,
    color: 'text-pink-600 bg-pink-50 border-pink-100',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'SQL/NoSQL Schema Design', 'ORM/Prisma', 'Database Indexing & Query Tuning']
  },
  {
    title: 'Tools & DevOps',
    icon: <Wrench className="w-5 h-5" />,
    color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    skills: ['Git & GitHub', 'Docker', 'Jest & React Testing Library', 'Playwright', 'ESLint & Prettier', 'CI/CD Pipelines', 'Webpack']
  },
  {
    title: 'Cloud',
    icon: <Cloud className="w-5 h-5" />,
    color: 'text-amber-600 bg-amber-50 border-amber-100',
    skills: ['AWS (S3, EC2, Lambda)', 'Vercel', 'Netlify', 'Cloudflare Pages', 'Docker Containers', 'Terraform (Basic)']
  },
  {
    title: 'AI & Machine Learning',
    icon: <BrainCircuit className="w-5 h-5" />,
    color: 'text-sky-600 bg-sky-50 border-sky-100',
    skills: ['OpenAI API Integration', 'Prompt Engineering', 'LangChain', 'TensorFlow.js', 'Vector DBs (Pinecone)', 'RAG Frameworks']
  }
];

export const Skills: React.FC = () => {
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
    <section id="skills" className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 tracking-tight mb-4">
            Technical Skillset
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            A structured breakdown of my tools, frameworks, and programming knowledge, categorized by system architecture layers.
          </p>
        </div>

        {/* Responsive Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl bg-slate-50/50 border border-slate-200/60 shadow-sm hover:shadow-md hover:bg-white hover:border-slate-200 transition-all flex flex-col text-left group"
            >
              {/* Card Title & Icon */}
              <div className="flex items-center gap-3 mb-5">
                <span className={`p-2.5 rounded-xl border flex items-center justify-center transition-all ${category.color} group-hover:scale-105`}>
                  {category.icon}
                </span>
                <h3 className="font-display font-bold text-lg text-slate-800 group-hover:text-slate-900">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags List */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200/80 text-slate-600 text-xs font-semibold hover:border-indigo-400 hover:text-indigo-600 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Skills;
