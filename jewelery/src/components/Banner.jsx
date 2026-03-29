import bannerImg from "../assets/banner.png";
import ring from "../assets/ring.png";

const Banner = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 space-y-16">

      {/* ROW 1 */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <div className="overflow-hidden rounded-xl">
          <img
            src={ring}
            alt="ring"
            className="w-full h-[300px] md:h-[400px] object-cover rounded-xl hover:scale-105 transition duration-500"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-center md:text-left">
          <h1 className="font-[Playfair_Display] text-3xl md:text-5xl text-gray-800 leading-tight">
            Jewelry That Tells Your Story in <br />
            <span className="text-yellow-600">Sparkling Detail</span>
          </h1>

          <p className="mt-4 text-gray-600 text-sm md:text-base max-w-md">
            Celebrate life’s special moments with exquisite pieces designed for
            love, beauty, and elegance.
          </p>

          <button className="mt-6 px-6 py-2 border border-yellow-600 text-yellow-600 rounded-full hover:bg-yellow-600 hover:text-white transition">
            SHOP NOW →
          </button>
        </div>

      </div>

      {/* ROW 2 */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

  {/* IMAGE (mobile pe first) */}
  <div className="overflow-hidden rounded-xl order-1 md:order-2">
    <img
      src={bannerImg}
      alt="banner"
      className="w-full h-[300px] md:h-[400px] object-cover rounded-xl hover:scale-105 transition duration-500"
    />
  </div>

  {/* TEXT (mobile pe second) */}
  <div className="text-center md:text-left order-2 md:order-1">
    <h1 className="font-[Playfair_Display] text-3xl md:text-5xl text-gray-800 leading-tight">
      Adorn Yourself with Jewelry That <br />
      <span className="text-yellow-600">Captures Your Essence</span>
    </h1>

    <p className="mt-4 text-gray-600 text-sm md:text-base max-w-md">
      Each piece is carefully designed to celebrate your individuality.
    </p>

    <button className="mt-6 px-6 py-2 border border-yellow-600 text-yellow-600 rounded-full hover:bg-yellow-600 hover:text-white transition">
      SHOP NOW →
    </button>
  </div>

</div>

    </section>
  );
};

export default Banner;