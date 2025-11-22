"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

const Home: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "FULLSTACK DEVELOPER & GRAPHIC DESIGNER";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative flex lg:flex-row flex-col justify-center h-screen items-center bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-green-500/10 animate-pulse"></div>
      
      {/* Floating particles effect */}
      {typeof window !== "undefined" && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-green-500/30 rounded-full"
              initial={{
                x: Math.random() * (window.innerWidth || 1920),
                y: Math.random() * (window.innerHeight || 1080),
                opacity: 0,
              }}
              animate={{
                y: [null, Math.random() * (window.innerHeight || 1080)],
                x: [null, Math.random() * (window.innerWidth || 1920)],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}

      <motion.div
        className="relative z-10 text-5xl lg:w-1/2 w-full flex flex-col text-center justify-center lg:pt-0 pt-10 px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-green-500 font-bold lg:text-6xl text-5xl mb-4 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          DZAKIYYA PUTERI AULIA
        </motion.h1>
        
        <div className="min-h-[60px] flex items-center justify-center">
          <motion.h2
            className="text-white font-semibold lg:text-xl text-lg tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {displayText}
            {isTyping && (
              <motion.span
                className="inline-block w-0.5 h-6 bg-green-500 ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            )}
          </motion.h2>
        </div>

        <motion.p
          className="text-gray-400 mt-6 lg:text-lg text-base max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Passionate developer and designer creating beautiful, functional digital experiences
        </motion.p>

        <motion.button
          onClick={scrollToAbout}
          className="mt-12 text-green-500 hover:text-green-400 transition-colors animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <FiArrowDown className="w-8 h-8 mx-auto" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;