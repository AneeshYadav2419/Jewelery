import { motion, AnimatePresence } from "framer-motion";
import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

const WishlistPage = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-secondary min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-accent tracking-[0.4em] uppercase text-xs font-bold mb-4 block"
          >
            Your Curated Favorites
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-primary"
          >
            My Wishlist
          </motion.h1>
          <div className="w-20 h-[1px] bg-accent mx-auto mt-6"></div>
        </div>

        {/* CONTENT */}
        {wishlist.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white rounded-3xl shadow-luxury border border-gray-100"
          >
            <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <FaRegHeart size={40} className="text-accent" />
            </div>
            <h2 className="text-2xl font-serif text-primary mb-4">Your wishlist is empty</h2>
            <p className="text-gray-500 mb-10 max-w-md mx-auto">
              Add your favorite pieces to your wishlist and we'll keep them safe for you.
            </p>
            <Link to="/" className="luxury-button inline-block">
              Start Shopping
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
            <AnimatePresence>
              {wishlist.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </AnimatePresence>
          </div>
        )}

      </div>
    </div>
  );
};

export default WishlistPage;
