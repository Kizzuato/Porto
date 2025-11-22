'use client'

import { navbarItems, NavbarItem } from "../data/navbarItems";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const Nav: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const bounceVariants = {
    open: {
      opacity: 1,
      y: '0%',
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        restDelta: 2
      }
    },
    closed: {
      opacity: 0,
      y: '-100%',
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 90,
      }
    },
  };

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <nav className="bg-gray-800 z-10 h-16 sticky top-0">
        <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex h-16 items-center justify-between align-middle">
            <h1 className="text-white font-bold left-0 inset-y-0 flex gap-1">
              KIZZUATO <p className="text-green-500 font-bold">.</p>
            </h1>

            {/* desktop mode */}
            <div className="lg:flex justify-center space-x-5 hidden">
              {/* item sect */}
              {navbarItems.map((item: NavbarItem) => (
                <div key={item.title} className="w-auto group/navbarIa">
                  <a
                    href={item.href}
                    className="hover:text-green-500 rounded-lg p-2"
                  >
                    {item.title}
                  </a>
                  <div className="w-full h-0.5 bg-green-500 scale-x-0 group-hover/navbarIa:scale-x-100 transition-transform"></div>
                </div>
              ))}
            </div>
            {/* mobile mode */}

            {/* Burger menu untuk mobile */}
            <div className="lg:hidden flex items-center">
              <button
                className="text-green-500 focus:outline-none"
                onClick={toggleSidebar}
                aria-label="Toggle menu"
              >
                {/* Icon burger */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="absolute top-15 left-0 w-full bg-gray-700 lg:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={bounceVariants}
            transition={{ duration: 0.3 }}
          >
            {/* Sidebar items */}
            <div className="flex flex-col space-y-4 p-6">
              {navbarItems.map((item: NavbarItem) => (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={closeSidebar}
                  className="text-white hover:text-green-500 transition-colors"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
