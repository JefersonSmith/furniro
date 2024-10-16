export interface FetchProductsParams {
    page?: number;
    limit?: number;
    name?: string;
    category?: number;
    isNew?: boolean;
    maxPrice?: number;
    sortBy?: string;
    sortDirection?: string;
  }