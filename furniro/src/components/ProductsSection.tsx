import React from "react";
import { useProducts } from "../hooks/useProducts";
import Loading from "./Loading";
import CardProduct from "./CardProduct";
import './styles.css'; 

interface ProductSectionProps {
  limit?: number;
}

const ProductsSection: React.FC<ProductSectionProps> = ({ limit }: ProductSectionProps) => {
  const { products, loading, error } = useProducts({ limit });
  
  return (
    <div className="products-section">
      <div className="products-grid">
        {loading ? (
          <Loading />
        ) : error ? (
          <p>An error has occurred! Please reload the page</p>
        ) : (
          products.map((product) => (
            <CardProduct
              key={product.id}
              id={product.id}
              name={product.name}
              imageLink={product.image_link}
              category={product.category}
              price={product.price}
              discountPrice={product.discount_price}
              discountPercent={product.discount_percent}
              isNew={product.is_new}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsSection;
