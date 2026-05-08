import { memo, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { productsData } from "../assets/assets";
import ProductCard from "./ProductCard";

const Products = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = useMemo(() => {
    return showAll ? productsData : productsData.slice(0, 8);
  }, [showAll]);

  return (
    <section className="py-24 px-6 md:px-12 bg-secondary">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADING */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent tracking-[0.4em] uppercase text-xs font-bold mb-4 block"
          >
            Curated For You
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-primary"
          >
            Exquisite New Arrivals
          </motion.h2>
          <div className="w-20 h-[1px] bg-accent mx-auto mt-6"></div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
          <AnimatePresence mode="popLayout">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </div>

        {/* VIEW ALL BUTTON */}
        <div className="text-center mt-16">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="luxury-button-outline"
          >
            {showAll ? "Show Less" : "Explore All Products"}
          </button>
        </div>

      </div>
    </section>
  );
};

export default memo(Products);