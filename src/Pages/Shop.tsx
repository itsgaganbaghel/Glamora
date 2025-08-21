import ShopMainContent from "../Components/Shop/ShopMainContent";
import ShopSidebar from "../Components/Shop/ShopSidebar";

const Shop = () => {
  return (
    <section className="flex bg-gradient-to-b from-[#243631ca] from-0% via-transparent via-40% to-transparent to-100% ">
      <section className="hidden lg:block">
        <ShopSidebar />
      </section>

      {/* for mobile */}
      <section className={`block lg:hidden  `}>
        <ShopSidebar
          trueCondition="top-0 left-0"
          falseCondition=" absolute -left-[200%] top-0"
        />
      </section>
      <ShopMainContent />
    </section>
  );
};

export default Shop;
