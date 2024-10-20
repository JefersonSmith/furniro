import React from "react";
import { useCategories } from "../hooks/useCategories";
import { UseCategoriesResult } from "../interface/UseCategoriesResponse";
import CardCategory from "./CardCategory";
import Loading from "./Loading";
import './styles.css'; 

const CategorySection: React.FC = () => {
  const { categories, error, loading }: UseCategoriesResult = useCategories();

  return (
    <div className="category-section">
      <h2 className="section-title">Browse The Range</h2>
      <div className="category-grid">
        {loading ? (
          <Loading />
        ) : error ? (
          <p>An error has occurred! Please reload the page</p>
        ) : (
          categories.map((category) => (
            <CardCategory key={category.id} id={category.id} category={category.name} image_link={category.image_link}/> 
          ))
        )}
      </div>
    </div>
  );
};

export default CategorySection;