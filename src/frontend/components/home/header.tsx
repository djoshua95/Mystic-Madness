"use client";

import Link from "next/link";
import { useState } from "react";
import { Logos, MobileMenu, ThemeToggle } from "..";
import { Heart, Menu, Search, ShoppingCart, User } from "lucide-react";
import styles from "@/css/home/header.module.css";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerContainer}>
            <div className={styles.headerLeft}>
              <Logos.MysticMadnessLogo width="32" height="32" />
              <nav className={styles.nav}>
                <Link href="#" className={styles.navLink}>
                  New Arrivals
                </Link>
                <Link href="#" className={styles.navLink}>
                  Women
                </Link>
                <Link href="#" className={styles.navLink}>
                  Men
                </Link>
                <Link href="#" className={styles.navLink}>
                  Accessories
                </Link>
                <Link href="#" className={styles.navLink}>
                  Sale
                </Link>
              </nav>
            </div>

            <div className={styles.headerRight}>
              <div className={styles.searchContainer}>
                <Search className={styles.searchIcon} size={16} />
                <input
                  type="search"
                  placeholder="Search products..."
                  className={styles.searchInput}
                />
              </div>

              <div className={styles.desktopActions}>
                <ThemeToggle />
                <button className={styles.iconButton}>
                  <Heart size={20} />
                </button>
                <button className={styles.iconButton}>
                  <ShoppingCart size={20} />
                  <span className={styles.badge}>3</span>
                </button>
                <button className={styles.iconButton}>
                  <User size={20} />
                </button>
              </div>
            </div>

            <div className={styles.mobileActions}>
              <ThemeToggle />
              <button className={styles.iconButton}>
                <ShoppingCart size={20} />
                <span className={styles.badge}>3</span>
              </button>
              <button
                className={styles.iconButton}
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
