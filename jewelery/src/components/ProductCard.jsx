import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaRegHeart, FaHeart, FaEye, FaShoppingBag } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import QuickView from "./QuickView";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [quickViewOpen, setQuickViewOpen] = useState(false);

  const isWishlisted = isInWishlist(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white shadow-luxury hover:shadow-luxury-hover transition-all duration-500">
        {/* IMAGE */}
        <Link to={`/product/${product.id}`} className="block h-full">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </Link>

        {/* OVERLAY ACTIONS */}
        <div className="absolute top-4 right-4 flex flex-col gap-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
          <button
            onClick={() => toggleWishlist(product)}
            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 ${
              isWishlisted ? "bg-accent text-white" : "bg-white text-primary hover:bg-accent hover:text-white"
            }`}
          >
            {isWishlisted ? <FaHeart size={16} /> : <FaRegHeart size={16} />}
          </button>
          <button 
            onClick={() => setQuickViewOpen(true)}
            className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center shadow-lg hover:bg-accent hover:text-white transition-colors duration-300"
          >
            <FaEye size={16} />
          </button>
        </div>

        {/* ADD TO CART OVERLAY */}
        <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/60 to-transparent">
          <button 
            onClick={() => addToCart(product)}
            className="w-full bg-white text-primary py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-accent hover:text-white transition-colors"
          >
            <FaShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
        
        {/* BADGE */}
        {product.featured && (
          <span className="absolute top-4 left-4 bg-accent text-white text-[10px] tracking-widest uppercase px-3 py-1 rounded-full font-bold">
            Featured
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="mt-6 text-center">
        <p className="text-[10px] tracking-[0.2em] text-accent uppercase font-bold mb-1">
          {product.category}
        </p>
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-serif text-primary hover:text-accent transition-colors duration-300 line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <div className="mt-2 flex items-center justify-center gap-2">
          <span className="text-primary font-bold">₹{product.price.toLocaleString()}</span>
          <span className="text-gray-400 text-sm line-through">₹{(product.price * 1.2).toLocaleString()}</span>
        </div>
      </div>

      <QuickView 
        product={product} 
        isOpen={quickViewOpen} 
        onClose={() => setQuickViewOpen(false)} 
      />
    </motion.div>
  );
};

export default memo(ProductCard);
