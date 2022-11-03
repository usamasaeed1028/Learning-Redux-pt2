import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    items: [],
    quantity:0,
    isShowCart: false
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    showCart(state) {
      !state.isShowCart;
    },
    addItemToCart(state, action) {
      state.items.push(action.payload);
      state.quantity++
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const cartActions = cartSlice.actions;
export default store;
