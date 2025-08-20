import { Carousel } from "../../lib/ui/Carousel";
const slideData = [
  {
    src: "/TrendingKeywords/apple.jpg",
    title: "apple",
    button: "Explore Category",
  },
  {
    src: "/TrendingKeywords/fashion.jpg",
    title: "fashion",
    button: "Explore Category",
  },
  {
    src: "/TrendingKeywords/shoes.jpg",
    title: "shoes",
    button: "Explore Category",
  },
  {
    src: "/TrendingKeywords/tshirt.jpg",
    title: "tshirt",
    button: "Explore Category",
  },
  {
    src: "/TrendingKeywords/watch.jpg",
    title: "watch",
    button: "Explore Category",
  },
];

const Categories = () => {
  return (
    <>
      <h2 className="text-white   text-center text-6xl font-serif">
        Categories
      </h2>
      <Carousel slides={slideData} />;
    </>
  );
};

export default Categories;
