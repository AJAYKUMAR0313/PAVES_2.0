// src/app/insights/thought-leadership/page.js
'use client';
import { motion } from 'framer-motion';

const topics = [
  {
    icon: '💡',
    title: 'AI-First Thinking',
    description: 'Exploring how artificial intelligence transforms industries and unlocks new opportunities.'
  },
  {
    icon: '📰',
    title: 'Pioneering Solutions',
    description: 'Solving real-world problems with innovative, industry-specific solutions.'
  },
  {
    icon: '🧪',
    title: 'Culture of Experimentation',
    description: 'Encouraging teams to think boldly, challenge assumptions, and experiment.'
  },
  {
    icon: '🤝',
    title: 'Industry Partnerships',
    description: 'Collaborating with global leaders, academia, and technology pioneers for breakthrough solutions.'
  },
];

export default function ThoughtLeadershipPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <motion.div
        className="rounded-3xl bg-gradient-to-r from-green-600 via-green-400 to-green-600 text-white text-center py-16 px-6 mb-14 relative overflow-hidden shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="text-7xl block mb-4 animate-bounce">💡</span>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Thought Leadership</h1>
        <p className="text-xl md:text-2xl font-medium mb-2 max-w-2xl mx-auto">Redefining the Future, One Innovation at a Time</p>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">Insights, strategies, and solutions that help businesses thrive in an AI-first era.</p>
        <span className="absolute top-4 right-8 bg-yellow-200 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold shadow animate-pulse">Featured</span>
      </motion.div>

      {/* Topics Timeline */}
      <div className="relative border-l-4 border-green-200 dark:border-green-700 ml-6 mt-10">
        {topics.map((topic, idx) => (
          <motion.div
            key={topic.title}
            className="mb-12 ml-8 relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="absolute -left-10 top-0 w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white text-2xl shadow-lg border-4 border-white dark:border-gray-900">
              {topic.icon}
            </div>
            <h3 className="text-2xl font-bold mb-1 text-green-700 dark:text-green-300">{topic.title}</h3>
            <p className="text-body text-gray-700 dark:text-gray-200 mb-2">{topic.description}</p>
            {idx === 0 && (
              <span className="inline-block bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-semibold mr-2 animate-pulse">Start Here</span>
            )}
            {idx === topics.length - 1 && (
              <span className="inline-block bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-semibold mr-2 animate-bounce">Collaboration</span>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}