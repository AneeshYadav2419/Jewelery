import { memo } from "react";
import { motion } from "framer-motion";
import bannerImg from "../assets/banner.png";
import ring from "../assets/ring.png";

const BannerSection = ({ image, title, subtitle, description, reverse = false }) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24 py-20`}>
      <motion.div 
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex-1 relative group"
      >
        <div className="absolute -inset-4 border border-accent/20 rounded-2xl -z-10 group-hover:inset-0 transition-all duration-700"></div>
        <div className="overflow-hidden rounded-2xl aspect-square md:aspect-video">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="flex-1 text-center md:text-left"
      >
        <span className="text-accent tracking-[0.4em] uppercase text-xs font-bold mb-4 block">
          {subtitle}
        </span>
        <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-gray-500 text-lg mb-8 leading-relaxed">
          {description}
        </p>
        <button className="luxury-button">
          Discover More
        </button>
      </motion.div>
    </div>
  );
};

const Banner = () => {
  return (
    <section className="bg-secondary px-6 md:px-12">
      <div className="max-w-7xl mx-auto divide-y divide-gray-200">
        <BannerSection 
          image={ring}
          subtitle="Timeless Elegance"
          title="Crafted with Love, Designed for Life"
          description="Every piece in our collection is a testament to the beauty of hand-selected gemstones and meticulous craftsmanship, designed to be cherished for generations."
        />
        <BannerSection 
          image={bannerImg}
          subtitle="Modern Luxury"
          title="Adorn Yourself with Pure Brilliance"
          description="Experience the perfect fusion of contemporary design and classic luxury. Our pieces are more than jewelry; they are a celebration of your unique essence."
          reverse={true}
        />
      </div>
    </section>
  );
};

export default memo(Banner);