"use client";
import React from "react";
import { motion } from "framer-motion";
import TryForFree from "./TryForFree";

const Hero = () => {
  // animations
  const parentVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        staggerChildren: 0.4,
        when: "beforeChildren",
      },
    },
  };

  const childrenVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      className="hero-wrapper"
      variants={parentVariant}
      initial="hidden"
      animate="visible"
    >
      <div className="hero-overlay"></div>
      <div className="hero">
        <div className="hero-details">
          <motion.h1
            className="hero-details--heading"
            variants={childrenVariant}
          >
            Academic Weapon Szn!
          </motion.h1>
          <motion.p className="hero-details--desc" variants={childrenVariant}>
            Sara Ziaja's very own pomodoro.
          </motion.p>
  
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
