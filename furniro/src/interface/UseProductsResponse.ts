import { Product } from "./Product";
export interface UseProductsResult {
  products: Product[];
  error: string | null;
  loading: boolean;
}