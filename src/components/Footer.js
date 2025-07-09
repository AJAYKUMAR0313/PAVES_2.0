'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const industryVerticals = [
  { label: 'Payments', href: '/what-we-do/industry-verticals' },
  { label: 'Banking', href: '/what-we-do/industry-verticals' },
  { label: 'Payments Fraud & AML', href: '/what-we-do/industry-verticals' },
  { label: 'Governance, Risk & Compliance', href: '/what-we-do/industry-verticals' },
  { label: 'Insurance', href: '/what-we-do/industry-verticals' },
  { label: 'Capital Markets', href: '/what-we-do/industry-verticals' },
];

export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <footer
        className="pt-12 pb-8 text-sm bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-200 border-t shadow-inner"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-4 md:px-12">
          {/* About Paves */}
          <div>
            <h3 className="font-bold mb-3 text-blue-700 flex items-center gap-2">
              <span className="text-xl">🏢</span> About Paves
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/who-we-are/about" className="hover:text-blue-600 font-medium transition-colors duration-300">About</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-blue-600 font-medium transition-colors duration-300">Careers</Link>
              </li>
            </ul>
          </div>
          {/* Focus Areas */}
          <div>
            <h3 className="font-bold mb-3 text-green-700 flex items-center gap-2">
              <span className="text-xl">🎯</span> Focus Areas
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/insights/ai-labs" className="hover:text-green-600 font-medium transition-colors duration-300">AI Labs</Link>
              </li>
              <li>
                <Link href="/what-we-do/services" className="hover:text-green-600 font-medium transition-colors duration-300">Services</Link>
              </li>
            </ul>
          </div>
          {/* Industry Verticals */}
          <div>
            <h3 className="font-bold mb-3 text-purple-700 flex items-center gap-2">
              <span className="text-xl">🏦</span> Industry Verticals
            </h3>
            <ul className="space-y-2">
              {industryVerticals.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="hover:text-purple-600 font-medium transition-colors duration-300">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* LinkedIn */}
          <div className="flex flex-col items-start justify-between h-full">
            <h3 className="font-bold mb-3 text-blue-900 flex items-center gap-2">
              <span className="text-xl">🔗</span> Connect
            </h3>
            <a
              href="https://www.linkedin.com/company/paves-technologies/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-full font-semibold shadow hover:bg-blue-800 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.594v5.602z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
        <p className="mt-10 text-center text-gray-500 dark:text-gray-400 text-xs tracking-wide">&copy; {new Date().getFullYear()} Paves Technologies. All rights reserved.</p>
      </footer>
    </motion.div>
  );
} 