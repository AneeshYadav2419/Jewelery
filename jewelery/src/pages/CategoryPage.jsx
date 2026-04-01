// import { useParams } from "react-router-dom";
// import { productsData } from "../assets/assets";

// const CategoryPage = () => {
//   const { category } = useParams();

//   const filteredProducts = productsData.filter(
//     (item) => item.category.toLowerCase() === category
//   );

//   return (
//     <div className="px-6 md:px-20 py-10">
//       <h2 className="text-3xl font-bold mb-8 capitalize">
//         {category}
//       </h2>

//       <div className="grid md:grid-cols-4 gap-6">
//         {filteredProducts.map((product) => (
//           <div key={product.id} className="shadow p-4 rounded">
//             <img src={product.image} className="h-40 w-full object-cover" />
//             <h3>{product.name}</h3>
//             <p>{product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;

import { memo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { productsData } from "../assets/assets";

// ✅ animation
const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.1 },
    },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
};

const CategoryPage = () => {
    const { category } = useParams();

    const filteredProducts = productsData.filter(
        (item) => item.category === category
    );

    return (
        <section className="px-6 md:px-20 py-12 bg-gray-50 min-h-screen">

            {/* HEADER */}
            <div className="mb-10 text-center">
                <h2 className="text-3xl md:text-5xl font-[Playfair_Display] capitalize text-gray-800">
                    {category}
                </h2>
                <p className="text-gray-500 mt-2 text-sm">
                    Discover our premium {category} collection
                </p>
            </div>

            {/* GRID */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            >

                {filteredProducts.map((product) => (
                    <motion.div key={product.id} variants={item}>

                        <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 group">

                            {/* IMAGE */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    loading="lazy"
                                    className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
                                />

                                {/* BADGE */}
                                <span className="absolute top-3 left-3 bg-yellow-600 text-white text-xs px-2 py-1 rounded-full">
                                    New
                                </span>

                                {/* QUICK VIEW */}
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                                    <Link
                                        to={`/product/${product.id}`}
                                        className="bg-white text-black px-4 py-2 rounded-full text-sm hover:bg-yellow-600 hover:text-white transition"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>

                            {/* CONTENT */}
                            <div className="p-4 text-center">

                                <h3 className="text-lg font-semibold text-gray-800">
                                    {product.name}
                                </h3>

                                {/* ⭐ RATING (fake for UI) */}
                                <div className="text-yellow-500 text-sm mt-1">
                                    ★★★★☆
                                </div>

                                {/* ✅ SHORT DESCRIPTION */}
                                <p className="text-gray-500 text-xs mt-2 line-clamp-2">
                                    {product.description}
                                </p>

                                <p className="text-yellow-600 font-bold mt-2 text-lg">
                                    ₹{product.price.toLocaleString()}
                                </p>


                                {/* BUTTON */}
                                <button className="mt-4 w-full bg-yellow-600 text-white py-2 rounded-full hover:bg-yellow-700 transition duration-300">
                                    Add to Cart
                                </button>

                            </div>

                        </div>

                    </motion.div>
                ))}

            </motion.div>

            {/* EMPTY STATE */}
            {filteredProducts.length === 0 && (
                <p className="text-center text-gray-500 mt-10">
                    No products found
                </p>
            )}

        </section>
    );
};

export default memo(CategoryPage);