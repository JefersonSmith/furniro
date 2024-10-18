import React from "react";
import { Link } from "react-router-dom";
import shareIcon from "../assets/icon/gridicons_share.svg";
import heartIcon from "../assets/icon/Heart.svg";
import compareIcon from "../assets/icon/compare-svgrepo-com.svg";
import './styles.css'; 

interface CardProductProps {
  name: string;
  id: number;
  imageLink: string;
  category: number;
  price: number;
  discountPrice: number;
  discountPercent: number;
  is_new: boolean;
}

const CardProduct: React.FC<CardProductProps> = ({
  name,
  id,
  imageLink,
  category,
  price,
  discountPrice,
  discountPercent,
  is_new,
}: CardProductProps) => {
  return (
    <div className="card-product">
      <div className="card-overlay">
        <div className="card-background"></div>
        <div className="card-actions">
          <Link to={`/shop/${id}`} className="card-link">
            See Details
          </Link>
          <div className="card-icons">
            <div className="icon-item">
              <img src={shareIcon} alt="Share" /> Share
            </div>
            <div className="icon-item">
              <img src={compareIcon} alt="Compare" /> Compare
            </div>
            <div className="icon-item">
              <img src={heartIcon} alt="Like" /> Like
            </div>
          </div>
        </div>
      </div>

      <div className="card-content">
        {is_new && <div className="badge new-badge">New</div>}
        {discountPercent && (
          <div className="badge discount-badge">-{discountPercent}%</div>
        )}
        <div className="image-container">
          <img className="product-image" src={imageLink} alt={name} />
        </div>
        <div className="card-details">
          <h2 className="product-name">{name}</h2>
          <p className="product-description">Stylish cafe chair</p>
          <div className="product-pricing">
            <p className="current-price">
              Rp {discountPrice ? discountPrice : price}
            </p>
            {discountPrice && <del className="original-price">Rp {price}</del>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
