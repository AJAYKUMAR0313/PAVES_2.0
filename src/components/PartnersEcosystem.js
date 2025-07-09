import Image from 'next/image';
import { partners } from '../data/landingContent';
import { motion } from 'framer-motion';

export default function PartnersEcosystem() {
  return (
    <motion.section
      className="mb-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-2xl font-semibold mb-4">Partners Ecosystem</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="p-8 rounded-2xl drop-shadow-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex justify-center items-center transition-transform duration-300 hover:scale-105 hover:drop-shadow-2xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          whileHover={{ scale: 1.05 }}
        >
          <Image {...partners.image} className="object-contain drop-shadow-2xl rounded-2xl" />
        </motion.div>
        <motion.div
          className="relative p-8 rounded-2xl bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 border-l-4 border-green-400 shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <span className="absolute -top-4 left-4 bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-bold shadow animate-pulse">Strategic</span>
          <p className="text-body font-bold text-green-900 dark:text-green-200 text-lg">
            {partners.description}
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
} 