import { createSlice } from "@reduxjs/toolkit";
import IProduct from "../../services/interfaces/productInterface";
import IInitialState from "../../services/interfaces/initialStateInterface";

const initialState: IInitialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newProduct: IProduct = action.payload;
      const existingProduct = state.cartItems.find(
        (el: any) => el.id === newProduct.id
      );
      state.totalQuantity += 1;

      if (!existingProduct) {
        state.cartItems.push({
          id: newProduct.id,
          image: newProduct.image,
          title: newProduct.title,
          description: newProduct.description,
          price: newProduct.price,
          quantity: 1,
          totalPrice: newProduct.price,
        });
      } else {
        existingProduct.quantity += 1;
        existingProduct.totalPrice =
          Number(existingProduct.totalPrice) + Number(newProduct.price);
      }
      state.totalAmount = state.cartItems.reduce((total: any, item: any) => {
        return total + Number(item.price) * Number(item.quantity);
      }, 0);
    },

    deleteProduct: (state, action) => {
      const id = action.payload.id;
      const existingProduct = state.cartItems.find((el: any) => {
        return el.id === id;
      });

      if (existingProduct) {
        state.cartItems = state.cartItems.filter((el: any) => el.id !== id);
        state.totalQuantity = state.totalQuantity - existingProduct.quantity;
      }

      state.totalAmount = state.cartItems.reduce((total: any, item: any) => {
        return total + Number(item.price) * Number(item.quantity);
      }, 0);
    },

    clearCart: () => initialState,
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
