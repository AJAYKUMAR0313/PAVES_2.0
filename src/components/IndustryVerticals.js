import { motion } from 'framer-motion';

const verticals = [
  {
    icon: '💳',
    title: 'Payments',
    description: 'Secure, efficient solutions for seamless global fund transfers and digital payments.',
    color: 'from-pink-500 to-pink-300',
    annotation: 'Trending'
  },
  {
    icon: '🏦',
    title: 'Banking',
    description: 'Comprehensive financial services, adapting to regulatory and technological shifts.',
    color: 'from-blue-600 to-blue-400',
    annotation: 'Core'
  },
  {
    icon: '🛡️',
    title: 'Payments Fraud & AML',
    description: 'Advanced analytics to prevent fraud and ensure Anti-Money Laundering compliance.',
    color: 'from-yellow-500 to-yellow-300',
    annotation: 'Secure'
  },
  {
    icon: '⚖️',
    title: 'Governance, Risk & Compliance',
    description: 'Aligning governance and risk management to navigate complex regulatory landscapes.',
    color: 'from-purple-600 to-purple-400',
    annotation: 'Compliance'
  },
  {
    icon: '💼',
    title: 'Insurance',
    description: 'Strategies to protect clients against potential losses through effective risk management.',
    color: 'from-green-600 to-green-400',
    annotation: 'Innovative'
  },
  {
    icon: '📈',
    title: 'Capital Markets',
    description: 'Expert investment advice and AI-driven capital market strategies.',
    color: 'from-indigo-600 to-indigo-400',
    annotation: 'Growth'
  },
];

export default function IndustryVerticals() {
  return (
    <motion.section
      className="mb-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-2xl font-semibold mb-8 text-center">Industry Verticals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {verticals.map((v, idx) => (
          <motion.div
            key={v.title}
            className={`relative p-8 rounded-2xl shadow-xl bg-gradient-to-br ${v.color} text-white flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <span className="absolute top-4 right-4 bg-white text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow animate-pulse">{v.annotation}</span>
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white bg-opacity-20 text-3xl mb-4 shadow-lg">
              {v.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{v.title}</h3>
            <p className="text-body text-white text-opacity-90">{v.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
} 