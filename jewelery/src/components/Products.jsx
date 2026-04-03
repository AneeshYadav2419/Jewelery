import { memo, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { productsData } from "../assets/assets";
import { useCart } from "../context/CardContext";
import { Link } from "react-router-dom";



// ✅ Container with stagger (smooth load)
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// ✅ Lightweight animation (NO spring lag)
const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.3,
    },
  },
};

// ✅ Memoized Product Card (BIG performance boost)
const ProductCard = memo(({ product }) => {
    const { addToCart } = useCart(); 
  return (
    <motion.div
      variants={item}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group"
    >
      {/* IMAGE */}
      <Link to={`/product/${product.id}`}>
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-60 object-cover transition-transform duration-300 ease-out group-hover:scale-105 will-change-transform"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">
          {product.name}
        </h3>

        <p className="text-yellow-600 font-bold mt-2">
          ₹{product.price}
        </p>

      </div>
      </Link>
    </motion.div>
  );
});

const Products = () => {
  const [showAll, setShowAll] = useState(false);

  // ✅ Prevent unnecessary recalculation
  const visibleProducts = useMemo(() => {
    return showAll ? productsData : productsData.slice(0, 8);
  }, [showAll]);

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-[Playfair_Display] text-center mb-12 tracking-wide">
        Featured Products
      </h2>

      {/* GRID */}
      <motion.div
        key={showAll ? "all" : "less"}
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >

        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>

      {/* BUTTON */}
      <div className="text-center mt-12">
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="border border-yellow-600 text-yellow-600 px-6 py-2 rounded-full hover:bg-yellow-600 hover:text-white transition duration-200"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>

    </section>
  );
};

export default memo(Products);