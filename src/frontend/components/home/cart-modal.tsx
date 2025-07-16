"use client";

import { User } from "@auth0/nextjs-auth0/types";
import { CartItem } from "@/lib/definitions";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { createPageURL } from "@/lib/utils";
import {
  getCartItems,
  updateCartItems,
} from "@/lib/services/cart-item-service";
import styles from "@/css/main/cart-modal.module.css";
import Link from "next/link";

export function CartModal({
  category,
  user,
  token,
}: {
  category?: string;
  user?: User;
  token: string;
}) {
  const previousParam = category ? { category } : {};
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const loggedOut = user == null;
  if (loggedOut) router.push("/auth/login");

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    const res = await getCartItems({ user, token });
    if (res == null) return;
    setCartItems(res);
  };

  const updateCart = async (cartItems: CartItem[]) => {
    await updateCartItems({ cartItems, token, user });
  };

  const updateQuantity = (itemId: number, newQuantity: number) => {
    const newCartItems = [...cartItems];
    const index = newCartItems.findIndex((ci) => ci.id == itemId);
    newCartItems[index].quantity = newQuantity;
    setCartItems(newCartItems);
  };

  const removeItem = (itemId: number) => {
    const newCartItems = [...cartItems];
    const index = newCartItems.findIndex((ci) => ci.id == itemId);
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const subtotal = cartItems.reduce(
    (sum: number, item: CartItem) => sum + item.product.price * item.quantity,
    0,
  );

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <h3 className={styles.title}>🛒 Shopping Cart</h3>
          <div className={styles.body}>
            {cartItems.length === 0 ? (
              <p className={styles.bodyText}>Your cart is empty</p>
            ) : (
              <>
                <div className={styles.cartItems}>
                  {cartItems.map((item: CartItem) => {
                    const attachment =
                      item.product.attachments.length > 0
                        ? item.product.attachments[0]
                        : null;
                    return (
                      <div key={item.id} className={styles.cartItem}>
                        {attachment && (
                          <img
                            src={attachment.link}
                            alt={item.product.name}
                            width={200}
                            className={styles.itemImage}
                          />
                        )}
                        <div className={styles.itemDetails}>
                          <h4 className={styles.itemName}>
                            {item.product.name}
                          </h4>
                          <p className={styles.itemPrice}>
                            ${item.product.price.toFixed(2)}
                          </p>
                          <div className={styles.quantityControls}>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className={styles.removeButton}
                        >
                          ×
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className={styles.cartFooter}>
                  <div className={styles.subtotal}>
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <Link href="/checkout" className={styles.checkoutButton}>
                    Proceed to Checkout
                  </Link>
                </div>
              </>
            )}
          </div>
          <div>
            <Link
              href={createPageURL("/", previousParam)}
              onClick={() => updateCart(cartItems)}
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
