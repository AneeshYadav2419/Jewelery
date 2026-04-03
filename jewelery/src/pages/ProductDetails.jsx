import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { productsData } from "../assets/assets";
import { useCart } from "../context/CardContext.jsx";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = productsData.find(
    (item) => item.id === Number(id)
  );

  const [selectedSize, setSelectedSize] = useState(null);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="px-6 md:px-20 py-10 grid md:grid-cols-2 gap-10">

      {/* IMAGE */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[400px] object-cover rounded-xl"
      />

      {/* DETAILS */}
      <div>

        {/* NAME */}
        <h2 className="text-3xl font-bold">{product.name}</h2>

        {/* PRICE */}
        <p className="text-yellow-600 text-2xl mt-3">
          ₹{product.price.toLocaleString()}
        </p>

        {/* ⭐ RATING */}
        <p className="mt-2 text-gray-700">
          ⭐ {product.rating} ({product.reviews} reviews)
        </p>

        {/* MATERIAL + WEIGHT */}
        <div className="mt-4 text-gray-600 space-y-1">
          <p><strong>Material:</strong> {product.material}</p>
          <p><strong>Weight:</strong> {product.weight}</p>
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-600 mt-4">
          {product.description}
        </p>

        {/* STOCK */}
        <p className="mt-3 text-sm">
          {product.stock > 0 ? (
            <span className="text-green-600">In Stock</span>
          ) : (
            <span className="text-red-600">Out of Stock</span>
          )}
        </p>

        {/* SIZES */}
        <div className="mt-5">
          <p className="font-medium mb-2">Select Size:</p>

          <div className="flex gap-3">
            {product.sizes.map((size, index) => (
              <button
                key={index}
                onClick={() => setSelectedSize(size)}
                className={`border px-4 py-1 rounded transition ${
                  selectedSize === size
                    ? "bg-yellow-600 text-white"
                    : "hover:bg-yellow-600 hover:text-white"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* ADD TO CART */}
        <button
          onClick={() => addToCart({ ...product, selectedSize })}
          className="mt-6 bg-yellow-600 text-white px-6 py-2 rounded-full hover:bg-yellow-700 transition"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductDetails;