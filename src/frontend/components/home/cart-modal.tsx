import Link from "next/link";
import styles from "@/css/main/cart-modal.module.css";
import { createPageURL } from "@/lib/utils";

export async function CartModal({ category }: { category?: string }) {
  const previousParam = category ? { category } : {};
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <h3 className={styles.title}>🛒 Shopping Cart</h3>
          <div className={styles.body}>
            {/* TODO: fill with shopping cart options */}
          </div>
          <div>
            <Link
              href={createPageURL("/", previousParam)}
              className={styles.closeButton}
            >
              Close
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
