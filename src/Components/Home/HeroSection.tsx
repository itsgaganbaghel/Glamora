const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center min-h-[90vh] max-h-[100vh] items-center text-center px-4 bg-gradient-to-b from-[#243631ca] to-transparent">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide text-white">
        Step into style with Glamora
      </h1>
      <p className="text-lg italic mb-8 md:max-w-1/2 text-gray-400 tracking-wider">
        No clutter, no noise — just fashion at your fingertips. Glamora’s clean
        shopping experience. apply filters, and discover outfits that fit your
        lifestyle.
      </p>

      {/* Buttons */}
      <div className="flex gap-6">
        <button className="bg-[#2c4441d8] text-white px-6 py-2 rounded-lg shadow-md hover:bg-slate-300 hover:text-black cursor-pointer transition text-lg font-medium">
          Shop now
        </button>
        <button className="bg-[#2c4441d8] text-white px-6 py-2 rounded-lg shadow-md hover:bg-slate-300  hover:text-black cursor-pointer transition text-lg font-medium">
          Explore
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
