import { type Product } from "./definitions";
import Image from "next/image";
import productsStyles from "@/css/main/products.module.css";

export default async function Products() {
  try {
    const request = await fetch(
      "http://localhost:5084/api/products?category=custom",
    );
    const products = await request.json();
    return (
      <div className={productsStyles.grid}>
        {products &&
          products.map((p: Product) => (
            <div className={productsStyles.card}>
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
  } catch (e) {
    console.log(e);
    return null;
  }
}
