import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Heart } from "lucide-react";
import styles from "@/css/home/products.module.css";

// Sample data
const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    category: "Women",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    isNew: true,
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    category: "Men",
    price: 59.99,
    image: "/placeholder.svg?height=300&width=300",
    isNew: false,
  },
  {
    id: 3,
    name: "Summer Floral Dress",
    category: "Women",
    price: 79.99,
    image: "/placeholder.svg?height=300&width=300",
    isNew: true,
  },
  {
    id: 4,
    name: "Leather Crossbody Bag",
    category: "Accessories",
    price: 49.99,
    image: "/placeholder.svg?height=300&width=300",
    isNew: false,
  },
  {
    id: 5,
    name: "Canvas Sneakers",
    category: "Footwear",
    price: 39.99,
    image: "/placeholder.svg?height=300&width=300",
    isNew: false,
  },
  {
    id: 6,
    name: "Denim Jacket",
    category: "Men",
    price: 89.99,
    image: "/placeholder.svg?height=300&width=300",
    isNew: true,
  },
  {
    id: 7,
    name: "Oversized Sunglasses",
    category: "Accessories",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
    isNew: false,
  },
  {
    id: 8,
    name: "Striped Button-Up Shirt",
    category: "Men",
    price: 44.99,
    image: "/placeholder.svg?height=300&width=300",
    isNew: false,
  },
];

export default function Products() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Products</h2>
          <Link href="#" className={styles.viewAll}>
            View all <ChevronRight size={16} style={{ marginLeft: "4px" }} />
          </Link>
        </div>
        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                />
                {product.isNew && <div className={styles.badge}>New</div>}
                <button className={styles.wishlistButton}>
                  <Heart size={16} />
                </button>
              </div>
              <div className={styles.content}>
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.category}>{product.category}</p>
                <p className={styles.price}>${product.price.toFixed(2)}</p>
              </div>
              <div className={styles.footer}>
                <button className={styles.addButton}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
