import { Category } from "./Category";
export interface UseCategoriesResult {
  categories: Category[];
  error: string | null;
  loading: boolean;
}