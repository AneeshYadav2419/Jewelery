
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = [
    "Rings",
    "Earrings",
    "Pendants",
    "Bracelets",
    "Necklaces",
  ];

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      
      <div className="flex justify-between items-center px-6 md:px-20 py-4">
        
        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold text-yellow-600">
          Jewellery
        </Link>

        {/* DESKTOP CATEGORY MENU */}
        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          {categories.map((item) => (
            <Link
              key={item}
              to={`/category/${item.toLowerCase()}`}
              className="hover:text-yellow-600 transition"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          
          <Link
            to="/login"
            className="hidden md:block border border-yellow-600 text-yellow-600 px-4 py-1 rounded hover:bg-yellow-600 hover:text-white transition"
          >
            Login
          </Link>

          {/* CART */}
          <div className="relative cursor-pointer">
            <FaShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-yellow-600 text-white text-xs px-1 rounded-full">
              0
            </span>
          </div>

          {/* MOBILE MENU ICON */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars size={20} />
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden items-center bg-white px-6 pb-4 flex flex-col gap-4 text-gray-700">
          {categories.map((item) => (
            <Link
              key={item}
              to={`/category/${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;