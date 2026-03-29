import { Link } from "react-router-dom";

const categories = [
  {
    name: "Rings",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
  },
  {
    name: "Earrings",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638",
  },
  {
    name: "Pendants",
    image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d",
  },
  {
    name: "Bracelets",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a",
  },
  {
    name: "Necklaces",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
  },
];

const ShopCategory = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-[Playfair_Display] text-center mb-10">
        Shop by Category
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        
        {categories.map((cat, index) => (
          <Link
            key={index}
            to={`/category/${cat.name.toLowerCase()}`}
            className="block transform transition duration-300 hover:-translate-y-2"
          >
            <div className="relative rounded-xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition duration-300">
              
              {/* Image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-40 object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition duration-300">
                <h3 className="text-white font-semibold text-lg tracking-wide">
                  {cat.name}
                </h3>
              </div>

            </div>
          </Link>
        ))}

      </div>
    </section>
  );
};

export default ShopCategory;