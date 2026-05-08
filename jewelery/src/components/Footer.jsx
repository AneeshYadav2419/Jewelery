import { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* TOP SECTION: NEWSLETTER */}
        <div className="grid md:grid-cols-2 gap-12 pb-16 border-b border-white/10">
          <div>
            <h2 className="text-3xl font-serif mb-4">Join the Inner Circle</h2>
            <p className="text-white/60 font-sans max-w-md">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow bg-white/5 border border-white/10 px-6 py-3 rounded-full focus:outline-none focus:border-accent transition-colors"
            />
            <button className="luxury-button bg-accent hover:bg-accent-dark">
              Subscribe
            </button>
          </div>
        </div>

        {/* MIDDLE SECTION: LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-16">
          
          {/* BRAND */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="group flex flex-col mb-6">
              <span className="text-2xl font-serif font-bold tracking-[0.2em] group-hover:text-accent transition-colors duration-300">
                AURA
              </span>
              <span className="text-[10px] tracking-[0.5em] text-accent uppercase font-sans">
                Jewelry
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Exquisite craftsmanship and timeless designs for those who appreciate the finer things in life.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaInstagram, FaTwitter, FaPinterestP].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* SHOP */}
          <div>
            <h3 className="text-accent uppercase tracking-widest text-xs font-bold mb-6">Shop</h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/category/rings" className="hover:text-white transition-colors">Rings</Link></li>
              <li><Link to="/category/earrings" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/category/necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/category/bracelets" className="hover:text-white transition-colors">Bracelets</Link></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-accent uppercase tracking-widest text-xs font-bold mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/stores" className="hover:text-white transition-colors">Store Locator</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-accent uppercase tracking-widest text-xs font-bold mb-6">Support</h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/care" className="hover:text-white transition-colors">Jewelry Care</Link></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs tracking-wider">
            © 2026 AURA JEWELRY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-white/40 text-xs tracking-wider">
            <Link to="/privacy" className="hover:text-white transition-colors">PRIVACY POLICY</Link>
            <Link to="/terms" className="hover:text-white transition-colors">TERMS OF SERVICE</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default memo(Footer);