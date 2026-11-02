import { create } from "zustand";

const useCart = create((set) => ({
  cartItems: [],
  cartTotal: 0,
  addItem: (item, price) =>
    set((state) => ({
      cartItems: [...state.cartItems, { ...item, price }],
      cartTotal: state.cartTotal + price,
    })),
  removeItem: (item) =>
    set((state) => {
      const index = state.cartItems.findIndex(
        (i) => i.foodName === item.foodName,
      );
      if (index === -1) return state;
      return {
        cartItems: state.cartItems.filter((_, i) => i !== index),
        cartTotal: state.cartTotal - state.cartItems[index].price,
      };
    }),
}));

function AddToCart() {
  const addItem = useCart((state) => state.addItem);

  return (
    <button onClick={() => addItem({ foodName: "apple" }, 5)}>
      add to cart
    </button>
  );
}

// import { useState } from "react";

// export default function addtoCart(){
// const [addproduct, setaddProduct] = useState([]);
// const[active, setActive] = useState(false);

// const handleAddedProduct = (product) =>{
// setActive(!active);
// const productId = (product.id)
// product.id = addproduct.find(producttitem => producttitem === productId);
// }

// }
