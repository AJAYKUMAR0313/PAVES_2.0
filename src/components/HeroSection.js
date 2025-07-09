import Image from 'next/image';
import Link from 'next/link';
import { hero } from '../data/landingContent';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <motion.section
      className="relative mb-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${hero.background}')` }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-24 gap-12">
        {/* Left Content */}
        <div className="text-center md:text-left md:w-1/2">
          <motion.h1 
            className="text-hero leading-tight mb-4 bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 bg-clip-text text-transparent animate-gradient-x"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {hero.headline}
          </motion.h1>
          <motion.p className="text-section-title mb-6 text-gray-700 dark:text-gray-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            {hero.subheadline}
          </motion.p>
          <Link href={hero.cta.href}>
            <motion.button
              className="mt-4 px-8 py-3 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 text-white rounded-full shadow-xl font-semibold text-lg flex items-center gap-2 transition-transform duration-300 hover:from-blue-600 hover:to-blue-700 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 animate-glow"
              whileHover={{ scale: 1.12, boxShadow: '0 8px 32px 0 rgba(59,130,246,0.25)', y: -4 }}
              whileTap={{ scale: 0.98 }}
              initial={{ filter: 'brightness(1)' }}
              animate={{ filter: ['brightness(1)', 'brightness(1.1)', 'brightness(1)'] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              <span>✨</span>
              {hero.cta.label}
            </motion.button>
          </Link>
        </div>
        {/* Right Image */}
        <motion.div
          className="md:w-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        >
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            width={hero.image.width}
            height={hero.image.height}
            className="w-full h-auto object-contain drop-shadow-2xl rounded-2xl"
          />
        </motion.div>
      </div>
    </motion.section>
  );
} 