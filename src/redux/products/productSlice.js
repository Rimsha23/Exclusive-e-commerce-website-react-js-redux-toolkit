import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    viewAllProducts: false,
   products:[],
  },
  reducers: {
    showAllProducts: (state) => {
      state.viewAllProducts = !state.viewAllProducts;
    },
    addToFavourites:(state,action)=>{
      state.products.push(action.payload)
    },
   
  },
});

export const { showAllProducts,addToFavourites } = productSlice.actions;
export const productReducer= productSlice.reducer;
