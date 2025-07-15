import { DataResult, Product } from "@/lib/definitions";
import { constants } from "../constants";

export async function getPagedProducts(filter: {
  pageNumber: `${number}`;
  pageSize: `${number}`;
  category: string;
}) {
  const baseUrl = `${constants.BACKEND_URL}/api/Product/paged`;
  const searchParams = new URLSearchParams(filter);
  let response: DataResult<Product> | null = null;
  let products: Product[] | null = null;

  try {
    const fullUrl = `${baseUrl}?${searchParams.toString()}`;
    const request = await fetch(fullUrl);

    if (!request.ok) {
      console.log("Request failed;");
      return products;
    }

    response = await request.json();

    if (response == null || response.success === false) {
      return products;
    }

    products = response?.data?.items ?? null;
  } catch (e) {
    console.error(e);
  }
  return products;
}
