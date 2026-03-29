import { useState } from "react";

const productsData = [
  { name: "Gold Ring", price: "₹12,999", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e" },
  { name: "Diamond Earrings", price: "₹18,499", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638" },
  { name: "Silver Pendant", price: "₹6,999", image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d" },
  { name: "Luxury Bracelet", price: "₹9,999", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a" },
  { name: "Gold Necklace", price: "₹25,999", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f" },
  { name: "Classic Ring", price: "₹10,499", image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d" },
  { name: "Elegant Earrings", price: "₹14,999", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638" },
  { name: "Modern Pendant", price: "₹7,999", image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d" },
  { name: "Stylish Bracelet", price: "₹11,999", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a" },
  { name: "Premium Necklace", price: "₹29,999", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f" },
];

const Products = () => {
  const [showAll, setShowAll] = useState(false);

  // show 8 or all 10
  const visibleProducts = showAll ? productsData : productsData.slice(0, 8);

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-[Playfair_Display] text-center mb-10">
        Featured Products
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
        {visibleProducts.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
          >
            
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>

              <p className="text-yellow-600 font-bold mt-2">
                {product.price}
              </p>

              <button className="mt-4 w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition">
                Add to Cart
              </button>
            </div>

          </div>
        ))}

      </div>

      {/* BUTTON */}
      <div className="text-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="border border-yellow-600 text-yellow-600 px-6 py-2 rounded-full hover:bg-yellow-600 hover:text-white transition"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>

    </section>
  );
};

export default Products;