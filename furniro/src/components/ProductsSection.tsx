import React, { useEffect } from "react";
import { useProducts } from "../hooks/useProducts";
import Loading from "./Loading";
import CardProduct from "./CardProduct";
import './styles.css'; 

interface ProductSectionProps {
  page?: number;
  limit?: number;
  name?: string;
  category?: number;
  isNew?: boolean;
  maxPrice?: number;
  sortBy?: string;
  sortDirection?: string;
}

const ProductsSection: React.FC<ProductSectionProps> = (props: ProductSectionProps) => {
  const { products, loading, error } = useProducts(props);

  // Ordenar produtos com desconto primeiro
  const sortedProducts = products.slice().sort((a, b) => {
    if (a.discount_price && !b.discount_price) return -1;
    if (!a.discount_price && b.discount_price) return 1;
    return 0;
  });

  return (
    <div className="products-section">
      <div className="products-grid">
        {loading ? (
          <div className="loading-container">
            <Loading />
          </div>
        ) : error ? (
          <p>An error has occurred! Please reload the page</p>
        ) : (
          sortedProducts.map((product) => (
            <CardProduct
              key={product.id}
              id={product.id}
              name={product.name}
              imageLink={product.image_link}
              category={product.category}
              price={product.price}
              discountPrice={product.discount_price}
              discountPercent={product.discount_percent}
              is_new={product.is_new}
              description={product.description}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsSection;
