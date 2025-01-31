"use client";

import { navbarItems, NavbarItem } from "../data/navbarItems";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <>
      <nav className=" bg-gray-800 sticky z-10 top-0 h-16">
        <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8 xl:px-10 sticky top-0">
          <div className="flex h-16 items-center justify-center sticky top-0 align-middle">
            <p className="text-sm text-center">
              Copyright © 2024 Dzakiyya Puteri Aulia. All rights reserved
            </p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Footer;
