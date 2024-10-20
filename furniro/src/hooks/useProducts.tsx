import { useState, useEffect } from "react";
import { UseProductsResult } from "../interface/UseProductsResponse";
import { Product } from "../interface/Product";
import { getProducts } from "../api/products";
import { FetchProductsParams } from "../interface/FetchProductsParams";

export const useProducts = ({
  page,
  limit,
  name,
  category,
  isNew,
  maxPrice,
  sortBy,
  sortDirection,
}: FetchProductsParams): UseProductsResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const data = await getProducts({
          page,
          limit,
          name,
          category,
          isNew,
          maxPrice,
          sortBy,
          sortDirection,
        });
        
        // Limit the number of products to the specified limit
        setProducts(data.slice(0, limit)); // Ensure only 'limit' number of products are set

        setLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };

    loadProducts();
  }, [page, limit, name, category, isNew, maxPrice, sortBy, sortDirection]);

  return { products, error, loading };
};