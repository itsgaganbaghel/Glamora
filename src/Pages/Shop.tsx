import ShopMainContent from "../Components/Shop/ShopMainContent";
import ShopSidebar from "../Components/Shop/ShopSidebar";

const Shop = () => {
  return (
    <section className="flex bg-gradient-to-b from-[#243631ca] from-0% via-transparent via-40% to-transparent to-100%">
      <ShopSidebar />
      <ShopMainContent />
    </section>
  );
};

export default Shop;
