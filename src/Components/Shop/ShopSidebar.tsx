import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFilter } from "../../contexts/FilterContext";

interface ShopSidebarProps {
  trueCondition?: string;
  falseCondition?: string;
}

const ShopSidebar: React.FC<ShopSidebarProps> = ({
  trueCondition = "",
  falseCondition = "",
}) => {
  let {
    selectedCategory,
    setSelectedCategory,

    minPrice,
    setMinPrice,

    maxPrice,
    setMaxPrice,

    keyword,
    setKeyword,

    handleResetFilter,
    isSideBarOpen,
    setIsSideBarOpen,
  } = useFilter();

  const [categories, setCategories] = useState<string[]>([]);
  const [keywords] = useState<string[]>([
    "apple",
    "watch",
    "fashion",
    "trend",
    "shoes",
    "shirt",
  ]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          "https://dummyjson.com/products/category-list"
        );
        setCategories(res.data);
      } catch (error) {
        console.error("Error fetching product", error);
      }
    };
    fetchCategories();
  }, []);

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.currentTarget;
    setMinPrice(value ? parseFloat(value) : undefined);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.currentTarget;
    setMaxPrice(value ? parseFloat(value) : undefined);
  };

  const handleChangeInCategories = (category: string) => {
    setSelectedCategory(category);
    console.log(category);
    handleSideBarNavLinksClick();
  };

  const handleKeywordClick = (keyWord: string) => {
    setKeyword(keyWord);
    setSelectedCategory("");
    handleSideBarNavLinksClick();
  };

  const handleSideBarNavLinksClick = () => {
    window.innerWidth < 1024 && setIsSideBarOpen(!isSideBarOpen);
  };
  return (
    <section
      className={`lg:max-w-[25vw] xl:max-w-[20vw] md:max-w-[40vw]  max-w-[80vh] lg:relative  absolute  z-30 bg-black lg:bg-inherit p-5 h-screen text-white pt-[15vh] transition-all duration-500 ${
        isSideBarOpen ? trueCondition : falseCondition
      }
`}
    >
      <section className="min-h-[80vh] max-h-[80vh] flex flex-col gap-2 py-6 overflow-y-scroll custom-scroll">
        <section className="flex flex-col gap-3 justify-center my-2 w-[90%]">
          <input
            type="tel"
            className="border w-[80%] border-[#2c4441d8] rounded outline-0 px-5 py-3  "
            placeholder="min Price"
            value={minPrice ?? ""}
            onChange={handleMinPriceChange}
          />
          <input
            type="tel"
            className="border w-[80%]  border-[#2c4441d8] outline-0 rounded px-5 py-3 "
            placeholder="max Price"
            value={maxPrice ?? ""}
            onChange={handleMaxPriceChange}
          />
        </section>

        {/* keyword sections */}
        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold mb-2">Keywords</h2>
          {keywords.map((word, index) => (
            <button
              key={index}
              className={`block mb-2 ml-4 px-4 w-1/2 text-left border border-white/20 rounded cursor-pointer
                ${
                  word === keyword
                    ? "bg-white text-black"
                    : "bg-[#2c4441d8] text-white hover:bg-white hover:text-black"
                }`}
              onClick={() => handleKeywordClick(word)}
            >
              {word.toUpperCase()}
            </button>
          ))}
        </section>

        {/* category Section */}
        <section className="mb-5">
          <h2 className="text-xl font-semibold mb-3">Categories</h2>
          {categories.map((category, index) => (
            <label
              key={index}
              className={`block mb-2 font-semibold ml-4  cursor-pointer
                ${selectedCategory === category ? "border py-1 px-2 pr-4 rounded-md w-fit  " : ""}`}
            >
              <input
                type="checkbox"
                name="category"
                value={category}
                className="mr-2  w-[16px] h-[16px] "
                onChange={(e) => handleChangeInCategories(e.target.value)}
                checked={selectedCategory === category}
              />
              {category.toUpperCase()}
            </label>
          ))}
        </section>

        <button
          className="w-[90%]  py-2 bg-[#2c4441d8] border-white border  text-white rounded mt-5 cursor-pointer "
          onClick={handleResetFilter}
        >
          Reset Filters
        </button>
      </section>
    </section>
  );
};

export default ShopSidebar;
