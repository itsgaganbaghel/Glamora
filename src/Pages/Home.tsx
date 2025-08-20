import Categories from "../Components/Home/Categories";
import { Testimonials } from "../Components/Home/Testimonials";
import HeroSection from "../Components/Home/HeroSection";
import Features from "../Components/Home/Features";
import Footer from "../Components/Home/Footer";

const Home = () => {
  return (
    <article className="w-full  overflow-hidden flex flex-col gap-20">
      <HeroSection />
      <Features />
      <Categories />
      <Testimonials />
      <Footer />
    </article>
  );
};

export default Home;
