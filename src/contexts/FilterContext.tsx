import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

// Define the context type
interface FilterContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  selectedCategory: string;
  setSelectedCategory: (category: string) => void;

  minPrice: number | undefined;
  setMinPrice: (price: number | undefined) => void;

  maxPrice: number | undefined;
  setMaxPrice: (price: number | undefined) => void;

  keyword: string;
  setKeyword: (keyword: string) => void;

  handleResetFilter: () => void;
}

// Create context with undefined as default
const FilterContext = createContext<FilterContextType | undefined>(undefined);

// Create a Provider component
export const FilterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [keyword, setKeyword] = useState<string>("");

  const handleResetFilter = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setMaxPrice(undefined);
    setMinPrice(undefined);
    setKeyword("");
  };

  return (
    <FilterContext.Provider
      value={{
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
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// Custom hook for consuming context
export const useFilter = (): FilterContextType => {
  const context = useContext(FilterContext);
  if (!context || context === undefined) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
