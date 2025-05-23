import Image from "next/image";
import styles from "@/css/home/promo.module.css";

export default function PromotionalBanner() {
  return (
    <section className={`container ${styles.section}`}>
      <div className={styles.banner}>
        <Image
          src="/placeholder.svg?height=300&width=1200"
          alt="Promotional banner"
          width={1200}
          height={300}
        />
        <div className={styles.overlay} />
        <div className={styles.content}>
          <div className={styles.inner}>
            <h2 className={styles.title}>Up to 50% Off Summer Sale</h2>
            <p className={styles.description}>
              {"Limited time offer. Shop now before it's gone!"}
            </p>
            <button className={styles.button}>Shop Sale</button>
          </div>
        </div>
      </div>
    </section>
  );
}
