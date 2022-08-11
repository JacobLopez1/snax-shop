import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,

  reducers: {
    addToCart: (state, action) => {
      state.products.push(action.payload)
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(item === action.payload)
    },
    getCartItems: (state) => {
      console.log(state.products)
      return state.products
    },
  },
});

export const { addToCart, removeFromCart, getCartItems } = productSlice.actions;

export default productSlice.reducer;
