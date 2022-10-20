import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: <any>[],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCartIndex = state.cart.findIndex(
        (item: { id: number }) => item.id === action.payload.id
      );
      if (itemInCartIndex>=0) {
        state.cart[itemInCartIndex].quantity = state.cart[itemInCartIndex].quantity + action.payload.quantity;
      } else {
        state.cart.push({ ...action.payload } as never);
      }
    },
    incrementQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item: { id: number }) => item.id === action.payload
      );
      state.cart[itemIndex].quantity++;
    },
    decrementQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item: { id: number }) => item.id === action.payload
      );
      if (state.cart[itemIndex].quantity === 1) {
        state.cart[itemIndex].quantity = 1;
      } else {
        state.cart[itemIndex].quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item: { id: number }) => item.id !== action.payload
      );
      state.cart = removeItem;
    },
    clearCart: (state, action) => {
      state.cart = [];
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  clearCart,
} = cartSlice.actions;
