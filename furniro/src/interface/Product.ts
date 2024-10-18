export interface Product {
    id: number;
    name: string;
    sku: string;
    category: number;
    description: string;
    large_description: string;
    price: number;
    discount_price: number;
    discount_percent: number;
    is_new: boolean;
    image_link: string;
    other_images_link: string[];
    created_date: string;
    updated_date: string;
  }