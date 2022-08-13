import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'products',
  initialState,

  reducers: {
    addToCart: (state, action) => {
      // Check if the item is in the cart
      const inCart = state.cart.find(item => {
        return(
          (item.id === action.payload.id) ? true : false
        )
      })

      return {
        ...state,
        cart: inCart ? state.cart.map(item => item.id === action.payload.id ? {...item, qty: item.qty ? item.qty + 1 : 2} : item): [...state.cart, action.payload]
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item !== action.payload)
    },
    getCartItems: (state) => {
      return state.cart
    },
  },
});

export const { addToCart, removeFromCart, getCartItems } = cartSlice.actions;

export default cartSlice.reducer;
