// src/app/who-we-are/technology-council/page.js
'use client';
import { motion } from 'framer-motion';

const councilMembers = [
  {
    name: 'Dr. A. I. Visionary',
    title: 'Chief AI Strategist',
    bio: 'Pioneering AI-driven solutions for global enterprises. 20+ years in AI research and implementation.'
  },
  {
    name: 'Ms. S. Cloud',
    title: 'Cloud Transformation Lead',
    bio: 'Expert in cloud engineering, DevOps, and digital transformation for Fortune 500 companies.'
  },
  {
    name: 'Mr. D. Secure',
    title: 'Cyber Security Advisor',
    bio: 'Specialist in enterprise security, compliance, and risk management.'
  },
  {
    name: 'Dr. Data Insight',
    title: 'Analytics & Data Science Chair',
    bio: 'Driving innovation in data analytics, machine learning, and business intelligence.'
  },
];

export default function TechnologyCouncilPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-hero mb-4">Technology Council</h1>
        <p className="text-section-title text-gray-700 max-w-2xl mx-auto mb-4">
          Our Technology Council brings together industry leaders and visionaries to guide our innovation, strategy, and technology excellence.
        </p>
        <p className="text-body text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          With deep expertise in AI, cloud, security, and analytics, our council ensures Paves Technologies remains at the forefront of digital transformation.
        </p>
      </motion.div>

      {/* Council Members Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        {councilMembers.map((member) => (
          <motion.div
            key={member.name}
            className="p-8 bg-white dark:bg-gray-900 rounded-2xl drop-shadow-2xl border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:drop-shadow-2xl cursor-pointer"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-600 text-white text-2xl mb-4 shadow-lg">
              {member.name.split(' ').map(n => n[0]).join('')}
            </div>
            <h3 className="text-section-title mb-1">{member.name}</h3>
            <p className="text-body font-semibold text-blue-700 dark:text-blue-400 mb-2">{member.title}</p>
            <p className="text-body text-gray-600 dark:text-gray-300">{member.bio}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}