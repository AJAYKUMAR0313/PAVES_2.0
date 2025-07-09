import Link from 'next/link';
import { joinUs } from '../data/landingContent';
import { motion } from 'framer-motion';

export default function JoinUs() {
  return (
    <motion.section
      className="text-center mb-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-section-title mb-6">{joinUs.headline}</h2>
      <p className="text-body mb-8">{joinUs.description}</p>
      <Link href={joinUs.cta.href}>
        <motion.button
          className="px-8 py-3 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 text-white rounded-full shadow-xl font-semibold text-lg flex items-center gap-2 transition-transform duration-300 hover:from-blue-600 hover:to-blue-700 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 animate-glow"
          whileHover={{ scale: 1.12, boxShadow: '0 8px 32px 0 rgba(59,130,246,0.25)', y: -4 }}
          whileTap={{ scale: 0.98 }}
          initial={{ filter: 'brightness(1)' }}
          animate={{ filter: ['brightness(1)', 'brightness(1.1)', 'brightness(1)'] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <span>🚀</span>
          {joinUs.cta.label}
        </motion.button>
      </Link>
    </motion.section>
  );
} 