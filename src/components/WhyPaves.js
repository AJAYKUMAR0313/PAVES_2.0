import { features } from '../data/landingContent';
import { motion } from 'framer-motion';

export default function WhyPaves() {
  return (
    <section className="text-center mb-20">
      <h2 className="text-section-title mb-8">Why Paves Technologies</h2>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {features.map((feature, i) => (
          <motion.div
            key={i}
            className="p-8 rounded-2xl drop-shadow-2xl bg-white dark:bg-gray-800 transition-transform duration-300 hover:scale-105 hover:drop-shadow-2xl border border-gray-100 dark:border-gray-700"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
              {feature.icon}
            </div>
            <p className="text-body font-medium">{feature.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
} 