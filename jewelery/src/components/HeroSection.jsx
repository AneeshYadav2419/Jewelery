

import { memo } from "react";
import { motion } from "framer-motion";
import heroSection from "../assets/heroSection.png";

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full flex items-center overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <img
        src={heroSection}
        alt="Jewellery Hero"
        className="absolute inset-0 w-full h-full object-cover scale-105"
        loading="eager"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      {/* CONTENT */}
      <div className="relative z-10 px-6 md:px-20 max-w-2xl text-white">
        
        {/* HEADING ANIMATION */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-[Playfair_Display] text-4xl md:text-6xl leading-tight tracking-wide"
        >
          Unveiling the Beauty <br />
          <span className="text-yellow-500">of Fine Jewelry</span>
        </motion.h1>

        {/* TEXT ANIMATION */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-[Poppins] text-gray-200 mt-4 text-sm md:text-base max-w-md"
        >
          Handpicked gemstones and intricate designs for a lifetime of luxury.
        </motion.p>

        {/* BUTTON ANIMATION */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition duration-300"
        >
          SHOP NOW →
        </motion.button>

      </div>

      {/* FLOATING TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="hidden md:block absolute bottom-10 right-20 text-white/60 text-sm"
      >
        New Collection 2026 ✨
      </motion.div>

    </section>
  );
};

export default memo(Hero);