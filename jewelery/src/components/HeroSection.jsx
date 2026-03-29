import heroImg from '../assets/hero.png'

const Hero = () => {
  return (
    <div
      className="h-[90vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay */}
      <div className="bg-black/20 w-full h-full flex items-center">
        
        {/* Content */}
        <div className="px-6 md:px-20 text-white max-w-2xl">
          
          <h1 className=" font-[Playfair_Display] text-5xl  md:text-6xl  leading-tight">
            Unveiling the Beauty <br />
            of Fine Jewelry
          </h1>

          <p className=" font-[Poppins] text-gray-200 mt-4 text-sm md:text-base ">
            Handpicked gemstones and intricate designs for a lifetime of luxury.
          </p>

          <button className="mt-6 border border-white px-6 py-2 hover:bg-white hover:text-black transition">
            SHOP NOW →
          </button>

        </div>

      </div>
    </div>
  );
};

export default Hero;