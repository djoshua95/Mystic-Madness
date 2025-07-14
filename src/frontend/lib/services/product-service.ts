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
      console.log("pailas");
      return products;
    }

    products =
      response?.data?.items?.map(
        (p: any) =>
          ({
            imageUrl: "https://picsum.photos/200/200",
            imageAlt: "example",
            ...p,
          }) as Product,
      ) ?? null;
  } catch (e) {
    console.log(e);
  }
  return products;
}
