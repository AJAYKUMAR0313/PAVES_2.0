// src/app/who-we-are/about/page.js
'use client';
import { motion } from 'framer-motion';

const values = [
  {
    icon: '🚀',
    title: 'Innovation',
    description: 'We lead with creativity and embrace new technologies to drive transformation.'
  },
  {
    icon: '🤝',
    title: 'Trust',
    description: 'We build lasting relationships through transparency, integrity, and reliability.'
  },
  {
    icon: '🌍',
    title: 'Impact',
    description: 'We deliver solutions that create real-world value for our clients and communities.'
  },
  {
    icon: '🤲',
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and diverse perspectives.'
  },
];

export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-hero mb-4">About Paves Technologies</h1>
        <p className="text-section-title text-gray-700 max-w-2xl mx-auto mb-4">
          We are AI-First by Design, leading the transformation of banking, payments, insurance, and financial services. Our mission is to empower institutions, customers, and partners to thrive in an ever-evolving digital ecosystem.
        </p>
        <p className="text-body text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          At Paves Technologies, we believe in innovation, trust, and collaboration. We are committed to delivering meaningful impact through technology and human-centric solutions.
        </p>
      </motion.div>

      {/* Values Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        {values.map((value) => (
          <motion.div
            key={value.title}
            className="p-8 bg-white dark:bg-gray-900 rounded-2xl drop-shadow-2xl border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:drop-shadow-2xl cursor-pointer"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-600 text-white text-3xl mb-6 shadow-lg">
              {value.icon}
            </div>
            <h3 className="text-section-title mb-2">{value.title}</h3>
            <p className="text-body text-gray-600 dark:text-gray-300">{value.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Leadership/Team Placeholder */}
      <motion.div
        className="text-center pt-8 border-t border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-section-title mb-4">Our Leadership</h2>
        <p className="text-body text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Meet the visionaries and experts driving Paves Technologies forward. (Leadership profiles coming soon.)
        </p>
      </motion.div>
    </section>
  );
}