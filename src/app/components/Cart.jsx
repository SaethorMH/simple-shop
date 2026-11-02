"use client";

import { useCart } from "./useCart";
import CartItem from "./CartItem";

export default function PaymentClient({ product }) {
  const cart = useCart((state) => state.cartItems);
  const total = useCart((state) => state.cartTotal);
  const remove = useCart((state) => state.removeItem);

  return cart.map((product) => <CartItem product={product} />);
}
