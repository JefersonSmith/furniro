import { FetchProductsParams } from "../interface/FetchProductsParams";
import { Product } from "../interface/Product";
import { API } from "./api";

interface PaginatedProductsResponse {
  results: number;
  startIndex: number;
  endIndex: number;
  products: Product[];
}

export const getProducts = async (
  params: FetchProductsParams
): Promise<PaginatedProductsResponse> => {  
  const queryParams: string[] = [];
  const {
    page,
    limit,
    name,
    category,
    isNew,
    maxPrice,
    sortBy,
    sortDirection,
  } = params;

  if (page) {
    queryParams.push(`page=${page}`);
  }
  if (limit) {
    queryParams.push(`limit=${limit}`);
  }
  if (name) {
    queryParams.push(`name=${encodeURIComponent(name)}`);
  }
  if (category) {
    queryParams.push(`category=${category}`);
  }
  if (isNew) {
    queryParams.push(`isNew=${isNew}`);
  }
  if (maxPrice) {
    queryParams.push(`maxPrice=${maxPrice}`);
  }
  if (sortBy) {
    queryParams.push(`sortBy=${sortBy}`);
  }
  if (sortDirection) {
    queryParams.push(`sortDirection=${sortDirection}`);
  }

  const endPoint = `/product?${queryParams.join("&")}`;

  try {
    const response = await API.get<PaginatedProductsResponse>(endPoint); 
    return response.data; 
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching products:", error.message);
      throw error;
    } else {
      console.error("An unknown error occurred while fetching products.");
      throw new Error("An unknown error occurred while fetching products.");
    }
  }
};


export const fetchProductById = async (id: string | undefined): Promise<Product> => {
  try {
    const response = await API.get<Product>(`/product/${id}`);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error fetching product by ID ${id}:`, error.message);
      throw error;
    } else {
      console.error(`Unknown error fetching product by ID ${id}.`);
      throw new Error("An unknown error occurred while fetching the product.");
    }
  }
};
