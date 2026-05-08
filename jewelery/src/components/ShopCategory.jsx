import { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { categories } from "../assets/assets";

const CategoryCard = memo(({ cat, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
      className="group relative overflow-hidden aspect-[3/4] rounded-2xl bg-primary"
    >
      <Link to={`/category/${cat.name.toLowerCase()}`} className="block h-full">
        <img
          src={cat.image}
          alt={cat.name}
          loading="lazy"
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent flex flex-col justify-end p-8">
          <h3 className="text-white text-2xl font-serif mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            {cat.name}
          </h3>
          <p className="text-accent text-xs tracking-[0.3em] uppercase font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            Explore Now
          </p>
        </div>
        
        {/* DECORATIVE LINE */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
      </Link>
    </motion.div>
  );
});

const ShopCategory = () => {
  const memoCategories = useMemo(() => categories, []);

  return (
    <section className="py-24 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-accent tracking-[0.4em] uppercase text-xs font-bold mb-4 block"
            >
              Collections
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-primary"
            >
              Discover Our Curated <br /> Categories
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 max-w-sm font-sans mb-2"
          >
            Each piece is selected for its unique character and exceptional quality, ensuring you find the perfect expression of your style.
          </motion.p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {memoCategories.map((cat, index) => (
            <CategoryCard key={cat.name} cat={cat} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default memo(ShopCategory);