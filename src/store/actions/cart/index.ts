import { cartSlice } from '@src/store/slices';

export const {
  addProductToCart,
  canChangeCart,
  checkoutCart,
  removeProductCart,
  setupCart,
  updateProductCart,
} = cartSlice.actions;
