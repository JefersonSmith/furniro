import { Product } from "./Product";
export interface UseProductByIdResult {
  product: Product | undefined;
  error: string | null;
  loading: boolean;
}