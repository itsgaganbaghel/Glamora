export default function Features() {
  const featuresData = [
    { img: "/features/online-order.png", title: "Online Order" },
    { img: "/features/happy-sell.png", title: "Happy Sell" },
    { img: "/features/free-shipping.png", title: "Free Shipping" },
    { img: "/features/promotions.png", title: "Promotions" },
    { img: "/features/save-money.png", title: "Save Money" },
    { img: "/features/support.png", title: "Support" },
  ];

  return (
    <section className="pb-16 bg-black" id="Features">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          Why Shop With{" "}
          <span className="text-gray-300 font-mono">Glamora?</span>
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {featuresData.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center bg-[#171717] border-x-1 border-white/10 hover:border-white/30 cursor-pointer rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:bg-[radial-gradient(circle,#323232f1,transparent)]
"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-32 h-32 object-contain mb-4"
              />
              <h3 className="text-lg tracking-wide font-semibold text-white">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
