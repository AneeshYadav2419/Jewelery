// import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300 mt-20">
      
//       <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
        
//         {/* BRAND */}
//         <div>
//           <h2 className="text-2xl font-[Playfair_Display] text-white">
//             Jewellery
//           </h2>
//           <p className="mt-4 text-sm text-gray-400">
//             Discover timeless elegance with our premium jewellery collection.
//           </p>
//         </div>

//         {/* QUICK LINKS */}
//         <div>
//           <h3 className="text-lg text-white font-semibold mb-4">
//             Quick Links
//           </h3>
//           <ul className="space-y-2 text-sm">
//             <li className="hover:text-white cursor-pointer">Home</li>
//             <li className="hover:text-white cursor-pointer">Shop</li>
//             <li className="hover:text-white cursor-pointer">Contact</li>
//           </ul>
//         </div>

//         {/* CATEGORIES */}
//         <div>
//           <h3 className="text-lg text-white font-semibold mb-4">
//             Categories
//           </h3>
//           <ul className="space-y-2 text-sm">
//             <li className="hover:text-white cursor-pointer">Rings</li>
//             <li className="hover:text-white cursor-pointer">Earrings</li>
//             <li className="hover:text-white cursor-pointer">Necklaces</li>
//             <li className="hover:text-white cursor-pointer">Bracelets</li>
//           </ul>
//         </div>

//         {/* CONTACT */}
//         <div>
//           <h3 className="text-lg text-white font-semibold mb-4">
//             Contact
//           </h3>
//           <p className="text-sm text-gray-400">
//             Email: support@jewellery.com
//           </p>
//           <p className="text-sm text-gray-400 mt-2">
//             Phone: +91 98765 43210
//           </p>

//           {/* SOCIAL */}
//           <div className="flex gap-4 mt-4">
//             <FaFacebookF className="cursor-pointer hover:text-white" />
//             <FaInstagram className="cursor-pointer hover:text-white" />
//             <FaTwitter className="cursor-pointer hover:text-white" />
//           </div>
//         </div>

//       </div>

//       {/* BOTTOM */}
//       <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
//         © 2026 Jewellery. All rights reserved.
//       </div>

//     </footer>
//   );
// };

// export default Footer;

import { memo } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

// ✅ animation variants (outside = performance)
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10"
      >
        
        {/* BRAND */}
        <motion.div variants={item}>
          <h2 className="text-2xl font-[Playfair_Display] text-white tracking-wide">
            Jewellery
          </h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Discover timeless elegance with our premium jewellery collection.
          </p>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div variants={item}>
          <h3 className="text-lg text-white font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {["Home", "Shop", "Contact"].map((link) => (
              <li
                key={link}
                className="cursor-pointer relative w-fit hover:text-white transition"
              >
                {link}
                {/* underline animation */}
                <span className="block h-[1px] bg-white w-0 group-hover:w-full transition-all"></span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CATEGORIES */}
        <motion.div variants={item}>
          <h3 className="text-lg text-white font-semibold mb-4">
            Categories
          </h3>
          <ul className="space-y-2 text-sm">
            {["Rings", "Earrings", "Necklaces", "Bracelets"].map((cat) => (
              <li
                key={cat}
                className="cursor-pointer hover:text-white transition"
              >
                {cat}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CONTACT */}
        <motion.div variants={item}>
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
          <div className="flex gap-4 mt-5">
            
            {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 border border-gray-600 rounded-full cursor-pointer hover:bg-white hover:text-black transition"
              >
                <Icon size={14} />
              </motion.div>
            ))}

          </div>
        </motion.div>

      </motion.div>

      {/* BOTTOM */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © 2026 Jewellery. All rights reserved.
      </div>

    </footer>
  );
};

export default memo(Footer);