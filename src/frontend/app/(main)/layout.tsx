import { Home } from "@/components";
import styles from "@/css/home/page.module.css";
import headerStyles from "@/css/home/header.module.css";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.main}>
      {/* Top announcement bar */}
      <div className={headerStyles.announcement}>
        Free shipping on orders over $70.000 | Use code WELCOME10 for 10% off
        your first order
      </div>

      <Home.Header />

      <main>{children}</main>

      <Home.Footer />
    </div>
  );
}
