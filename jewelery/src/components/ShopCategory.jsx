
import { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { categories } from "../assets/assets";

// ✅ Stagger optimized
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07, // faster + smoother
    },
  },
};

// ✅ Lightweight animation (NO lag)
const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.25,
    },
  },
};

// ✅ Memoized Category Card (BIG performance boost)
const CategoryCard = memo(({ cat }) => {
  return (
    <motion.div variants={item}>
      <Link
        to={`/category/${cat.name.toLowerCase()}`}
        className="block group"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

          {/* IMAGE */}
          <img
            src={cat.image}
            alt={cat.name}
            loading="lazy"
            decoding="async" // 🔥 faster rendering
            className="w-full h-40 object-cover transition duration-300 ease-out group-hover:scale-105 will-change-transform"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-center pb-4">
            <h3 className="text-white font-semibold text-lg tracking-wide transform translate-y-1 group-hover:translate-y-0 transition duration-200">
              {cat.name}
            </h3>
          </div>

        </div>
      </Link>
    </motion.div>
  );
});

const ShopCategory = () => {

  // ✅ prevent re-render mapping
  const memoCategories = useMemo(() => categories, []);

  return (
    <section className="py-16 px-6 md:px-20 bg-white">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-[Playfair_Display] text-center mb-12 tracking-wide">
        Shop by Category
      </h2>

      {/* GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }} // 🔥 earlier trigger
        className="grid grid-cols-2 md:grid-cols-5 gap-6"
      >
        {memoCategories.map((cat) => (
          <CategoryCard key={cat.name} cat={cat} />
        ))}
      </motion.div>

    </section>
  );
};

export default memo(ShopCategory);