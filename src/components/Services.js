import Image from 'next/image';
import { services } from '../data/landingContent';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <motion.section
      className="mb-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center md:justify-start">
          <Image src="/assets/services.jpg" alt="Our Services" width={400} height={250} className="object-contain drop-shadow-2xl rounded-2xl" priority />
        </div>
        <motion.div
          className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 border-l-4 border-blue-400 shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <span className="absolute -top-4 left-4 bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-bold shadow animate-pulse">Featured</span>
          <p className="text-body font-bold text-blue-900 dark:text-blue-200 text-lg">
            {services.description}
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
} 