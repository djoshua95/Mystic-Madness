export type DataResult<T> = {
  data?: {
    items: T[];
    totalItems: number;
    pageNumber: number;
    pageSize: number;
  };
  message: string;
  success: boolean;
};

export type Product = {
  imageUrl: string;
  imageAlt: string;
  id: number;
  name: string;
  price: string;
  stock: number;
  model: string;
  category: { id: number; name: string };
};
