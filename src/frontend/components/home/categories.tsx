import Image from "next/image";
import Link from "next/link";
import styles from "@/css/home/categories.module.css";

const categories = [
  {
    name: "Women",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Men",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Accessories",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Footwear",
    image: "/placeholder.svg?height=300&width=300",
  },
];

export default function Categories() {
  return (
    <section className={`container ${styles.section}`}>
      <h2 className={styles.title}>Shop by Category</h2>
      <div className={styles.grid}>
        {categories.map((category) => (
          <Link key={category.name} href="#" className={styles.category}>
            <Image
              src={category.image || "/placeholder.svg?height=180&width=300"}
              alt={category.name}
              width={300}
              height={180}
            />
            <div className={styles.categoryOverlay} />
            <div className={styles.categoryContent}>
              <h3 className={styles.categoryName}>{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
