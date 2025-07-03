import Image from "next/image";
import styles from "@/css/main/main.module.css";
import headerStyles from "@/css/main/header.module.css";

export default function MainPage() {
  return (
    <div className={styles.container}>
      <header>
        <div className={headerStyles.headerImage}>
          <Image
            src="placeholder.svg"
            alt="header-image"
            width="100"
            height="100"
          />
        </div>
        <div className={headerStyles.headerRight}></div>
      </header>
      <main>This is the main component</main>
      <footer>This is the footer</footer>
    </div>
  );
}
