// import { Link } from "react-router-dom";
// import { categories } from "../assets/assets";

// const ShopCategory = () => {
//   return (
//     <section className="py-16 px-6 md:px-20 bg-white">

//       {/* Heading */}
//       <h2 className="text-3xl md:text-4xl font-[Playfair_Display] text-center mb-10">
//         Shop by Category
//       </h2>

//       {/* Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

//         {categories.map((cat, index) => (
//           <Link
//             key={index}
//             to={`/category/${cat.name.toLowerCase()}`}
//             className="block transform transition duration-300 hover:-translate-y-2"
//           >
//             <div className="relative rounded-xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition duration-300">

//               {/* Image */}
//               <img
//                 src={cat.image}
//                 alt={cat.name}
//                 className="w-full h-40 object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition duration-300">
//                 <h3 className="text-white font-semibold text-lg tracking-wide">
//                   {cat.name}
//                 </h3>
//               </div>

//             </div>
//           </Link>
//         ))}

//       </div>
//     </section>
//   );
// };

// export default ShopCategory;

import { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { categories } from "../assets/assets";

// ✅ Animation variants (outside = no re-create)
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const ShopCategory = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-[Playfair_Display] text-center mb-12 tracking-wide">
        Shop by Category
      </h2>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"   // ✅ only animate when visible
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-5 gap-6"
      >

        {categories.map((cat) => (
          <motion.div key={cat.name} variants={item}>

            <Link
              to={`/category/${cat.name.toLowerCase()}`}
              className="block group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300">

                {/* Image */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy" // ✅ performance boost
                  className="w-full h-40 object-cover transition duration-500 ease-out group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-center pb-4">

                  <h3 className="text-white font-semibold text-lg tracking-wide transform translate-y-2 group-hover:translate-y-0 transition duration-300">
                    {cat.name}
                  </h3>

                </div>

              </div>
            </Link>

          </motion.div>
        ))}

      </motion.div>
    </section>
  );
};

export default memo(ShopCategory);