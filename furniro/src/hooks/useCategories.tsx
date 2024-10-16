import { useState, useEffect } from "react";
import { getCategories } from "../api/category";
import { Category } from "../interface/Category";
import { UseCategoriesResult } from "../interface/UseCategoriesResponse";
export const useCategories = (): UseCategoriesResult => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const loadCategories = async () => {
      setLoading(true);
      try {
        const data = await getCategories();
        setCategories(data);
        setLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };
    loadCategories();
  }, []);
  return { categories, error, loading };
};