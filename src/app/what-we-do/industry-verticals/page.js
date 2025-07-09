'use client';

import { motion } from 'framer-motion';

const industryVerticals = [
  {
    icon: '💳',
    title: 'Payments',
    description: 'Card Issuers, Merchant Acquirers, E-commerce, Embedded Finance, Payment Gateways, Real Time Payments.'
  },
  {
    icon: '🏦',
    title: 'Banking',
    description: 'Retail Banking, Corporate & Commercial Banking, Consumer Lending, Digital Banking, Open Banking.'
  },
  {
    icon: '🛡️',
    title: 'Payments Fraud & AML',
    description: 'Advanced fraud detection, anti-money laundering, and compliance solutions.'
  },
  {
    icon: '⚖️',
    title: 'Governance, Risk & Compliance',
    description: 'Comprehensive GRC solutions for regulatory compliance and risk management.'
  },
  {
    icon: '💼',
    title: 'Insurance',
    description: 'Digital transformation for insurance carriers, brokers, and insurtech.'
  },
  {
    icon: '📈',
    title: 'Capital Markets',
    description: 'AI-driven solutions for capital markets, trading, and wealth management.'
  },
];

export default function IndustryVerticalsPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-hero mb-4">Industry Verticals</h1>
        <p className="text-section-title text-gray-700 max-w-2xl mx-auto">
          We empower organizations across the financial services spectrum with deep domain expertise and AI-first solutions. Explore our focus areas below.
        </p>
      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        {industryVerticals.map((vector, idx) => (
          <motion.div
            key={vector.title}
            className="p-8 bg-white dark:bg-gray-900 rounded-2xl drop-shadow-2xl border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:drop-shadow-2xl cursor-pointer"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-600 text-white text-3xl mb-6 shadow-lg">
              {vector.icon}
            </div>
            <h3 className="text-section-title mb-2">{vector.title}</h3>
            <p className="text-body text-gray-600 dark:text-gray-300">{vector.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}