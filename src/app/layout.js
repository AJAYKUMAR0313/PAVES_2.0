// src/app/layout.js
import './globals.css';
import { metadata } from './layout-metadata';
import LayoutClient from './layout-client';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export { metadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="transition-colors duration-300 bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <LayoutClient>{children}</LayoutClient>
        <Footer />
      </body>
    </html>
  );
}
