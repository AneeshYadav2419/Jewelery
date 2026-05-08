import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaStar, FaShoppingBag, FaHeart, FaRegHeart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useState } from "react";

const QuickView = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || null);

  if (!product) return null;

  const isWishlisted = isInWishlist(product.id);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* OVERLAY */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-primary/60 backdrop-blur-md z-[200]"
          />

          {/* MODAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl z-[201] overflow-hidden flex flex-col md:flex-row"
          >
            {/* CLOSE BUTTON */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center z-10 hover:bg-accent hover:text-white transition-all"
            >
              <FaTimes size={18} />
            </button>

            {/* IMAGE SECTION */}
            <div className="w-full md:w-1/2 h-64 md:h-auto bg-secondary relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 flex flex-col gap-3">
                <span className="bg-accent text-white text-[10px] tracking-[0.2em] uppercase px-4 py-1.5 rounded-full font-bold shadow-lg">
                  {product.category}
                </span>
              </div>
            </div>

            {/* DETAILS SECTION */}
            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
              <div className="flex items-center gap-2 mb-4 text-accent">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={12} className={i < Math.floor(product.rating) ? "fill-current" : "text-gray-200"} />
                ))}
                <span className="text-xs text-gray-400 font-sans ml-2">({product.reviews} Reviews)</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4 leading-tight">{product.name}</h2>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-bold text-primary">₹{product.price.toLocaleString()}</span>
                <span className="text-lg text-gray-400 line-through">₹{(product.price * 1.2).toLocaleString()}</span>
              </div>

              <p className="text-gray-500 mb-8 leading-relaxed font-sans">
                {product.description}
              </p>

              {/* SIZES */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-4">Select Size</span>
                  <div className="flex gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 font-medium ${
                          selectedSize === size 
                            ? "bg-primary text-white border-primary shadow-lg" 
                            : "border-gray-200 hover:border-accent text-gray-500"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ACTIONS */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
                <button 
                  onClick={() => {
                    addToCart({ ...product, selectedSize });
                    onClose();
                  }}
                  className="luxury-button flex-grow flex items-center justify-center gap-3"
                >
                  <FaShoppingBag size={16} />
                  Add to Bag
                </button>
                <button 
                  onClick={() => toggleWishlist(product)}
                  className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    isWishlisted 
                      ? "bg-accent text-white border-accent" 
                      : "border-gray-200 text-primary hover:border-accent hover:text-accent"
                  }`}
                >
                  {isWishlisted ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default QuickView;
