import { memo, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { productsData } from "../assets/assets";
import ProductCard from "../components/ProductCard";
import { FaFilter, FaSortAmountDown } from "react-icons/fa";

const CategoryPage = () => {
  const { category } = useParams();
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState(50000);
  const [selectedMaterial, setSelectedMaterial] = useState("All");

  const filteredAndSortedProducts = useMemo(() => {
    let result = productsData.filter((item) => item.category === category);

    // Filter by price
    result = result.filter((item) => item.price <= priceRange);

    // Filter by material
    if (selectedMaterial !== "All") {
      result = result.filter((item) => item.material === selectedMaterial);
    }

    // Sort
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [category, sortBy, priceRange, selectedMaterial]);

  const materials = ["All", ...new Set(productsData.filter(p => p.category === category).map(p => p.material))];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-secondary min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* HERO HEADER */}
        <div className="relative rounded-3xl overflow-hidden bg-primary p-12 md:p-20 mb-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 opacity-30"></div>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10 text-accent tracking-[0.4em] uppercase text-xs font-bold mb-4 block"
          >
            Exclusive Collection
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 text-4xl md:text-7xl font-serif text-white capitalize mb-4"
          >
            {category}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative z-10 text-white/60 font-sans max-w-md mx-auto"
          >
            Experience the pinnacle of luxury with our hand-selected {category} collection.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* FILTERS SIDEBAR */}
          <aside className="w-full lg:w-64 space-y-10">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <FaFilter className="text-accent" size={14} />
                <h3 className="text-sm uppercase tracking-widest font-bold text-primary">Filters</h3>
              </div>
              
              {/* PRICE FILTER */}
              <div className="mb-10">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Price Range</span>
                  <span className="text-xs font-bold text-accent">₹{priceRange.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="5000" 
                  max="50000" 
                  step="1000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-accent h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* MATERIAL FILTER */}
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-4">Material</span>
                <div className="flex flex-wrap gap-2">
                  {materials.map((m) => (
                    <button
                      key={m}
                      onClick={() => setSelectedMaterial(m)}
                      className={`px-4 py-2 rounded-full text-xs font-medium border transition-all duration-300 ${
                        selectedMaterial === m 
                          ? "bg-primary text-white border-primary shadow-md" 
                          : "border-gray-200 text-gray-500 hover:border-accent hover:text-accent"
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* SORTING */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <FaSortAmountDown className="text-accent" size={14} />
                <h3 className="text-sm uppercase tracking-widest font-bold text-primary">Sort By</h3>
              </div>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors cursor-pointer appearance-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </aside>

          {/* PRODUCT GRID */}
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-8">
              <p className="text-gray-500 text-sm">Showing <span className="text-primary font-bold">{filteredAndSortedProducts.length}</span> products</p>
            </div>

            <AnimatePresence mode="popLayout">
              {filteredAndSortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                  {filteredAndSortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200"
                >
                  <p className="text-gray-500">No products match your selected filters.</p>
                  <button 
                    onClick={() => {
                      setPriceRange(50000);
                      setSelectedMaterial("All");
                    }}
                    className="text-accent font-bold mt-4 underline"
                  >
                    Clear all filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
};

export default memo(CategoryPage);