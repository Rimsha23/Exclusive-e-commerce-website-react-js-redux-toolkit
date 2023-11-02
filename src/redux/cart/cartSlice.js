import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize an empty array to store cart items
  },
  reducers: {
    addItemToCart: (state, action) => {
      // Add a particular item to the cart
      state.items.push(action.payload);
    },
    addAllItemsToCart: (state, action) => {
      // Add all items to the cart
      state.items = [...state.items, ...action.payload];
    },
    removeAllItemsFromCart: (state) => {
      // Remove all items from the cart
      state.items = [];
    },
    removeItemFromCart: (state, action) => {
      // Remove a particular item from the cart
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const {
  addItemToCart,
  addAllItemsToCart,
  removeAllItemsFromCart,
  removeItemFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
