// src/app/what-we-do/services/page.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const servicesList = [
  {
    icon: '💼',
    title: 'Business & Technology Advisory Consulting',
    description: 'Strategic guidance to drive digital transformation and business growth.'
  },
  {
    icon: '🤖',
    title: 'Artificial Intelligence',
    description: 'AI-first solutions for automation, analytics, and smarter decision-making.'
  },
  {
    icon: '☁️',
    title: 'Cloud Engineering & DevOps',
    description: 'Cloud-native development, migration, and DevOps for agility and scale.'
  },
  {
    icon: '📊',
    title: 'Data & Analytics',
    description: 'Unlock insights and value from your data with advanced analytics.'
  },
  {
    icon: '🛠️',
    title: 'Product Management & Engineering',
    description: 'End-to-end product strategy, design, and engineering services.'
  },
  {
    icon: '🤖',
    title: 'Enterprise Automation',
    description: 'Automate business processes for efficiency and innovation.'
  },
  {
    icon: '🔄',
    title: 'Legacy Support & Modernization',
    description: 'Modernize legacy systems for future-ready operations.'
  },
  {
    icon: '🛡️',
    title: 'Cyber Security',
    description: 'Protect your business with advanced security solutions.'
  },
  {
    icon: '🆔',
    title: 'Identity & Access Management',
    description: 'Secure and manage digital identities across your organization.'
  },
  {
    icon: '🚀',
    title: 'Next Gen Technologies',
    description: 'Adopt emerging technologies for a competitive edge.'
  },
];

export default function ServicesPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-hero mb-4">Our Services</h1>
        <p className="text-section-title text-gray-700 max-w-2xl mx-auto">
          We provide end-to-end technology services tailored to your industry needs, powered by AI-driven innovation.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {servicesList.map((service, idx) => (
          <motion.div
            key={service.title}
            className="p-8 bg-white dark:bg-gray-900 rounded-2xl drop-shadow-2xl border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:drop-shadow-2xl cursor-pointer"
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.3 }}
          >
            {idx === 0 && (
              <Image src="/assets/home_ai.png" alt="Service" width={48} height={48} className="mb-6 rounded-2xl object-contain drop-shadow-2xl" loading="lazy" />
            )}
            {idx === 1 && (
              <Image src="/assets/partnership.jpg" alt="AI" width={48} height={48} className="mb-6 rounded-2xl object-contain drop-shadow-2xl" loading="lazy" />
            )}
            {idx !== 0 && idx !== 1 && (
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white text-2xl mb-6 shadow-lg">
                {service.icon}
              </div>
            )}
            <h3 className="text-section-title mb-2">{service.title}</h3>
            <p className="text-body text-gray-600 dark:text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
