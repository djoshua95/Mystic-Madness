import Image from "next/image";
import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import styles from "@/css/main/main.module.css";
import headerStyles from "@/css/main/header.module.css";
import optionsStyles from "@/css/main/options.module.css";
import productsStyles from "@/css/main/products.module.css";
import footerStyles from "@/css/main/footer.module.css";

export default function MainPage() {
  return (
    <div className={styles.container}>
      <header className={styles.grid}>
        <div className={styles.sideItem}>
          <MenuIcon />
        </div>
        <div className={headerStyles.header}>
          <Image
            src="/placeholder.svg"
            alt="header-image"
            width="100"
            height="100"
          />
        </div>
        <div className={styles.sideItem}>
          <ShoppingCartIcon />
        </div>
      </header>
      <main>
        <div className={styles.grid}>
          <div />
          <div className={optionsStyles.container}>
            <div className={optionsStyles.logo}>M</div>
          </div>
          <div />
        </div>
        <div className={styles.grid}>
          <div />
          <div className={productsStyles.grid}>
            <div className={productsStyles.card}>
              <div className={productsStyles.imageContainer}>
                <Image
                  src={"/placeholder.svg"}
                  alt={"placeholder"}
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <div className={productsStyles.card}>
              <div className={productsStyles.imageContainer}>
                <Image
                  src={"/placeholder.svg"}
                  alt={"placeholder"}
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
          <div />
        </div>
      </main>
      <footer className={`${footerStyles.footer} ${styles.grid}`}>
        <div />
        <div className={footerStyles.content}>© Mystic Madness</div>
        <div />
      </footer>
    </div>
  );
}
