import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    viewAllProducts: false,
    products: [],
    searchProduct: '',
  },
  reducers: {
    showAllProducts: (state) => {
      state.viewAllProducts = !state.viewAllProducts;
    },
    addToFavourites: (state, action) => {
      state.products.push(action.payload)
    },
    searchByName: (state, action) => {
      state.searchProduct = action.payload;
    }
  },
});

export const { showAllProducts, addToFavourites, searchByName } = productSlice.actions;
export const productReducer = productSlice.reducer;
