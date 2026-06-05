import { jsPDF } from 'jspdf';

export const downloadResume = () => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'letter'
  });

  // Color Palette
  const primaryColor = '#0F172A'; // slate-900
  const secondaryColor = '#475569'; // slate-600
  const accentColor = '#6366F1'; // indigo-500
  
  // Font sizes & positions
  let y = 50;
  const margin = 50;
  const width = doc.internal.pageSize.getWidth();

  // Helper function to draw divider
  const drawDivider = (currentY: number) => {
    doc.setDrawColor(226, 232, 240); // E2E8F0
    doc.setLineWidth(1);
    doc.line(margin, currentY, width - margin, currentY);
    return currentY + 15;
  };

  // Header - Name
  doc.setTextColor(primaryColor);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(26);
  doc.text('ALEX CARTER', margin, y);
  
  // Header - Title
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(14);
  doc.setTextColor(accentColor);
  doc.text('Full Stack Developer', margin, y + 20);
  
  // Header - Contacts
  doc.setFontSize(9);
  doc.setTextColor(secondaryColor);
  const contacts = 'alex.carter@dev.com  |  +1 (555) 019-2834  |  github.com/alexcarter  |  linkedin.com/in/alexcarter';
  doc.text(contacts, margin, y + 36);
  
  y += 55;
  y = drawDivider(y);

  // Profile Section
  doc.setTextColor(primaryColor);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('PROFESSIONAL SUMMARY', margin, y);
  
  y += 15;
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(secondaryColor);
  const summaryText = 'Highly motivated Full Stack Developer with 2+ years of experience building scalable digital experiences. Specialized in React, TypeScript, Next.js, and cloud architectures. Passionate about engineering elegant software solutions, AI-powered applications, and user-centric designs with modern web technologies.';
  const splitSummary = doc.splitTextToSize(summaryText, width - (margin * 2));
  doc.text(splitSummary, margin, y);
  
  y += (splitSummary.length * 13) + 10;

  // Experience Section
  doc.setTextColor(primaryColor);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('PROFESSIONAL EXPERIENCE', margin, y);
  y = drawDivider(y + 5);

  // Job 1
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(primaryColor);
  doc.text('Software Engineer', margin, y);
  doc.setFont('Helvetica', 'normal');
  doc.setTextColor(secondaryColor);
  doc.text('Vercel  |  Remote', margin + 110, y);
  
  doc.setFont('Helvetica', 'italic');
  doc.text('Jun 2024 - Present', width - margin, y, { align: 'right' });
  
  y += 14;
  doc.setFont('Helvetica', 'normal');
  const job1Bullets = [
    '• Designed and built high-performance frontend components for core Vercel dashboard using React, TailwindCSS, and TypeScript.',
    '• Optimized client-side page load metrics and decreased initial bundle sizes by 18% using dynamic imports and tree-shaking.',
    '• Collaborated closely with product and design teams to implement Stripe-like seamless billing experience UI flows.'
  ];
  job1Bullets.forEach(bullet => {
    const splitBullet = doc.splitTextToSize(bullet, width - (margin * 2) - 10);
    doc.text(splitBullet, margin + 10, y);
    y += (splitBullet.length * 13);
  });
  y += 5;

  // Job 2
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(primaryColor);
  doc.text('Software Engineering Intern', margin, y);
  doc.setFont('Helvetica', 'normal');
  doc.setTextColor(secondaryColor);
  doc.text('Stripe  |  San Francisco, CA', margin + 145, y);
  
  doc.setFont('Helvetica', 'italic');
  doc.text('Jun 2023 - Sep 2023', width - margin, y, { align: 'right' });
  
  y += 14;
  doc.setFont('Helvetica', 'normal');
  const job2Bullets = [
    '• Integrated custom telemetry visualizations into the core Stripe dashboard using D3.js and SVG charting overlays.',
    '• Improved test coverage of transaction processing components from 74% to 92% by writing Jest integration specs.',
    '• Developed responsive UI mockups and prototypes during internal hackathons using Tailwind and Framer Motion.'
  ];
  job2Bullets.forEach(bullet => {
    const splitBullet = doc.splitTextToSize(bullet, width - (margin * 2) - 10);
    doc.text(splitBullet, margin + 10, y);
    y += (splitBullet.length * 13);
  });
  
  y += 10;

  // Projects Section
  doc.setTextColor(primaryColor);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('KEY PROJECTS', margin, y);
  y = drawDivider(y + 5);

  // Project 1
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(primaryColor);
  doc.text('AI Resume Analyzer', margin, y);
  doc.setFont('Helvetica', 'normal');
  doc.setTextColor(secondaryColor);
  doc.text(' - Python, React, NLP, OpenAI API', margin + 110, y);
  
  y += 14;
  const proj1Desc = 'Developed a web app that analyzes resumes with NLP to compare matches with job descriptions, scoring features with 94% accuracy.';
  const splitProj1 = doc.splitTextToSize(proj1Desc, width - (margin * 2));
  doc.text(splitProj1, margin, y);
  y += (splitProj1.length * 13) + 8;

  // Project 2
  doc.setFont('Helvetica', 'bold');
  doc.setTextColor(primaryColor);
  doc.text('Smart Fitness Platform', margin, y);
  doc.setFont('Helvetica', 'normal');
  doc.setTextColor(secondaryColor);
  doc.text(' - Next.js, Node.js, TensorFlow.js', margin + 115, y);
  
  y += 14;
  const proj2Desc = 'Engineered an interactive exercise tracking platform tracking client-side body posture during workouts with real-time feedback.';
  const splitProj2 = doc.splitTextToSize(proj2Desc, width - (margin * 2));
  doc.text(splitProj2, margin, y);
  
  y += (splitProj2.length * 13) + 15;

  // Education Section
  doc.setTextColor(primaryColor);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('EDUCATION', margin, y);
  y = drawDivider(y + 5);

  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(primaryColor);
  doc.text('B.S. in Computer Science', margin, y);
  doc.setFont('Helvetica', 'normal');
  doc.setTextColor(secondaryColor);
  doc.text('Stanford University', margin + 130, y);
  doc.setFont('Helvetica', 'italic');
  doc.text('Graduated Jun 2024', width - margin, y, { align: 'right' });

  y += 20;

  // Skills & Certifications Section (Two Column Side-by-Side layout)
  const leftColWidth = (width - (margin * 2) - 30) / 2;
  const rightColX = margin + leftColWidth + 30;
  const sectionStartY = y;

  // Left: Skills
  doc.setTextColor(primaryColor);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('TECHNICAL SKILLS', margin, y);
  doc.line(margin, y + 5, margin + leftColWidth, y + 5);

  y += 18;
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(primaryColor);
  doc.text('Languages & Frameworks: ', margin, y);
  doc.setFont('Helvetica', 'normal');
  doc.setTextColor(secondaryColor);
  doc.text('TypeScript, JavaScript, Python, React, Next.js, TailwindCSS', margin + 115, y);

  y += 13;
  doc.setFont('Helvetica', 'bold');
  doc.setTextColor(primaryColor);
  doc.text('Databases & Tools: ', margin, y);
  doc.setFont('Helvetica', 'normal');
  doc.setTextColor(secondaryColor);
  doc.text('PostgreSQL, MongoDB, Docker, Git, REST APIs', margin + 85, y);

  y += 13;
  doc.setFont('Helvetica', 'bold');
  doc.setTextColor(primaryColor);
  doc.text('Cloud & Systems: ', margin, y);
  doc.setFont('Helvetica', 'normal');
  doc.setTextColor(secondaryColor);
  doc.text('AWS, Vercel, Node.js, Serverless, AI Integrations', margin + 80, y);

  // Right: Certifications
  y = sectionStartY;
  doc.setTextColor(primaryColor);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('CERTIFICATIONS', rightColX, y);
  doc.line(rightColX, y + 5, rightColX + leftColWidth, y + 5);

  y += 18;
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(primaryColor);
  doc.text('AWS Certified Solutions Architect', rightColX, y);
  doc.setFont('Helvetica', 'normal');
  doc.setTextColor(secondaryColor);
  doc.text(' - Amazon Web Services, 2024', rightColX + 160, y);

  y += 13;
  doc.setFont('Helvetica', 'bold');
  doc.setTextColor(primaryColor);
  doc.text('Google Cloud Certified Associate', rightColX, y);
  doc.setFont('Helvetica', 'normal');
  doc.setTextColor(secondaryColor);
  doc.text(' - Google Cloud, 2023', rightColX + 160, y);

  // Save / Download file
  doc.save('alex-carter-resume.pdf');
};
