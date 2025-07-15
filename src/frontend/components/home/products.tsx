import Image from "next/image";
import { type Product } from "@/lib/definitions";
import { getPagedProducts } from "@/lib/services/product-service";
import productsStyles from "@/css/main/products.module.css";

export default async function Products(props: { category: string }) {
  const products = await getPagedProducts({
    category: props.category,
    pageNumber: "1",
    pageSize: "25",
  });

  return (
    <div className={productsStyles.grid}>
      {products &&
        products.map((p: Product) => {
          const firstAttachment =
            p.attachments?.length > 0 ? p.attachments[0] : null;
          return (
            <div key={p.id} className={productsStyles.card}>
              <div className={productsStyles.imageContainer}>
                {firstAttachment && (
                  <Image
                    src={firstAttachment.link}
                    alt={firstAttachment.description}
                    width={300}
                    height={300}
                  />
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
}
