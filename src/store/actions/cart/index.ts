import { cartSlice } from '@src/store/slices';

export const {
  addProductToCart,
  canChangeCart,
  clearCart,
  removeProductCart,
  setupCart,
  updateProductCart,
  setCartAddress,
  cancelCartAddress,
  setCartPayment,
} = cartSlice.actions;
