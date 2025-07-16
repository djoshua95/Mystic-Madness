export type PagedResult<T> = {
  items: T;
  totalItems: number;
  pageNumber: number;
  pageSize: number;
};

export type DataResult<T> = {
  data?: T;
  message: string;
  success: boolean;
};

export type Attachment = {
  id: number;
  link: string;
  description: string;
  type: string;
  format: string;
};

export type Product = {
  attachments: Attachment[];
  id: number;
  name: string;
  price: number;
  stock: number;
  model: string;
  categoryId: number;
  category: { id: number; name: string };
};

export type CartItem = {
  id: number;
  quantity: number;
  userId: number;
  productId: number;
  product: Product;
};
