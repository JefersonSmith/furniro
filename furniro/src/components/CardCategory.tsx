import React from "react";
import './styles.css'; 

interface CardCategoryProps {
  category: string;
  image_link: string;
}

const CardCategory: React.FC<CardCategoryProps> = ({
  category,
  image_link,
}: CardCategoryProps) => {
  console.log("Image link:", image_link);
  const href = `/shop/${category.toLowerCase()}`;
  return (
    <div className="card-category">
      <a href={href}>
        <img
          className="card-category-image"
          src={image_link}
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
