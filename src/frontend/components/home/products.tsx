import Image from "next/image";
import { type Product } from "@/lib/definitions";
import { getPagedProducts } from "@/lib/services/product-service";
import productsStyles from "@/css/main/products.module.css";

export default async function Products() {
  const products = await getPagedProducts({
    category: "Jewelry",
    pageNumber: "1",
    pageSize: "10",
  });

  return (
    <div className={productsStyles.grid}>
      {products &&
        products.map((p: Product) => (
          <div key={p.id} className={productsStyles.card}>
            <div className={productsStyles.imageContainer}>
              <Image
                src={p.imageUrl}
                alt={p.imageAlt}
                width={300}
                height={300}
              />
            </div>
          </div>
        ))}
    </div>
  );
}
