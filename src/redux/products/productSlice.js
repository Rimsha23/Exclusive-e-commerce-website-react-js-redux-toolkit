import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    viewAllProducts: false,
   
  },
  reducers: {
    showAllProducts: (state) => {
      state.viewAllProducts = !state.viewAllProducts;
    },
  },
});

export const { showAllProducts } = productSlice.actions;
export const productReducer= productSlice.reducer;
