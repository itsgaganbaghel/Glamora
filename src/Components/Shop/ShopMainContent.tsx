import { useEffect, useMemo, useState } from "react";
import { useFilter } from "../../contexts/FilterContext";
import { IconFilter } from "@tabler/icons-react";
import axios from "axios";
import Product from "./Product";
import Pagination from "./Pagination";

const ShopMainContent = () => {
  let {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    minPrice,
    maxPrice,
    keyword,
    setKeyword,
    handleResetFilter,
  } = useFilter();

  const [products, setProducts] = useState<any[]>([]);
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const itemsPerPage = 8;
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  useEffect(() => {
    let url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${
      (currentPage - 1) * itemsPerPage
    }`;
    if (keyword) {
      url = `https://dummyjson.com/products/search?q=${keyword}`;
      console.log("keyword is there");
    }
    if (selectedCategory) {
      url = `https://dummyjson.com/products/category/${selectedCategory}`;
    }

    console.log(url);

    axios
      .get(url)
      .then((res) => {
        setProducts(res.data.products);
        console.log(res.data.products);
      })
      .catch((err) => console.log(err));
  }, [currentPage, keyword, selectedCategory]);

  const filteredProducts = useMemo(() => {
    let result = [...products];
    console.log("result : ", result);

    if (selectedCategory) {
      console.log(selectedCategory);
      result = result.filter((p) => p.category === selectedCategory);
      console.log(result);
      setKeyword("");
    }
    if (minPrice !== undefined) {
      result = result.filter((p) => p.price >= minPrice);
    }
    if (maxPrice !== undefined) {
      result = result.filter((p) => p.price <= maxPrice);
    }
    if (searchQuery) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    switch (filter) {
      case "expensive":
        return result.sort((a, b) => b.price - a.price);
      case "cheap":
        return result.sort((a, b) => a.price - b.price);
      case "popular":
        return result.sort((a, b) => b.rating - a.rating);
      default:
        return result;
    }
  }, [products, searchQuery, selectedCategory, minPrice, maxPrice, filter]);

  const totalProducts = selectedCategory ? products.length : 100;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  console.log("totalPages", totalPages);

  let handlePageChange = (page: number) => {
    console.log(totalPages);
    console.log("page", page);
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      console.log("page", page);
    }
  };

  useEffect(() => {
    document
      .querySelector("#mainContainer")
      ?.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <section className="lg:w-[80vw]  w-[100vw] pt-[15vh] ">
      <section
        className="flex flex-col  gap-5     pb-5  pt-2 min-h-[85vh] max-h-[80vh] overflow-y-scroll  custom-scroll"
        id="mainContainer"
      >
        <article className="w-full flex justify-center md:px-20 px-2 gap-2 md:gap-5">
          <form className="w-[80%]  ">
            <input
              type="text"
              className="border-2 w-[100%] text-white outline-0 border-[#2c4441d8]  px-2 md:pl-5  py-2 rounded-full  "
              placeholder="Search Your Product in this Page  Products  "
              value={searchQuery ?? ""}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          <section className="relative ">
            <button
              className="border px-4 py-2 rounded-full flex items-center text-white  cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <IconFilter className="mr-2  " />
              {filter === "all"
                ? "filter"
                : filter.charAt(0).toLowerCase() + filter.slice(1)}
            </button>

            {dropdownOpen && (
              <section
                className="absolute bg-[#2c4441d8] z-20 backdrop-blur-xl text-white  rounded mt-2 w-full sm:w-40 p-2 /50 space-y-3 "
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {["cheap", "expensive", "popular"].map((val) => (
                  <button
                    onClick={() => setFilter(val)}
                    className={`block px-4 py-2 w-full text-left hover:bg-white hover:text-black rounded-2xl cursor-pointer ${
                      filter == val ? " bg-white text-black " : "bg-transparent"
                    }  `}
                  >
                    {val}
                  </button>
                ))}
              </section>
            )}
          </section>
        </article>

        <section className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 px-4 lg:px-0 lg:pr-2  gap-10 ">
          {/* product cards */}

          {(searchQuery || selectedCategory || keyword) &&
          filteredProducts.length < 0 ? (
            <section className="w-[75vw] h-[50vh] flex flex-col gap-2 justify-center items-center text-white text-4xl font-serif">
              <h2>Data Not Found.. </h2>
              <p>Change the Filters and try again </p>
              <button
                className=" px-10 rounded-full text-2xl  py-2 bg-[#2c4441d8] border-white border  text-white mt-5 cursor-pointer "
                onClick={handleResetFilter}
              >
                Reset Filters
              </button>
            </section>
          ) : (
            filteredProducts.map((p) => <Product key={p.id} pro={p} />)
          )}
        </section>
        {!selectedCategory &&
          !keyword &&
          !maxPrice &&
          !minPrice &&
          !searchQuery &&
          filteredProducts.length > 0 && (
            <Pagination
              handlePageChange={handlePageChange}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          )}
      </section>
    </section>
  );
};

export default ShopMainContent;
