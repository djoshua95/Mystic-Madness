import { constants } from "@/lib/constants";
import { CartItem, DataResult } from "@/lib/definitions";
import { User } from "@auth0/nextjs-auth0/types";

export async function getCartItems({
  user,
  token,
}: {
  user?: User;
  token: string;
}) {
  if (user == null) return null;

  const baseUrl = `${constants.BACKEND_URL}/api/CartItem/${user.sub}`;
  let response: DataResult<CartItem[]> | null = null;
  let cartItems: CartItem[] | null = null;

  try {
    const request = await fetch(baseUrl, {
      headers: { authorization: `Bearer ${token}` },
    });

    if (!request.ok) {
      console.error("Request failed;");
      return cartItems;
    }

    response = await request.json();

    if (response == null || response.success === false) {
      console.error(response?.message);
      return cartItems;
    }

    cartItems = response?.data ?? null;
  } catch (e) {
    console.error(e);
  }
  return cartItems;
}

export async function updateCartItems({
  user,
  token,
  cartItems,
}: {
  user?: User;
  token: string;
  cartItems: CartItem[];
}) {
  if (user == null) return null;

  const baseUrl = `${constants.BACKEND_URL}/api/CartItem`;
  try {
    const request = await fetch(baseUrl, {
      body: JSON.stringify(cartItems),
      method: "PUT",
      headers: { authorization: `Bearer ${token}` },
    });

    if (!request.ok) console.error("Request failed;");
  } catch (e) {
    console.error(e);
  }
}
