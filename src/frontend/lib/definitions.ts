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
  price: string;
  stock: number;
  model: string;
  categoryId: number;
  category: { id: number; name: string };
};
