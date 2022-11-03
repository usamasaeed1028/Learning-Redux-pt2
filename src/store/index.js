import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  quantity: 0,
  totalPrice: 0,
  isShowCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    showCart(state) {
      state.isShowCart = !state.isShowCart;
    },
    addItemToCart(state, action) {
      if (state.items.length < 1) {
        state.items.push(action.payload);
        state.quantity++;
        state.totalPrice = action.payload.price;
      } else {
        const filterItem = state.items.find(
          (item) => item.id === action.payload.id
        );
        if (filterItem) {
          filterItem.quantity++;
          
          const totalPrice = state.totalPrice + action.payload.price;
          state.totalPrice = totalPrice;
          state.quantity++;
        } else {
          state.items.push(action.payload);
          const totalPrice = state.totalPrice + action.payload.price;
          state.totalPrice = totalPrice;

          state.quantity++;
        }
      }
    },
    removeItemFromCart(state, action) {
      const filterItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      state.items = filterItems;
      const totalPrice = state.totalPrice - action.payload.price*action.payload.quantity;
          state.totalPrice = totalPrice;
      const updatedQuantity = state.quantity - action.payload.quantity;
      state.quantity = updatedQuantity;
    },
    removeItemQtyFromCart(state, action) {
      action.payload.quantity--;

      state.quantity--;
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const cartActions = cartSlice.actions;
export default store;
