import Image from "next/image";
import Products from "@/components/home/products";
import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import styles from "@/css/main/main.module.css";
import headerStyles from "@/css/main/header.module.css";
import optionsStyles from "@/css/main/options.module.css";
import categoriesStyles from "@/css/main/categories.module.css";
import footerStyles from "@/css/main/footer.module.css";

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
          </div>
          <div className={categoriesStyles.container}>
            <div className={categoriesStyles.grid}>
              <div className={categoriesStyles.categoryBox}>Hoodies</div>
              <div className={categoriesStyles.categoryBox}>Jewelry</div>
              <div className={categoriesStyles.categoryBox}>Socks</div>
              <div className={categoriesStyles.categoryBox}>Custom</div>
            </div>
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
