import { cartSlice } from '@src/store/slices';

export const {
  addProductToCart,
  canChangeCart,
  clearCart,
  removeProductCart,
  setupCart,
  updateProductCart,
} = cartSlice.actions;
