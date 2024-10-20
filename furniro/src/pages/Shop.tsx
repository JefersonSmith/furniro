import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import AdvantageSection from "../components/AdvantagesSection";
import Footer from "../components/Footer";
import ProductsSection from "../components/ProductsSection";
import shopImage from "../assets/shop-image.png";
import { Link, useLocation } from "react-router-dom";
import arrowIcon from "../assets/icon/arrow-down-alt2.svg";
import gridRoundIcon from "../assets/icon/grid-big-round.svg";
import viewListIcon from "../assets/icon/view-list.svg";
import ApplyBtn from "../components/ApplyBtn";
import FilterModal from "../components/FilterModal";
import { ModalFilterData } from "../interface/ModalFilterData";
import { useCategoryById } from "../hooks/useCategoryById";
import './shop.css'; // Import your CSS file

interface FormData {
  showCount: number;
  sortBy: string;
}

const Shop: React.FC = () => {
  const location = useLocation();
  const [modalFilterData, setModalFilterData] = useState<ModalFilterData>();
  const [is_new, setIsNew] = useState<boolean | undefined>(false);
  const [category, setCategory] = useState<number | undefined>(location.state);
  const [maxPrice, setMaxPrice] = useState<number | undefined>();
  const [limit, setLimit] = useState<number>(16);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<string>("DESC");
  const [page, setPage] = useState<number>(1);
  
  const categoryName = useCategoryById(category?.toString());
  
  const handlePageChange = (page: number) => {
    setPage(page);
  };
  
  const [formData, setFormData] = useState<FormData>({
    showCount: 16, 
    sortBy: "default", 
  });
  
  useEffect(() => {
    setCategory(
      modalFilterData?.category
        ? parseInt(modalFilterData?.category)
        : undefined );
    setMaxPrice(
      modalFilterData?.maxPrice ? +modalFilterData?.maxPrice : undefined
    );
    setIsNew(modalFilterData?.is_new);
    
  }, [category, is_new, maxPrice, modalFilterData, limit, formData]);
  
  const handleModalFilterData = (data: ModalFilterData) => {
    setModalFilterData(data);
  };
  
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const newValue = name === "showCount" ? parseInt(value, 10) : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData?.sortBy === "az") {
      setSortBy("name");
      setSortDirection("ASC");
    } else if (formData?.sortBy === "highToLow") {
      setSortBy("price");
      setSortDirection("DESC");
    } else if (formData?.sortBy === "lowToHigh") {
      setSortBy("price");
      setSortDirection("ASC");
    } else if (formData?.sortBy === "default") {
      setSortBy("");
      setSortDirection("");
    }
    setLimit(formData?.showCount);
  };

  return (
    <div>
      <div className="relative flex justify-center items-center">
        <img className="w-full h-full" src={shopImage} alt="" />
        <div className="absolute">
          <h1 className="text-5xl font-semibold">Shop</h1>
          <span className="flex justify-between">
            <Link className="font-semibold hover:underline" to={"/"}>
              Home
            </Link>
            <img src={arrowIcon} alt="" />
            <p>Shop</p>
          </span>
        </div>
      </div>
      <div className="h-20 bg-secondary-100 mb-16 px-24 flex justify-between items-center">
        <div className="flex items-center gap-5">
          <FilterModal onUpdate={handleModalFilterData} />
          <button className="p-1 hover:bg-orange-200 hover:rounded-md">
            <img src={gridRoundIcon} alt="grid view" />
          </button>
          <button className="p-2 hover:bg-orange-200 hover:rounded-md">
            <img src={viewListIcon} alt="list view" />
          </button>
          <div className="border-l-2 h-9 border-gray-400 pl-8 flex items-center">
            Showing 1–16 of 32 results
          </div>
        </div>
        <form className="flex gap-5" onSubmit={handleSubmit}>
          <div>
            <label className="mr-4 text-xl" htmlFor="showCount">
              Show
            </label>
            <input
              onChange={handleInputChange}
              className="size-11 px-3 remove-arrow"
              type="number"
              name="showCount"
              id="showCount"
              placeholder="16"
              min="1"
              max="99"
              maxLength={2}
              onInput={(e) => {
                if (e.currentTarget.value.length > 2) {
                  e.currentTarget.value = e.currentTarget.value.slice(0, 2);
                }
              }}
            />
          </div>
          <div>
            <label className="mr-4 text-xl" htmlFor="sortBy">
              Sort by
            </label>
            <select
              className="h-10 px-3"
              name="sortBy"
              id="sortBy"
              onChange={handleInputChange}
            >
              <option value="default">Default</option>
              <option value="az">A - Z</option>
              <option value="highToLow">High to low </option>
              <option value="lowToHigh">Low to high</option>
            </select>
          </div>
          <ApplyBtn handleSubmit={handleSubmit} />
        </form>
      </div>
      <ProductsSection
        isNew={is_new}
        category={category}
        maxPrice={maxPrice}
        limit={limit}
        sortBy={sortBy}
        sortDirection={sortDirection}
      />
      <AdvantageSection />
      <Footer />
    </div>
  );
};

export default Shop;