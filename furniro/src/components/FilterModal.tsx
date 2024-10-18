import React, { useEffect, useRef, useState } from "react";
import filterIcon from "../assets/icon/icon_filtering.svg";
import { UseCategoriesResult } from "../interface/UseCategoriesResponse";
import { useCategories } from "../hooks/useCategories";
import ApplyBtn from "./ApplyBtn"; 
import { ModalFilterData } from "../interface/ModalFilterData";
import './styles.css'; 

interface FilterModalProps {
  onUpdate: (data: ModalFilterData) => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ onUpdate }) => {
  const { categories }: UseCategoriesResult = useCategories();

  // Modal state management
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Form state management
  const [formData, setFormData] = useState<ModalFilterData>({
    category: "",
    maxPrice: "",
    is_new: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = event.target;
    setFormData((prevData) => {
      if (type === "checkbox") {
        const checked = (event.target as HTMLInputElement).checked;
        return {
          ...prevData,
          [name]: checked,
        };
      } else {
        return {
          ...prevData,
          [name]: value,
        };
      }
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onUpdate(formData);
  };

  return (
    <div ref={wrapperRef} className="filter-modal-container">
      <button
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        className="filter-button"
      >
        <img src={filterIcon} alt="filter" />
        Filter
      </button>
      {isOpen && (
        <form className="filter-form" onSubmit={handleSubmit}>
          <h2 className="filter-title">Filter products by:</h2>

          <div className="filter-field">
            <label htmlFor="categories">Categories:</label>
            <select
              name="category"
              id="categories"
              onChange={handleChange}
              defaultValue=""
              className="filter-select"
            >
              <option value="" disabled hidden>
                Select a category
              </option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-field">
            <label htmlFor="maxPrice">Maximum price:</label>
            <input
              name="maxPrice"
              id="maxPrice"
              type="number"
              onChange={handleChange}
              className="filter-input"
            />
          </div>

          <div className="filter-checkbox">
            <input
              type="checkbox"
              name="isNew"
              id="isNew"
              onChange={handleChange}
            />
            <label htmlFor="isNew">New products</label>
          </div>

          <div className="filter-button-container">
            <ApplyBtn handleSubmit={handleSubmit} />
          </div>
        </form>
      )}
    </div>
  );
};

export default FilterModal;
