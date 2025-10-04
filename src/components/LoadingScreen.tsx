"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Only show on first visit
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      setShow(true);
      sessionStorage.setItem("hasVisited", "true");

      // Smooth progress animation
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + 3;
        });
      }, 30);

      const timer = setTimeout(() => {
        setShow(false);
      }, 2200);

      return () => {
        clearTimeout(timer);
        clearInterval(progressInterval);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-base-100 z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Logo Circle with Initials */}
          <motion.div
            className="relative w-24 h-24 mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <span className="text-3xl font-bold text-primary-content">
                JT
              </span>
            </div>
          </motion.div>

          {/* Name with fade in */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-primary mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Jaime Nicolas Tolentino
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-base md:text-lg text-base-content opacity-70 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Frontend Developer
          </motion.p>

          {/* Progress Bar */}
          <div className="w-48 h-1 bg-base-300 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
