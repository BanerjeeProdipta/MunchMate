import { Item } from "@/types";
import { create, GetState, SetState } from "zustand";

interface CartState {
  cart: Item[];
  addItem: (item: Item) => void;
  removeItem: (item: Item) => void;
}
const cartStore = (set: SetState<CartState>, get: GetState<CartState>) => ({
  cart: [],

  addItem: (item: Item) => {
    const { cart } = get();

    set({ cart: [...cart, item] });
  },

  removeItem: (item: Item) => {
    const { cart } = get();
    const index = cart.findIndex((cartItem) => cartItem.id === item.id);
    let updatedCart;
    if (index !== -1) {
      updatedCart = cart.splice(index, 1);
    }
    console.log({ cart, index, updatedCart });

    set({ cart: updatedCart });
  },
});

const useCartStore = create<CartState>(cartStore);

export default useCartStore;
