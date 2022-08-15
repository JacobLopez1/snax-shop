import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  itemCount: 0,
};

export const cartSlice = createSlice({
  name: 'cartSlice',
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
        cart: inCart ? state.cart.map(item => item.id === action.payload.id ? {...item, qty: item.qty + 1} : item): [...state.cart, {...action.payload, qty: 1}],
        itemCount: itemCount += 1,
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item !== action.payload)
    },
    getCartItems: (state) => {
      return cartSlice.cart
    },
  },
});

export const { addToCart, removeFromCart, getCartItems } = cartSlice.actions;

export default cartSlice.reducer;
