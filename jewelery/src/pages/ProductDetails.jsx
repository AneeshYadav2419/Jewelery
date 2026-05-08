import React, { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { productsData } from "../assets/assets";
import { useCart } from "../context/CartContext.jsx";
import { useWishlist } from "../context/WishlistContext.jsx";
import { FaStar, FaShoppingBag, FaHeart, FaRegHeart, FaChevronLeft, FaChevronRight, FaTruck, FaShieldAlt, FaUndo } from "react-icons/fa";
import ProductCard from "../components/ProductCard";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const product = useMemo(() => productsData.find((item) => item.id === Number(id)), [id]);
  const relatedProducts = useMemo(() => 
    productsData.filter((item) => item.category === product?.category && item.id !== product?.id).slice(0, 4)
  , [product]);

  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || null);
  const [zoom, setZoom] = useState({ x: 0, y: 0, show: false });

  if (!product) return <div className="pt-32 text-center">Product not found</div>;

  const isWishlisted = isInWishlist(product.id);
  const images = product.images || [product.image];

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setZoom({ x, y, show: true });
  };

  return (
    <div className="pt-32 pb-24 bg-secondary min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* BREADCRUMBS */}
        <nav className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-400 mb-12">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <span>/</span>
          <Link to={`/category/${product.category}`} className="hover:text-accent transition-colors">{product.category}</Link>
          <span>/</span>
          <span className="text-primary font-bold">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT: IMAGE GALLERY */}
          <div className="space-y-6">
            <div 
              className="relative aspect-square rounded-3xl overflow-hidden bg-white shadow-luxury cursor-zoom-in"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setZoom({ ...zoom, show: false })}
            >
              <motion.img
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                src={images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* ZOOM OVERLAY */}
              {zoom.show && (
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: `url(${images[activeImage]})`,
                    backgroundPosition: `${zoom.x}% ${zoom.y}%`,
                    backgroundSize: '200%'
                  }}
                />
              )}

              <button 
                onClick={() => toggleWishlist(product)}
                className={`absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                  isWishlisted ? "bg-accent text-white" : "bg-white/80 backdrop-blur-md text-primary hover:bg-accent hover:text-white"
                }`}
              >
                {isWishlisted ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
              </button>
            </div>

            {/* THUMBNAILS */}
            {images.length > 1 && (
              <div className="flex gap-4">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                      activeImage === i ? "border-accent shadow-lg scale-105" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: PRODUCT INFO */}
          <div className="lg:sticky lg:top-32">
            <div className="flex items-center gap-2 mb-4 text-accent">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={14} className={i < Math.floor(product.rating) ? "fill-current" : "text-gray-200"} />
              ))}
              <span className="text-xs text-gray-400 font-sans ml-2">({product.reviews} Reviews)</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6 leading-tight">{product.name}</h1>
            
            <div className="flex items-center gap-6 mb-10">
              <span className="text-4xl font-bold text-primary">₹{product.price.toLocaleString()}</span>
              <span className="text-xl text-gray-400 line-through">₹{(product.price * 1.2).toLocaleString()}</span>
              {product.stock > 0 ? (
                <span className="text-[10px] tracking-widest uppercase font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">In Stock</span>
              ) : (
                <span className="text-[10px] tracking-widest uppercase font-bold text-red-600 bg-red-50 px-3 py-1 rounded-full">Out of Stock</span>
              )}
            </div>

            <div className="space-y-8 mb-12">
              <p className="text-gray-500 leading-relaxed font-sans text-lg">
                {product.description}
              </p>
              
              <div className="grid grid-cols-2 gap-8 py-8 border-y border-gray-100">
                <div>
                  <span className="text-[10px] tracking-widest uppercase font-bold text-gray-400 block mb-2">Material</span>
                  <p className="text-primary font-medium">{product.material}</p>
                </div>
                <div>
                  <span className="text-[10px] tracking-widest uppercase font-bold text-gray-400 block mb-2">Weight</span>
                  <p className="text-primary font-medium">{product.weight}</p>
                </div>
              </div>
            </div>

            {/* SIZE SELECTOR */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-4">Select Your Size</span>
                <div className="flex gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center transition-all duration-300 font-bold ${
                        selectedSize === size 
                          ? "bg-primary text-white border-primary shadow-xl scale-110" 
                          : "border-gray-100 text-gray-400 hover:border-accent hover:text-accent"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ACTIONS */}
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <button 
                onClick={() => addToCart({ ...product, selectedSize })}
                className="luxury-button !py-5 flex-grow flex items-center justify-center gap-4 text-lg"
              >
                <FaShoppingBag size={20} />
                Add to Bag
              </button>
            </div>

            {/* TRUST BADGES */}
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-accent shadow-sm">
                  <FaTruck size={20} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-accent shadow-sm">
                  <FaShieldAlt size={20} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Lifetime Warranty</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-accent shadow-sm">
                  <FaUndo size={20} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">30 Day Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* RELATED PRODUCTS */}
        {relatedProducts.length > 0 && (
          <div className="mt-32">
            <div className="text-center mb-16">
              <span className="text-accent tracking-[0.4em] uppercase text-xs font-bold mb-4 block">You May Also Like</span>
              <h2 className="text-4xl font-serif text-primary">Complete The Look</h2>
              <div className="w-20 h-[1px] bg-accent mx-auto mt-6"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProductDetails;