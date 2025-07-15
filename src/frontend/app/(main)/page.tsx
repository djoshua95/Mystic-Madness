import Image from "next/image";
import Link from "next/link";
import Products from "@/components/home/products";
import { createPageURL } from "@/lib/utils";
import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import styles from "@/css/main/main.module.css";
import headerStyles from "@/css/main/header.module.css";
import optionsStyles from "@/css/main/options.module.css";
import categoriesStyles from "@/css/main/categories.module.css";
import footerStyles from "@/css/main/footer.module.css";

export default async function MainPage(props: {
  searchParams: Promise<{ category: string }>;
}) {
  const params = await props.searchParams;
  return (
    <div className={styles.grid}>
      <div className={styles.sideItem}>
        <MenuIcon />
      </div>
      <div>
        <header>
          <div className={headerStyles.header}>
            <Image
              src="https://t3.ftcdn.net/jpg/07/32/10/90/360_F_732109080_4lXwGofazqAiysUpcCnrbflsNOl9EMdW.jpg"
              alt="header-image"
              width={857}
              height={263}
              priority
              quality={100}
            />
          </div>
        </header>
        <main>
          <div className={optionsStyles.container}>
            <div className={optionsStyles.logo}>M</div>
          </div>
          <div className={categoriesStyles.container}>
            <div className={categoriesStyles.grid}>
              <Link
                href={createPageURL("/", { category: "Hoodies" })}
                className={categoriesStyles.categoryBox}
              >
                Hoodies
              </Link>
              <Link
                href={createPageURL("/", { category: "Jewelry" })}
                className={categoriesStyles.categoryBox}
              >
                Jewelry
              </Link>
              <Link
                href={createPageURL("/", { category: "Socks" })}
                className={categoriesStyles.categoryBox}
              >
                Socks
              </Link>
              <Link
                href={createPageURL("/", { category: "Custom" })}
                className={categoriesStyles.categoryBox}
              >
                Custom
              </Link>
            </div>
          </div>
          <Products category={params.category} />
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
