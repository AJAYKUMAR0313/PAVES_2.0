"use client";
import Header from '../components/header';
import { useState, useEffect, createContext } from 'react';

export const DarkModeContext = createContext();

export default function LayoutClient({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <Header />
      <main className="pt-[50px]">
        {children}
      </main>
    </DarkModeContext.Provider>
  );
} 