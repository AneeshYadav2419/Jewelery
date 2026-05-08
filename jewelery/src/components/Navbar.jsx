import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaShoppingCart, FaRegHeart, FaSearch, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { useCart } from "../context/CartContext.jsx";
import { useWishlist } from "../context/WishlistContext.jsx";
import CartDrawer from "./CartDrawer";

const CATEGORIES = ["Rings", "Earrings", "Pendants", "Bracelets", "Necklaces"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* LOGO */}
        <Link
          to="/"
          className="group flex flex-col items-center"
        >
          <span className="text-2xl md:text-3xl font-serif font-bold tracking-[0.2em] text-primary group-hover:text-accent transition-colors duration-300">
            AURA
          </span>
          <span className="text-[10px] tracking-[0.5em] text-accent uppercase font-sans">
            Jewelry
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex gap-10 items-center">
          <Link
            to="/"
            className={`text-sm tracking-widest uppercase font-medium hover:text-accent transition-colors ${
              location.pathname === "/" ? "text-accent" : "text-primary"
            }`}
          >
            Home
          </Link>
          {CATEGORIES.map((item) => {
            const path = `/category/${item.toLowerCase()}`;
            const isActive = location.pathname === path;
            return (
              <Link
                key={item}
                to={path}
                className={`text-sm tracking-widest uppercase font-medium hover:text-accent transition-colors ${
                  isActive ? "text-accent" : "text-primary"
                }`}
              >
                {item}
              </Link>
            );
          })}
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-6">
          {/* SEARCH */}
          <button 
            onClick={() => setSearchOpen(true)}
            className="text-primary hover:text-accent transition-colors duration-300"
          >
            <FaSearch size={18} />
          </button>

          {/* USER */}
          <Link to="/profile" className="hidden md:block text-primary hover:text-accent transition-colors duration-300">
            <FaUserCircle size={20} />
          </Link>

          {/* WISHLIST */}
          <Link to="/wishlist" className="relative text-primary hover:text-accent transition-colors duration-300">
            <FaRegHeart size={20} />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* CART */}
          <button 
            onClick={() => setCartOpen(true)}
            className="relative group"
          >
            <div className="p-2 rounded-full border border-primary/10 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
              <FaShoppingCart size={18} className="text-primary group-hover:text-white transition-colors" />
            </div>
            {cartCount > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 bg-primary text-white text-[10px] min-w-[18px] h-[18px] flex items-center justify-center rounded-full shadow-lg"
              >
                {cartCount}
              </motion.span>
            )}
          </button>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-primary hover:text-accent transition-colors"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6 text-center">
              <Link to="/" onClick={() => setMenuOpen(false)} className="text-lg tracking-widest uppercase hover:text-accent">Home</Link>
              {CATEGORIES.map((item) => (
                <Link
                  key={item}
                  to={`/category/${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg tracking-widest uppercase hover:text-accent"
                >
                  {item}
                </Link>
              ))}
              <div className="pt-4 flex justify-center gap-8">
                <Link to="/profile" onClick={() => setMenuOpen(false)} className="text-primary"><FaUserCircle size={24} /></Link>
                <Link to="/login" onClick={() => setMenuOpen(false)} className="text-accent font-medium border-b border-accent">Login</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SEARCH OVERLAY */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-primary/95 z-[60] flex items-center justify-center p-6"
          >
            <button 
              onClick={() => setSearchOpen(false)}
              className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors"
            >
              <FaTimes size={30} />
            </button>
            <div className="w-full max-w-3xl">
              <input 
                type="text" 
                placeholder="Search for jewelry..." 
                className="w-full bg-transparent border-b-2 border-white/20 py-4 text-3xl md:text-5xl text-white font-serif focus:outline-none focus:border-accent transition-colors placeholder:text-white/20"
                autoFocus
              />
              <p className="mt-4 text-white/40 font-sans tracking-widest uppercase text-xs">Press ESC to close</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;