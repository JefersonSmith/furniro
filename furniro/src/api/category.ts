import { API } from "./api";
import { Category } from "../interface/Category";

export const getCategories = async (): Promise<Category[]> => {
  try {
    const result = await API.get<Category[]>("/category");
    return result.data;
  } catch (err: any) {
    if (err instanceof Error) {
      console.error("Failed to retrieve categories:", err.message);
      throw new Error(`Unable to load categories: ${err.message}`);
    } else {
      console.error("Unexpected error occurred during category retrieval.");
      throw new Error("An unexpected error occurred.");
    }
  }
};
