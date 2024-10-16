import React from "react";
import './styles.css'; 

interface CardCategoryProps {
  category: string;
  imageLink: string;
}

const CardCategory: React.FC<CardCategoryProps> = ({
  category,
  imageLink,
}: CardCategoryProps) => {
  const href = `/shop/${category.toLowerCase()}`;
  return (
    <div className="card-category">
      <a href={href}>
        <img
          className="card-category-image"
          src={imageLink}
          alt={category}
        />
      </a>
      <a
        className="card-category-title"
        href={href}
      >
        {category}
      </a>
    </div>
  );
};

export default CardCategory;
