import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductById } from "../hooks/useProductById";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import Alert from "../components/Alert";
import arrowIcon from "../assets/icon/arrow-down-alt2.svg";
import starIcon from "../assets/icon/star.svg";
import facebookIcon from "../assets/icon/icons_facebook-fill.png";
import linkedinIcon from "../assets/icon/icons_linkedin-box-fill.svg";
import twitterIcon from "../assets/icon/icon_twitter.svg";
import ProductsSection from "../components/ProductsSection";
import { useCategoryById } from "../hooks/useCategoryById";
import './ProductDetails.css'; 

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const { product, loading, error } = useProductById(id);
  const [activeButtonSize, setActiveSizeButton] = useState<number>(0);
  const [productQuantity, setProductQuantity] = useState<number>(1);
  const [color, setColor] = useState<number>(0);
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [showMoreCount, setShowMoreCount] = useState<number>(1);
  const [limitProducts, setLimitProducts] = useState<number>(4);
  const [mainImage, setMainImage] = useState<string | undefined>(
    product?.other_images_link[0]
  );

useEffect(() => {
    setMainImage(product?.other_images_link[0]);
  }, [product?.other_images_link]);

  const navigate = useNavigate();

  const { category } = useCategoryById(product?.category.toString());


  const handleShowMore = () => {
    setShowMoreCount(showMoreCount + 1);
    setLimitProducts(8);
    if (showMoreCount === 2) {
      navigate("/shop", { state: product?.category });
    }
  };

  return (
    <div>
      <div className="breadcrumb">
        <span>Home</span>
        <img src={arrowIcon} alt="" />
        <span>Shop</span>
        <img src={arrowIcon} alt="" />
        <div className="breadcrumb-current">{product?.name}</div>
      </div>
      {loading ? (
        <Loading />
      ) : error ? (
        <p>An error has occurred! Please reload the page</p>
      ) : (
        <div>
          <div className="product-details">
          <div className="product-images">
          <div className="thumbnails-container">
            {product?.other_images_link.map((img, i) => (
              <img
                key={i}
                className={`thumbnail ${mainImage === img ? "selected" : ""}`}
                src={img}
                onClick={() => setMainImage(img)}
                alt=""
              />
            ))}
          </div>

          <div className="main-image-container">
            <img
              className="product-main-image"
              src={mainImage}
              alt=""
            />
          </div>
        </div>

            <div className="product-info">
              <h2 className="product-name">{product?.name}</h2>
              <h3 className="product-price">Rp {product?.price}</h3>
              <div className="product-rating">
                <div className="stars">
                  <img src={starIcon} alt="" />
                  <img src={starIcon} alt="" />
                  <img src={starIcon} alt="" />
                  <img src={starIcon} alt="" />
                  <img src={starIcon} alt="" />
                </div>
                <div className="review">5 Customer Review</div>
              </div>
              <p className="product-description">{product?.large_description}</p>
              <p className="label">Size</p>
              <div className="size-buttons">
                <button
                  className={`size-btn ${activeButtonSize === 0 ? "active" : ""}`}
                  onClick={() => setActiveSizeButton(0)}
                >
                  L
                </button>
                <button
                  className={`size-btn ${activeButtonSize === 1 ? "active" : ""}`}
                  onClick={() => setActiveSizeButton(1)}
                >
                  XL
                </button>
                <button
                  className={`size-btn ${activeButtonSize === 2 ? "active" : ""}`}
                  onClick={() => setActiveSizeButton(2)}
                >
                  XS
                </button>
              </div>
              <p className="label">Color</p>
              <div className="color-options">
                <button
                  className={`color-btn ${color === 0 ? "active" : ""}`}
                  style={{ backgroundColor: "#5a67d8" }}
                  onClick={() => setColor(0)}
                />
                <button
                  className={`color-btn ${color === 1 ? "active" : ""}`}
                  style={{ backgroundColor: "black" }}
                  onClick={() => setColor(1)}
                />
                <button
                  className={`color-btn ${color === 2 ? "active" : ""}`}
                  style={{ backgroundColor: "#3182ce" }}
                  onClick={() => setColor(2)}
                />
              </div>
              <div className="quantity-section">
                <div className="quantity-selector">
                  <button
                    className="quantity-btn"
                    onClick={() => {
                      productQuantity === 1
                        ? setProductQuantity(1)
                        : setProductQuantity(productQuantity - 1);
                    }}
                  >
                    -
                  </button>
                  {productQuantity}
                  <button
                    className="quantity-btn"
                    onClick={() => {
                      setProductQuantity(productQuantity + 1);
                    }}
                  >
                    +
                  </button>
                </div>
                <button
                  className="add-to-cart-btn"
                  onClick={() => setShowNotification(true)}
                >
                  Add To Cart
                </button>
                {showNotification && (
                  <Alert
                    message="Item added to cart!"
                    duration={3000}
                    onClose={() => setShowNotification(false)}
                  />
                )}
                <button className="compare-btn">+ Compare</button>
              </div>
              <hr />
              <div className="product-meta">
                <div className="meta-left">
                  <span>SKU</span>
                  <span>Category</span>
                  <span>Tag</span>
                  <span>Share</span>
                </div>
                <div className="meta-right">
                  <span>: {product?.sku}</span>
                  <span>: {category?.name}</span>
                  <span>: Sofa, Chair, Home, Shop</span>
                  <div className="social-icons">
                    <img src={facebookIcon} alt="Facebook" />
                    <img src={linkedinIcon} alt="LinkedIn" />
                    <img src={twitterIcon} alt="Twitter" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="product-description-section">
            <h2>Description</h2>
            <p>
              {product?.large_description}
            </p>
          </div>
          <h2 className="related-products-title">Related Products</h2>
          <ProductsSection limit={limitProducts} category={product?.category} />
          <div className="show-more-container">
            <button className="show-more-btn" onClick={handleShowMore}>
              Show More
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ProductDetails;
