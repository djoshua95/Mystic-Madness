"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Logos } from "..";
import { X, Heart, ShoppingBag, User } from "lucide-react";
import styles from "@/css/home/mobile-menu.module.css";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`${styles.menu} ${isOpen ? styles.menuOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className={styles.header}>
          <Logos.MysticMadnessLogo
            width="32"
            height="32"
            className={styles.menuLogo}
          />
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="#" className={styles.navLink} onClick={onClose}>
                New Arrivals
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#" className={styles.navLink} onClick={onClose}>
                Women
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#" className={styles.navLink} onClick={onClose}>
                Men
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#" className={styles.navLink} onClick={onClose}>
                Accessories
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#" className={styles.navLink} onClick={onClose}>
                Sale
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <button className={styles.actionButton}>
            <User size={20} />
            <span>My Account</span>
          </button>
          <button className={styles.actionButton}>
            <Heart size={20} />
            <span>Wishlist</span>
          </button>
          <button className={styles.actionButton}>
            <ShoppingBag size={20} />
            <span>Shopping Cart (3)</span>
          </button>
        </div>
      </div>
    </>
  );
}
