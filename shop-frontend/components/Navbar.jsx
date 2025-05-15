`use client`

import { useState, useEffect } from 'react';
import { Home, ShoppingCart, ShoppingBag, LogIn, UserPlus, Moon, Sun, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', icon: <Home size={14} /> },
  { label: 'Shop', icon: <ShoppingBag size={14} /> },
  { label: 'Cart', icon: <ShoppingCart size={14} /> },
];

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [darkMode, setDarkMode] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
    if (prefersDark) document.documentElement.classList.add('dark');
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  };

  return (
    <>
      {/* Desktop Top Nav */}
      <nav className="hidden md:flex justify-between items-center px-6 py-2 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
        <h1 className="text-lg font-bold text-gray-800 dark:text-white flex items-center gap-2">
          📱 LucaTech
        </h1>
        <ul className="flex space-x-4 text-gray-600 dark:text-gray-300 font-medium items-center">
          {navLinks.map(({ label, icon }) => (
            <li
              key={label}
              onClick={() => setActive(label)}
              className="relative cursor-pointer px-2 py-[6px] rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition flex items-center gap-1 text-sm"
              aria-current={active === label ? 'page' : undefined}
            >
              {icon}
              <span>{label}</span>
              {active === label && (
                <motion.div
                  layoutId="underline"
                  className="absolute inset-0 bg-gray-300 dark:bg-gray-600 rounded-md -z-10"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </li>
          ))}

          {/* Login button */}
          <button
            onClick={() => alert('Login clicked')}
            className="bg-gray-300 text-gray-800 rounded-md px-3 py-[6px] font-semibold hover:bg-gray-400 transition flex items-center gap-1 text-sm"
            aria-label="Login"
          >
            <LogIn size={14} />
            Login
          </button>

          {/* Register button */}
          <button
            onClick={() => alert('Register clicked')}
            className="bg-black text-white rounded-md px-3 py-[6px] font-semibold hover:opacity-90 transition flex items-center gap-1 text-sm"
            aria-label="Register"
          >
            <UserPlus size={14} />
            Register
          </button>

          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:opacity-80 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </ul>
      </nav>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 z-50">
        <ul className="flex justify-around items-center py-2 text-xs text-gray-700 dark:text-gray-300">
          {navLinks.map(({ label, icon }) => (
            <li
              key={label}
              onClick={() => setActive(label)}
              className={`flex flex-col items-center cursor-pointer relative select-none ${
                active === label
                  ? 'text-black dark:text-white'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
              aria-current={active === label ? 'page' : undefined}
            >
              {icon}
              <span className="mt-1">{label}</span>
              {active === label && (
                <motion.div
                  layoutId="underline-mobile"
                  className="absolute top-full mt-1 w-6 h-1 bg-gray-700 rounded"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </li>
          ))}

          {/* Account drawer toggle */}
          <li
            onClick={() => setDrawerOpen(true)}
            className="flex flex-col items-center cursor-pointer text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white select-none"
            aria-label="Open Account Drawer"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setDrawerOpen(true);
            }}
          >
            <UserPlus size={20} />
            <span className="mt-1 text-[10px]">Account</span>
          </li>

          {/* Dark mode toggle */}
          <li>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </li>
        </ul>
      </nav>

      {/* Bottom Drawer for Login/Register - MOBILE ONLY */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg rounded-t-xl p-6 z-[60] md:hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="drawer-title"
          >
            <button
              onClick={() => setDrawerOpen(false)}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300"
              aria-label="Close Account Drawer"
            >
              <X size={24} />
            </button>
            <h2
              id="drawer-title"
              className="text-lg font-bold mb-4 text-gray-900 dark:text-white"
            >
              Account Actions
            </h2>
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  setDrawerOpen(false);
                  alert('Login clicked');
                }}
                className="w-full bg-gray-300 text-gray-800 rounded-md py-2 font-semibold hover:bg-gray-400 transition flex items-center justify-center gap-2 text-sm"
                aria-label="Login"
              >
                <LogIn size={16} />
                Login
              </button>
              <button
                onClick={() => {
                  setDrawerOpen(false);
                  alert('Register clicked');
                }}
                className="w-full bg-black text-white rounded-md py-2 font-semibold hover:opacity-90 transition flex items-center justify-center gap-2 text-sm"
                aria-label="Register"
              >
                <UserPlus size={16} />
                Register
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
