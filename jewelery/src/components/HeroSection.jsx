import { memo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroSection from "../assets/heroSection.png";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-primary"
    >
      
      {/* PARALLAX BACKGROUND IMAGE */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src={heroSection}
          alt="Luxury Jewelry Collection"
          className="w-full h-full object-cover opacity-60"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary"></div>
      </motion.div>

      {/* CENTRAL CONTENT */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-accent tracking-[0.5em] uppercase text-xs md:text-sm font-medium mb-6 block"
        >
          Exquisite Craftsmanship Since 1995
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
          className="text-white text-5xl md:text-8xl font-serif mb-8 leading-tight"
        >
          Elevate Your <br />
          <span className="italic text-gold-light">Inner Brilliance</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-white/70 font-sans text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Discover a world of timeless elegance where every piece tells a story of luxury, passion, and perfection.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <button className="luxury-button">
            Explore Collection
          </button>
          <button className="luxury-button-outline !border-white !text-white hover:!bg-white hover:!text-primary">
            Our Story
          </button>
        </motion.div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
        <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
      </motion.div>

    </section>
  );
};

export default memo(Hero);