// import React from "react";
// import { useCart } from "../context/CardContext";

// const CartPage = () => {
//   const { cart } = useCart();

//   // ✅ CALCULATE TOTAL
//   const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
//   const tax = subtotal * 0.05; // 5% tax (example)
//   const total = subtotal + tax;

//   return (
//     <div className="px-6 md:px-20 py-10 grid md:grid-cols-3 gap-10">

//       {/* LEFT SIDE - PRODUCTS */}
//       <div className="md:col-span-2 space-y-6">

//         <h2 className="text-3xl font-bold mb-4">Your Cart</h2>

//         {cart.length === 0 ? (
//           <div className="text-gray-500 text-lg">
//             Cart is empty 🛒
//           </div>
//         ) : (
//           cart.map((item, index) => (
//             <div
//               key={index}
//               className="flex gap-6 border rounded-xl p-5 shadow-sm hover:shadow-md transition"
//             >

//               {/* IMAGE */}
//               <img
//                 src={item.image}
//                 className="w-32 h-32 object-cover rounded-lg"
//               />

//               {/* DETAILS */}
//               <div className="flex flex-col justify-between">

//                 <div>
//                   <h3 className="text-lg font-semibold">{item.name}</h3>
//                   <p className="text-gray-500 text-sm">
//                     {item.description}
//                   </p>

//                   <p className="text-yellow-600 font-semibold mt-2">
//                     ₹{item.price.toLocaleString()}
//                   </p>

//                   <p className="text-sm text-gray-600">
//                     Size: {item.selectedSize || "N/A"}
//                   </p>
//                 </div>

//                 <div className="flex gap-3 mt-3">

//                   <button className="text-red-500 border border-red-500 px-3 py-1 rounded-full hover:bg-red-500 hover:text-white transition">
//                     Remove
//                   </button>

//                   <button className="bg-yellow-600 text-white px-4 py-1 rounded-full hover:bg-yellow-700 transition">
//                     Buy Now
//                   </button>

//                 </div>

//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       {/* RIGHT SIDE - SUMMARY */}
//       {cart.length > 0 && (
//         <div className="border rounded-xl p-6 h-fit shadow-md bg-white">

//           <h3 className="text-xl font-bold mb-4">
//             Payment Summary
//           </h3>

//           <div className="space-y-3 text-gray-700">

//             <div className="flex justify-between">
//               <span>Subtotal</span>
//               <span>₹{subtotal.toLocaleString()}</span>
//             </div>

//             <div className="flex justify-between">
//               <span>Tax (5%)</span>
//               <span>₹{tax.toFixed(2)}</span>
//             </div>

//             <hr />

//             <div className="flex justify-between text-lg font-semibold">
//               <span>Total</span>
//               <span className="text-yellow-600">
//                 ₹{total.toLocaleString()}
//               </span>
//             </div>

//           </div>

//           {/* CHECKOUT BUTTON */}
//           <button className="w-full mt-6 bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition shadow">
//             Proceed to Checkout
//           </button>

//         </div>
//       )}

//     </div>
//   );
// };

// export default CartPage;

import React from "react";
import { useCart } from "../context/CardContext";

const CartPage = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();

  // ✅ TOTAL CALCULATION
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <div className="px-6 md:px-20 py-10 grid md:grid-cols-3 gap-10">

      {/* LEFT SIDE - PRODUCTS */}
      <div className="md:col-span-2 space-y-6">

        <h2 className="text-3xl font-bold mb-4">Your Cart</h2>

        {cart.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">
            Cart is empty 🛒
          </div>
        ) : (
          cart.map((item, index) => (
            <div
              key={index}
              className="flex gap-6 border rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >

              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-lg"
              />

              {/* DETAILS */}
              <div className="flex flex-col justify-between w-full">

                <div>
                  <h3 className="text-lg font-semibold">
                    {item.name}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {item.description}
                  </p>

                  <p className="text-yellow-600 font-semibold mt-2">
                    ₹{(item.price * item.quantity).toLocaleString()}
                  </p>

                  <p className="text-sm text-gray-600">
                    Size: {item.selectedSize || "N/A"}
                  </p>
                </div>

                {/* QUANTITY CONTROLS */}
                <div className="flex items-center gap-3 mt-3">

                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-3 py-1 border rounded hover:bg-gray-100"
                  >
                    -
                  </button>

                  <span className="font-semibold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-3 py-1 border rounded hover:bg-gray-100"
                  >
                    +
                  </button>

                </div>

                {/* ACTIONS */}
                <div className="flex gap-3 mt-4">

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 border border-red-500 px-3 py-1 rounded-full hover:bg-red-500 hover:text-white transition"
                  >
                    Remove
                  </button>

                  <button className="bg-yellow-600 text-white px-4 py-1 rounded-full hover:bg-yellow-700 transition">
                    Buy Now
                  </button>

                </div>

              </div>
            </div>
          ))
        )}
      </div>

      {/* RIGHT SIDE - SUMMARY */}
      {cart.length > 0 && (
        <div className="border rounded-xl p-6 h-fit shadow-md bg-white">

          <h3 className="text-xl font-bold mb-4">
            Payment Summary
          </h3>

          <div className="space-y-3 text-gray-700">

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString()}</span>
            </div>

            <div className="flex justify-between">
              <span>Tax (5%)</span>
              <span>₹{tax.toFixed(2)}</span>
            </div>

            <hr />

            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span className="text-yellow-600">
                ₹{total.toLocaleString()}
              </span>
            </div>

          </div>

          {/* CHECKOUT BUTTON */}
          <button className="w-full mt-6 bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition shadow">
            Proceed to Checkout
          </button>

        </div>
      )}

    </div>
  );
};

export default CartPage;