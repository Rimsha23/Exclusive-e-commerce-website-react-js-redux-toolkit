import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.items.push(newItem);
      }
    },
    addAllItemsToCart: (state, action) => {
      const newItems = action.payload;
      newItems.forEach((newItem) => {
        const existingItem = state.items.find((item) => item.id === newItem.id);
        if (existingItem) {
          existingItem.quantity += newItem.quantity;
        } else {
          state.items.push(newItem);
        }
      });
    },
    updateCartItemQuantity: (state, action) => {
      const { productId, newQuantity } = action.payload;
      state.items = state.items.map((item) => {
        if (item.id === productId && newQuantity >= 0) {
          item.quantity = newQuantity;
        }
        return item;
      });
    },
    removeAllItemsFromCart: (state) => {
      state.items = [];
    },
    removeItemFromCart: (state, action) => {
      const index = action.payload;
      state.items.splice(index, 1);
    },

  },
});

export const {
  addItemToCart,
  addAllItemsToCart,
  removeAllItemsFromCart,
  removeItemFromCart,
  updateCartItemQuantity
} = cartSlice.actions;

export default cartSlice.reducer;
