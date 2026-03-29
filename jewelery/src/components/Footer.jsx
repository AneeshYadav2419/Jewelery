import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
        
        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-[Playfair_Display] text-white">
            Jewellery
          </h2>
          <p className="mt-4 text-sm text-gray-400">
            Discover timeless elegance with our premium jewellery collection.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg text-white font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Shop</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* CATEGORIES */}
        <div>
          <h3 className="text-lg text-white font-semibold mb-4">
            Categories
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Rings</li>
            <li className="hover:text-white cursor-pointer">Earrings</li>
            <li className="hover:text-white cursor-pointer">Necklaces</li>
            <li className="hover:text-white cursor-pointer">Bracelets</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg text-white font-semibold mb-4">
            Contact
          </h3>
          <p className="text-sm text-gray-400">
            Email: support@jewellery.com
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Phone: +91 98765 43210
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-4">
            <FaFacebookF className="cursor-pointer hover:text-white" />
            <FaInstagram className="cursor-pointer hover:text-white" />
            <FaTwitter className="cursor-pointer hover:text-white" />
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © 2026 Jewellery. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;