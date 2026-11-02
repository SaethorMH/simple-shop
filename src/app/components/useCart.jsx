import { create } from "zustand";

export const useCart = create((set) => ({
  cartItems: [],
  cartTotal: 0,
  addItem: (product) =>
    set((state) => ({
      cartItems: [...state.cartItems, product],
      cartTotal: state.cartTotal + product.price,
    })),
  removeItem: (product) =>
    set((state) => {
      const index = state.cartItems.findIndex((i) => i.id === product.id);
      if (index === -1) return state;
      return {
        cartItems: state.cartItems.filter((item, i) => i !== index),
        cartTotal: state.cartTotal - state.cartItems[index].price,
      };
    }),
}));
