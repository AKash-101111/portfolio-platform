import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  link: string;
}

const certifications: Certification[] = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Issued Oct 2024',
    credentialId: 'AWS-ASA-99238',
    link: 'https://aws.amazon.com/certification/'
  },
  {
    name: 'Associate Cloud Engineer',
    issuer: 'Google Cloud (GCP)',
    date: 'Issued Aug 2023',
    credentialId: 'GCP-ACE-81023',
    link: 'https://cloud.google.com/certification'
  },
  {
    name: 'Advanced React Certification',
    issuer: 'Meta',
    date: 'Issued Mar 2023',
    credentialId: 'META-REACT-7729',
    link: 'https://coursera.org'
  }
];

export const Certifications: React.FC = () => {
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
    <section id="certifications" className="py-24 relative bg-slate-50/50 border-y border-slate-100/60">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 tracking-tight mb-4">
            Licenses & Certifications
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Professional industry credentials validating technical and architectural expertise.
          </p>
        </div>

        {/* Certifications Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.name}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-indigo-200/80 transition-all flex flex-col text-left justify-between"
            >
              <div>
                {/* Icon & Issuer */}
                <div className="flex justify-between items-start mb-4">
                  <span className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600">
                    <Award className="w-5.5 h-5.5" />
                  </span>
                  
                  <span className="flex items-center gap-1 text-slate-400 text-xs font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    {cert.date}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-slate-900 mb-1 leading-snug">
                  {cert.name}
                </h3>
                
                <p className="text-indigo-600 text-sm font-semibold mb-3">
                  {cert.issuer}
                </p>
                
                <p className="text-slate-500 text-xs font-mono mb-6">
                  Credential ID: {cert.credentialId}
                </p>
              </div>

              {/* View Certificate Link */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all w-full mt-auto"
              >
                <span>View Certificate</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Certifications;
