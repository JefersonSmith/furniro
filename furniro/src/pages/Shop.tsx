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
import "./shop.css"; // Import your CSS file

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
  const [limit, setLimit] = useState<number>(16); // Limite inicial
  const [sortBy, setSortBy] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<string>("DESC");

  const categoryName = useCategoryById(category?.toString());

  const [formData, setFormData] = useState<FormData>({
    showCount: 16,
    sortBy: "default",
  });

  useEffect(() => {
    setCategory(
      modalFilterData?.category
        ? parseInt(modalFilterData?.category)
        : undefined
    );
    setMaxPrice(
      modalFilterData?.maxPrice ? +modalFilterData?.maxPrice : undefined
    );
    setIsNew(modalFilterData?.is_new);
  }, [modalFilterData]);

  // Este useEffect irá atualizar a ordenação e o limite automaticamente quando formData mudar
  useEffect(() => {
    const { showCount, sortBy } = formData;

    setLimit(showCount); // Atualiza o limite conforme o formulário

    if (sortBy === "az") {
      setSortBy("name");
      setSortDirection("ASC");
    } else if (sortBy === "highToLow") {
      setSortBy("price");
      setSortDirection("DESC");
    } else if (sortBy === "lowToHigh") {
      setSortBy("price");
      setSortDirection("ASC");
    } else {
      setSortBy("");
      setSortDirection("");
    }
  }, [formData]);

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

  // Função para carregar mais produtos
  const handleLoadMore = () => {
    setLimit((prevLimit) => prevLimit + 16); // Adiciona mais 16 produtos ao limite atual
  };

  return (
    <div>
      <div className="shop-header">
        <img className="shop-header__image" src={shopImage} alt="" />
        <div className="shop-header__content">
          <h1 className="shop-title">Shop</h1>
          <span className="shop-breadcrumb">
            <Link className="breadcrumb__link" to={"/"}>
              Home
            </Link>
            <img src={arrowIcon} alt="arrow" />
            <p>Shop</p>
          </span>
        </div>
      </div>
      <div className="shop-controls">
        <div className="controls-left">
          <FilterModal onUpdate={handleModalFilterData} />
          <button className="view-button">
            <img src={gridRoundIcon} alt="grid view" />
          </button>
          <button className="view-button">
            <img src={viewListIcon} alt="list view" />
          </button>
          <div className="results-info">Showing 1–{limit} of 32 results</div>
        </div>
        <form className="controls-form">
          <div className="form-group">
            <label className="form-label" htmlFor="showCount">
              Show
            </label>
            <input
              onChange={handleInputChange}
              className="input-number"
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
          <div className="form-group">
            <label className="form-label" htmlFor="sortBy">
              Sort by
            </label>
            <select
              className="sort-select"
              name="sortBy"
              id="sortBy"
              onChange={handleInputChange} // Agora apenas chamamos o handleInputChange
            >
              <option value="default">Default</option>
              <option value="az">A - Z</option>
              <option value="highToLow">High to low </option>
              <option value="lowToHigh">Low to high</option>
            </select>
          </div>
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

      {limit < 32 && (
        <div className="load-more">
          <button onClick={handleLoadMore} className="load-more-button">
            Show More
          </button>
        </div>
      )}

      <AdvantageSection />
      <Footer />
    </div>
  );
};

export default Shop;
