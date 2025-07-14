import Image from "next/image";
import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import styles from "@/css/main/main.module.css";
import headerStyles from "@/css/main/header.module.css";
import optionsStyles from "@/css/main/options.module.css";
import footerStyles from "@/css/main/footer.module.css";
import Products from "@/components/home/products";

export default function MainPage() {
  return (
    <div className={styles.grid}>
      <div className={styles.sideItem}>
        <MenuIcon />
      </div>
      <div>
        <header>
          <div className={headerStyles.header}>
            <Image
              src="/placeholder.svg"
              alt="header-image"
              width="100"
              height="100"
            />
          </div>
        </header>
        <main>
          <div className={optionsStyles.container}>
            <div className={optionsStyles.logo}>M</div>
            <div>Chosen option</div>
          </div>
          <Products />
        </main>
        <footer className={footerStyles.footer}>
          <div className={footerStyles.content}>© Mystic Madness</div>
        </footer>
      </div>
      <div className={styles.sideItem}>
        <ShoppingCartIcon />
      </div>
    </div>
  );
}
