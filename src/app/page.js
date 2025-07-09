// src/app/page.js
'use client';

import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '../components/HeroSection';
import WhyPaves from '../components/WhyPaves';
import Services from '../components/Services';
import IndustryVerticals from '../components/IndustryVerticals';
import PartnersEcosystem from '../components/PartnersEcosystem';
import JoinUs from '../components/JoinUs';

export default function HomePage() {
  return (
    <div className="min-h-screen px-6 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      <main>
        <HeroSection />
        <WhyPaves />
        <Services />
        <IndustryVerticals />
        <PartnersEcosystem />
        {/* AI Labs Subsection */}
        <section className="max-w-7xl mx-auto py-16 px-4">
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
            <a href="/insights/ai-labs" className="flex-1">
              <div className="p-8 bg-white dark:bg-gray-900 rounded-2xl drop-shadow-2xl border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:drop-shadow-2xl cursor-pointer relative">
                <span className="text-5xl mb-4">🧪</span>
                <h3 className="text-section-title mb-2">AI Labs</h3>
                <p className="text-body text-gray-600 dark:text-gray-300">Explore our latest AI research, prototypes, and patents.</p>
                <span className="absolute top-2 right-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">New</span>
              </div>
            </a>
          </div>
        </section>
        <JoinUs />
      </main>
    </div>
  );
}
