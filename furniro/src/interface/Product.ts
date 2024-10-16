export interface Product {
    id: number;
    name: string;
    sku: string;
    categoryId: number;
    description: string;
    largeDescription: string;
    price: number;
    discountPrice: number;
    discountPercent: number;
    isNew: boolean;
    imageLink: string;
    otherImagesLink: string[];
    createdDate: string;
    updatedDate: string;
  }