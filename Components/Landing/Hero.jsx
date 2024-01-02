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
            Calm Your Mind, Boost Your Flow
          </motion.h1>
          <motion.p className="hero-details--desc" variants={childrenVariant}>
            Step into a serene forest, where raindrops gently dance upon leaves.
            Now create your own calming mix of rain and birdsong. MindMelo helps
            you design your perfect focus zone, where nature's tranquility fuels
            your productivity journey.
          </motion.p>
          <div className="hero-btns-grp">
            <TryForFree childrenVariant={childrenVariant} />
            <motion.a
              variants={childrenVariant}
              href="https://www.producthunt.com/posts/mindmelo?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-mindmelo"
              target="_blank"
            >
              <img
                className="product-hunt--btn"
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=412366&theme=light"
                alt="MindMelo - Create&#0032;you&#0032;peaceful&#0032;zone | Product Hunt"
              />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
