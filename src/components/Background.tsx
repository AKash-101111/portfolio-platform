import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Background: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Subtle parallax scrolling offsets for the ambient blobs
  const orbY1 = useTransform(scrollY, [0, 2000], [0, -150]);
  const orbY2 = useTransform(scrollY, [0, 2000], [0, 100]);
  const orbY3 = useTransform(scrollY, [0, 2000], [0, -80]);
  
  return (
    <div className="fixed inset-0 -z-50 w-full h-full overflow-hidden bg-white">
      {/* 1. SaaS Subtle Grid Pattern */}
      {/* 1px lines spaced 80px apart, opacity 3% to 4% for a very premium, clean look */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.035)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" 
      />

      {/* 2 & 4. Mesh Gradient Effects with Floating Ambient blobs */}
      {/* Large scale orbs with 180px to 250px blur and 8% to 12% opacity */}
      <motion.div 
        style={{ y: orbY1 }}
        className="absolute top-[-15%] left-[-10%] w-[60vw] h-[60vw] md:w-[50rem] md:h-[50rem] rounded-full bg-[#8B5CF6]/10 blur-[180px] md:blur-[220px] pointer-events-none animate-ambient-slow-1"
      />
      
      <motion.div 
        style={{ y: orbY2 }}
        className="absolute top-[35%] right-[-10%] w-[55vw] h-[55vw] md:w-[45rem] md:h-[45rem] rounded-full bg-[#6366F1]/9 blur-[190px] md:blur-[240px] pointer-events-none animate-ambient-slow-2"
      />
      
      <motion.div 
        style={{ y: orbY3 }}
        className="absolute bottom-[-15%] left-[15%] w-[65vw] h-[65vw] md:w-[55rem] md:h-[55rem] rounded-full bg-[#A855F7]/8 blur-[200px] md:blur-[250px] pointer-events-none animate-ambient-slow-3"
      />

      {/* Light Noise Texture */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* Radial soft lighting mask to fade out the grid pattern at the screen edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(255,255,255,0.7)_100%)] pointer-events-none" />
    </div>
  );
};
export default Background;
