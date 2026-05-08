import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import { FaTimes, FaShoppingBag, FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

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
            className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-[100]"
          />

          {/* DRAWER */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[101] flex flex-col"
          >
            {/* HEADER */}
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-secondary">
              <div className="flex items-center gap-3">
                <FaShoppingBag className="text-accent" />
                <h2 className="text-xl font-serif text-primary font-bold">Your Bag ({cart.length})</h2>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* CONTENT */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-6">
                    <FaShoppingBag size={30} className="text-gray-300" />
                  </div>
                  <h3 className="text-xl font-serif text-primary mb-2">Your bag is empty</h3>
                  <p className="text-gray-500 mb-8">Looks like you haven't added anything to your bag yet.</p>
                  <button 
                    onClick={onClose}
                    className="luxury-button"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4 group">
                    <div className="w-24 h-32 rounded-xl overflow-hidden bg-secondary flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-serif text-primary font-medium line-clamp-1">{item.name}</h4>
                        <button 
                          onClick={() => removeFromCart(item.id, item.selectedSize)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <FaTrash size={12} />
                        </button>
                      </div>
                      <p className="text-xs text-accent uppercase tracking-widest font-bold mb-2">{item.category}</p>
                      {item.selectedSize && (
                        <p className="text-xs text-gray-500 mb-3">Size: <span className="text-primary font-medium">{item.selectedSize}</span></p>
                      )}
                      <div className="flex justify-between items-center mt-auto">
                        <div className="flex items-center gap-3 bg-secondary rounded-full px-3 py-1">
                          <button 
                            onClick={() => decreaseQty(item.id, item.selectedSize)}
                            className="text-primary hover:text-accent transition-colors"
                          >
                            <FaMinus size={10} />
                          </button>
                          <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => increaseQty(item.id, item.selectedSize)}
                            className="text-primary hover:text-accent transition-colors"
                          >
                            <FaPlus size={10} />
                          </button>
                        </div>
                        <span className="font-bold text-primary">₹{(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* FOOTER */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-secondary space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 uppercase tracking-widest text-xs font-bold">Subtotal</span>
                  <span className="text-2xl font-serif text-primary font-bold">₹{subtotal.toLocaleString()}</span>
                </div>
                <p className="text-[10px] text-gray-400 text-center uppercase tracking-wider">
                  Shipping and taxes calculated at checkout
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <Link 
                    to="/cart" 
                    onClick={onClose}
                    className="luxury-button-outline text-center py-4 !text-sm"
                  >
                    View Cart
                  </Link>
                  <Link 
                    to="/checkout" 
                    onClick={onClose}
                    className="luxury-button text-center py-4 !text-sm flex items-center justify-center gap-2"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
