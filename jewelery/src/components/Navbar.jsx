

import { Link, useLocation } from "react-router-dom";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { useState } from "react";
import { useCart } from "../context/CardContext.jsx";


const CATEGORIES = ["Rings", "Earrings", "Pendants", "Bracelets", "Necklaces"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { cart } = useCart();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-sm border-b">

      <div className="flex justify-between items-center px-6 md:px-20 py-4">

        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-bold text-yellow-600 tracking-wide hover:scale-105 transition"
        >
          Jewellery
        </Link>
        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link
            to="/"
            className={`relative group transition ${location.pathname === "/" ? "text-yellow-600" : ""
              }`}
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          {CATEGORIES.map((item) => {
            const path = `/category/${item.toLowerCase()}`;
            const isActive = location.pathname === path;

            return (
              <Link
                key={item}
                to={path}
                className={`relative group transition ${isActive ? "text-yellow-600" : ""
                  }`}
              >
                {item}

                {/* UNDERLINE ANIMATION */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            );
          })}
        </div>

        {/* RIGHT SIDE */}
   <div className="flex items-center gap-5">

  {/* LOGIN */}
  <Link
    to="/login"
    className="hidden md:block border border-yellow-600 text-yellow-600 px-4 py-1.5 rounded-full hover:bg-yellow-600 hover:text-white transition duration-300"
  >
    Login
  </Link>

  {/* CART */}
  <Link to="/cart" className="relative group">
    <div className="p-2 rounded-full bg-gray-100 hover:bg-yellow-100 transition duration-300 shadow-sm group-hover:shadow-md">
      <FaShoppingCart size={20} className="text-gray-700 group-hover:text-yellow-600" />
    </div>

    {cart.length > 0 && (
      <span className="absolute -top-1 -right-1 bg-yellow-600 text-white text-[10px] min-w-[18px] h-[18px] flex items-center justify-center rounded-full shadow">
        {cart.length}
      </span>
    )}
  </Link>

  {/* MOBILE MENU */}
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="md:hidden hover:scale-110 transition"
  >
    <FaBars size={20} />
  </button>

</div>
      </div>

      {/* MOBILE MENU (ANIMATED) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-white px-6 pb-4 flex flex-col gap-4 text-gray-700 shadow-md">

          {CATEGORIES.map((item) => (
            <Link
              key={item}
              to={`/category/${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-600 transition"
            >
              {item}
            </Link>
          ))}

          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="border border-yellow-600 text-yellow-600 px-4 py-1 rounded text-center hover:bg-yellow-600 hover:text-white transition"
          >
            Login
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;