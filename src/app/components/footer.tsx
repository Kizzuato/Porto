"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 sticky z-10 top-0 h-16">
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex h-16 items-center justify-center align-middle">
          <p className="text-sm text-center">
            Copyright © 2024 Dzakiyya Puteri Aulia. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
