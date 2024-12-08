'use client'

import { navbarItems, NavbarItem } from "../data/navbarItem";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const Footer: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const bounceVariants = {
    open: {
      opacity: 1,
      y: '0%',
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    },
    closed: {
      opacity: 0,
      y: '-100%',
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 20,
      }
    },
  };

  return (
    <>
      <nav className=" bg-gray-800 sticky z-10 top-0 h-16">
        <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8 xl:px-10 sticky top-0">
          <div className="flex h-16 items-center justify-center sticky top-0 align-middle">
            {/* <h1 className="text-white font-bold left-0 inset-y-0">
              KIZZUATO <a className="text-green-500 font-bold">.</a>
            </h1> */}

            <p className="text-sm">
            Copyright © 2024 Dzakiyya Puteri Aulia. All rights reserved
            </p>

            {/* desktop mode */}
            {/* <div className="text-white lg:flex justify-center space-x-5 hidden"> */}
              {/* item sect */}
              {/* {navbarItems.map((item: NavbarItem) => (
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
            </div> */}
            {/* mobile mode */}
          </div>
        </div>
      </nav>

      {/* sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-gray-700 text-white lg:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={bounceVariants}
            transition={{ duration: 0.3 }}
          >
            {/* Sidebar items */}
            <div className="flex flex-col space-y-4 p-6">
              {navbarItems.map((item: NavbarItem) => (
                <a key={item.title} href={item.href}>
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

export default Footer;
