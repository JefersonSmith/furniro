import React from "react";
import { useNavigate } from "react-router-dom";
import './styles.css'; 

interface CardCategoryProps {
  id: number;
  category: string;
  image_link: string;
}

const CardCategory: React.FC<CardCategoryProps> = ({
  id,
  category,
  image_link,
}: CardCategoryProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('shop', { state: id });
  };

  return (
    <div>
      <img
        className="category-image"
        src={image_link}
        alt={category}
        onClick={handleClick}
      />
      <p className="category-text" onClick={handleClick}>
        {category}
      </p>
    </div>
  );
};

export default CardCategory;
