import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFilter } from "../../contexts/FilterContext";

const ShopSidebar = () => {
  let {
    searchQuery,
    setSearchQuery,

    selectedCategory,
    setSelectedCategory,

    minPrice,
    setMinPrice,

    maxPrice,
    setMaxPrice,

    keyword,
    setKeyword,

    handleResetFilter,
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
        console.log(res.data);
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

  const handleRadioChangeCategories = (category: string) => {
    setSelectedCategory(category);
  };

  const handleKeywordClick = (keyWord: string) => {
    setKeyword(keyWord);
    setSelectedCategory("");
  };

  return (
    <section className="max-w-[20vw]  p-5 h-screen text-white pt-[15vh]">
      <section className="min-h-[80vh] max-h-[80vh] flex flex-col gap-2 py-6 overflow-y-scroll custom-scroll">
        <input
          type="text"
          className="border-2 w-[90%] outline-0 border-[#2c4441d8] rounded px-2 py-1 sm:mb-0 "
          placeholder="Search Product in this page"
          value={searchQuery ?? ""}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <section className="flex gap-2 my-2 w-[90%]">
          <input
            type="tel"
            className="border border-[#2c4441d8] rounded outline-0 px-5 py-3  w-full"
            placeholder="min"
            value={minPrice ?? ""}
            onChange={handleMinPriceChange}
          />
          <input
            type="tel"
            className="border border-[#2c4441d8] outline-0 rounded px-5 py-3 w-full"
            placeholder="max"
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
              className={`block mb-2 ml-4 px-4 w-1/2 text-left text-black border border-white/20 bg-[#2c4441d8] rounded hover:bg-white hover:text-black cursor-pointer ${
                word === keyword
                  ? " bg-white text-[#2c4441d8] "
                  : "bg-[#2c4441d8] text-white"
              } `}
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
              className="block mb-2 font-semibold ml-4  cursor-pointer"
            >
              <input
                type="radio"
                name="category"
                value={category ?? ""}
                className="mr-2  w-[16px] h-[16px]"
                onChange={() => handleRadioChangeCategories(category)}
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
