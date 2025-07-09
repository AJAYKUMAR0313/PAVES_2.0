// src/app/what-we-do/page.js
'use client';
import { motion } from 'framer-motion';

export default function WhatWeDoPage() {
  return (
    <div className="p-8 min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-4">🚀 What We Do</h1>
      <p className="mb-6">Explore our services, solutions, and innovations powering industries forward.</p>

      <div className="mb-6 space-x-4 border-b pb-2">
        <a href="#industry-vectors" className="hover:underline text-blue-600">Industry Vectors</a>
        <a href="#services" className="hover:underline text-blue-600">Services</a>
        <a href="#functionalities" className="hover:underline text-blue-600">Functionalities</a>
      </div>

      <motion.div id="industry-verticals" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Industry Verticals</h2>
        <p>
          We serve healthcare, finance, retail, and logistics industries with AI-enabled, domain-specific solutions that unlock growth and resilience.
        </p>
      </motion.div>

      <motion.div id="services" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Services</h2>
        <p>
          From consulting to full product development, we provide end-to-end technology services — cloud, AI, data engineering, app modernization, and support.
        </p>
      </motion.div>

      <motion.div id="functionalities" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Functionalities</h2>
        <p>
          Our solutions are modular and scalable — including automation workflows, analytics dashboards, enterprise integrations, and custom system design.
        </p>
      </motion.div>
    </div>
  );
}
