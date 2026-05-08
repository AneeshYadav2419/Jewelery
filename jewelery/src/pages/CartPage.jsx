import React from "react";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrash, FaPlus, FaMinus, FaShoppingBag, FaShieldAlt, FaTruck, FaUndo } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.05;
  const shipping = subtotal > 10000 ? 0 : 500;
  const total = subtotal + tax + shipping;

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
            Your Selections
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-primary"
          >
            Shopping Bag
          </motion.h1>
          <div className="w-20 h-[1px] bg-accent mx-auto mt-6"></div>
        </div>

        {cart.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 bg-white rounded-3xl shadow-luxury border border-gray-100 max-w-2xl mx-auto"
          >
            <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <FaShoppingBag size={40} className="text-gray-300" />
            </div>
            <h2 className="text-2xl font-serif text-primary mb-4">Your bag is empty</h2>
            <p className="text-gray-500 mb-10 max-w-md mx-auto">
              Before you checkout, you must add some exquisite pieces to your bag.
            </p>
            <Link to="/" className="luxury-button inline-block">
              Explore Collections
            </Link>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            
            {/* CART ITEMS */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatePresence mode="popLayout">
                {cart.map((item) => (
                  <motion.div
                    key={`${item.id}-${item.selectedSize}`}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-8 group"
                  >
                    <div className="w-full sm:w-40 aspect-square rounded-2xl overflow-hidden bg-secondary">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    
                    <div className="flex-grow flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-xl font-serif text-primary font-bold mb-1">{item.name}</h3>
                          <p className="text-xs text-accent uppercase tracking-widest font-bold">{item.category}</p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id, item.selectedSize)}
                          className="w-10 h-10 rounded-full flex items-center justify-center text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all"
                        >
                          <FaTrash size={16} />
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-6 mb-6">
                        {item.selectedSize && (
                          <div>
                            <span className="text-[10px] tracking-widest uppercase font-bold text-gray-400 block mb-1">Size</span>
                            <span className="text-sm font-bold text-primary">{item.selectedSize}</span>
                          </div>
                        )}
                        <div>
                          <span className="text-[10px] tracking-widest uppercase font-bold text-gray-400 block mb-1">Price</span>
                          <span className="text-sm font-bold text-primary">₹{item.price.toLocaleString()}</span>
                        </div>
                      </div>

                      <div className="mt-auto flex justify-between items-center">
                        <div className="flex items-center gap-4 bg-secondary rounded-2xl p-2 px-4">
                          <button 
                            onClick={() => decreaseQty(item.id, item.selectedSize)}
                            className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm hover:text-accent transition-colors"
                          >
                            <FaMinus size={12} />
                          </button>
                          <span className="font-bold text-primary w-6 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => increaseQty(item.id, item.selectedSize)}
                            className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm hover:text-accent transition-colors"
                          >
                            <FaPlus size={12} />
                          </button>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] tracking-widest uppercase font-bold text-gray-400 block mb-1">Total</span>
                          <span className="text-xl font-bold text-primary font-serif">₹{(item.price * item.quantity).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* ORDER SUMMARY */}
            <div className="lg:sticky lg:top-32 space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-luxury border border-gray-100">
                <h3 className="text-xl font-serif text-primary font-bold mb-8 pb-4 border-b border-gray-100">Order Summary</h3>
                
                <div className="space-y-4 mb-8 text-sm">
                  <div className="flex justify-between text-gray-500">
                    <span>Subtotal</span>
                    <span className="text-primary font-bold">₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Estimated Tax (5%)</span>
                    <span className="text-primary font-bold">₹{tax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? "text-green-600 font-bold" : "text-primary font-bold"}>
                      {shipping === 0 ? "FREE" : `₹${shipping.toLocaleString()}`}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-10 pt-4 border-t border-gray-100">
                  <span className="text-lg font-serif text-primary font-bold">Total Amount</span>
                  <span className="text-2xl font-serif text-accent font-bold">₹{total.toLocaleString()}</span>
                </div>

                <button className="luxury-button w-full !py-5 flex items-center justify-center gap-3 text-lg">
                  Proceed to Checkout
                </button>
                
                <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest mt-6">
                  Secure encrypted checkout
                </p>
              </div>

              {/* SERVICE BADGES */}
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white/50 p-4 rounded-2xl flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-accent shadow-sm flex-shrink-0">
                    <FaTruck size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider">Free Priority Shipping</h4>
                    <p className="text-[10px] text-gray-500">On orders above ₹10,000</p>
                  </div>
                </div>
                <div className="bg-white/50 p-4 rounded-2xl flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-accent shadow-sm flex-shrink-0">
                    <FaShieldAlt size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider">Lifetime Warranty</h4>
                    <p className="text-[10px] text-gray-500">Guaranteed quality craftsmanship</p>
                  </div>
                </div>
                <div className="bg-white/50 p-4 rounded-2xl flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-accent shadow-sm flex-shrink-0">
                    <FaUndo size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider">Easy Returns</h4>
                    <p className="text-[10px] text-gray-500">30-day complimentary returns</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default CartPage;