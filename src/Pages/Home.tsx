import Categories from "../Components/Home/Categories";
import HeroSection from "../Components/Home/HeroSection";
import { lazy } from "react";

const Features = lazy(() => import("../Components/Home/Features"));
const Footer = lazy(() => import("../Components/Home/Footer"));
const Testimonials = lazy(() => import("../Components/Home/Testimonials"));

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
