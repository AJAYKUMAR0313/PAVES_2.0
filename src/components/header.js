// src/components/Header.js
"use client";
import './header.css';
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DarkModeContext } from '../app/layout-client';

const navLinks = [
  {
    title: "What We Do",
    items: [
      { label: "Industry Verticals", href: "/what-we-do/industry-verticals" },
      { label: "Services", href: "/what-we-do/services" },
      { label: "Functionalities", href: "/what-we-do/functionalities" },
    ],
  },
  {
    title: "Who We Are",
    items: [
      { label: "About", href: "/who-we-are/about" },
      { label: "Technology Council", href: "/who-we-are/technology-council" },
    ],
  },
  {
    title: "Insights",
    items: [
      { label: "AI Labs", href: "/insights/ai-labs" },
      { label: "Thought Leadership", href: "/insights/thought-leadership" },
    ],
  },
];

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const navigateHome = () => router.push("/");

  return (
    <motion.header
      className="backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-lg sticky top-0 z-50 transition-colors duration-300"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3">
        {/* Logo */}
        <motion.div
          onClick={navigateHome}
          className="cursor-pointer flex items-center gap-2"
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image src="/assets/logo.jpg" alt="Logo" width={48} height={48} className="rounded-full" />
          <span className="font-bold text-xl text-blue-700 dark:text-blue-400 tracking-tight">Paves</span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 font-medium items-center">
          {navLinks.map((nav) => (
            <Dropdown key={nav.title} title={nav.title} items={nav.items} />
          ))}
          <Link href="/careers" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Careers</Link>
          <Link href="/search" className="ml-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-xl">🔍</Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-300 text-xl"
            aria-label="Toggle dark mode"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-300 text-xl"
            aria-label="Toggle dark mode"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl focus:outline-none" aria-label="Open menu">
            {menuOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 shadow-lg px-4 py-4 overflow-hidden"
          >
            <MobileMenu setMenuOpen={setMenuOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function Dropdown({ title, items }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative flex items-center h-full"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      tabIndex={0}
    >
      <div className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 h-full flex items-center px-4 rounded">
        {title}
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute left-1/2 -translate-x-1/2 top-full bg-white dark:bg-gray-800 border dark:border-gray-700 shadow-lg py-2 min-w-[200px] max-w-xs w-max z-20 rounded-lg break-words whitespace-normal overflow-visible"
        >
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300 transition duration-300 rounded break-words whitespace-normal text-ellipsis overflow-visible"
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
}

function MobileMenu({ setMenuOpen }) {
  return (
    <div className="flex flex-col gap-4">
      {navLinks.map((section) => (
        <div key={section.title}>
          <strong className="block mb-1 text-blue-700 dark:text-blue-400">{section.title}</strong>
          <ul className="ml-4">
            {section.items.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block py-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <Link href="/careers" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300" onClick={() => setMenuOpen(false)}>
        Careers
      </Link>
      <Link href="/search" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300" onClick={() => setMenuOpen(false)}>
        Search
      </Link>
    </div>
  );
}
