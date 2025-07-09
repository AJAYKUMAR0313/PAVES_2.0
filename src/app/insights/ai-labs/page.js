// src/app/insights/ai-labs/page.js
'use client';
import { motion } from 'framer-motion';

const features = [
  {
    icon: '⚡',
    title: 'Accelerators & MVPs',
    description: 'Rapidly built, ready-to-deploy AI solutions and MVPs that help clients jumpstart innovation and time-to-value.'
  },
  {
    icon: '🧑‍💻',
    title: 'Demos',
    description: 'Live demonstrations of our AI, automation, and analytics capabilities in real-world scenarios.'
  },
  {
    icon: '🔬',
    title: 'AI Research',
    description: 'Exploring the boundaries of AI, LLMs, automation, and decision systems.'
  },
  {
    icon: '🤝',
    title: 'Collaborative Innovation',
    description: 'Partnering with clients and teams to co-create future-ready solutions.'
  },
];

export default function AILabsPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <motion.div
        className="rounded-3xl bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 text-white text-center py-16 px-6 mb-14 relative overflow-hidden shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="text-7xl block mb-4 animate-bounce">🧪</span>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Paves AI Labs</h1>
        <p className="text-xl md:text-2xl font-medium mb-2 max-w-2xl mx-auto">Where Innovation Meets Possibility</p>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">Transforming visionary ideas into impactful, AI-powered solutions for employees, customers, and partners.</p>
        <span className="absolute top-4 right-8 bg-yellow-200 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold shadow animate-pulse">Innovation Hub</span>
      </motion.div>

      {/* Features Timeline */}
      <div className="relative border-l-4 border-blue-200 dark:border-blue-700 ml-6 mt-10">
        {features.map((feature, idx) => (
          <motion.div
            key={feature.title}
            className="mb-12 ml-8 relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="absolute -left-10 top-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl shadow-lg border-4 border-white dark:border-gray-900">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold mb-1 text-blue-700 dark:text-blue-300">{feature.title}</h3>
            <p className="text-body text-gray-700 dark:text-gray-200 mb-2">{feature.description}</p>
            {idx === 0 && (
              <span className="inline-block bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-semibold mr-2 animate-pulse">Start Here</span>
            )}
            {idx === features.length - 1 && (
              <span className="inline-block bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-semibold mr-2 animate-bounce">Collaboration</span>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}