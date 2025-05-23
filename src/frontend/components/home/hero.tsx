import Image from "next/image";
import styles from "@/css/home/hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImage}>
        <Image
          src="/placeholder.svg?height=500&width=1920"
          alt="Hero image"
          width={1920}
          height={500}
          priority
        />
        <div className={styles.overlay} />
        <div className={styles.content}>
          <div className={styles.contentInner}>
            <h1 className={styles.title}>Summer Collection 2025</h1>
            <p className={styles.description}>
              Discover the latest trends and styles for the summer season.
            </p>
            <button className={styles.button}>Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}
