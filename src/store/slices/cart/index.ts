import uuid from 'react-native-uuid';
import { createSlice } from '@reduxjs/toolkit';
import { handleRemoveMask, handleInputMask } from '@src/utils';
import * as T from './types';

const initialState: T.Cart = {
  canChange: true,
  concluded: false,
  hasCurrent: false,
  current: null,
};

const keyGenerator = () => uuid.v4() as string;

const getTotal = (products: T.ProductCartPayload[]): string => {
  const values = products.map(({ total }) =>
    Number(handleRemoveMask(total, 'money', { withComma: false })),
  );

  if (!values.length) return 'R$ 0.00';

  const total = values.reduce((acc, curr) => acc + curr).toString();

  return handleInputMask(total, 'money', { onlyComma: true });
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setupCart: (_, { payload }: T.SetupCartPayload): T.Cart => {
      const { producer, product } = payload;

      const products: T.ProductCartPayload[] = [
        {
          ...product,
          key: keyGenerator(),
        },
      ];

      const current: T.CartPayload = {
        producer,
        productQuantity: '1',
        products,
        payment: null,
        pickOrDelivery: {
          type: 'pick',
          market: null,
          selectedDay: null,
        },
        total: product.total,
      };

      return { canChange: true, hasCurrent: true, concluded: false, current };
    },

    setCartPayment: (state, { payload }: T.SetCartPaymentPayload): T.Cart => ({
      ...state,
      current: { ...state.current, payment: payload },
    }),

    setCartAddress: (state, { payload }: T.SetCartAddressPayload): T.Cart => ({
      ...state,
      current: { ...state.current, pickOrDelivery: payload },
    }),

    cancelCartAddress: (state): T.Cart => ({
      ...state,
      current: {
        ...state.current,
        pickOrDelivery: {
          market: null,
          selectedDay: null,
          address: null,
          type: state.current.pickOrDelivery.type,
        },
      },
    }),

    addProductToCart: (state, { payload }: T.AddProductPayload): T.Cart => {
      const product: T.ProductCartPayload = {
        ...payload,
        key: keyGenerator(),
      };

      const products: T.ProductCartPayload[] = [...state.current.products, product];

      const productQuantity = products.length.toString();
      const total = getTotal(products);

      const current: T.CartPayload = { ...state.current, products, total, productQuantity };

      return { ...state, current };
    },

    removeProductCart: (state, { payload }: T.RemoveProductPayload): T.Cart => {
      const products = state.current.products.filter(({ key }) => key !== payload.key);

      const productQuantity = products.length.toString();
      const total = getTotal(products);

      const current: T.CartPayload = { ...state.current, products, total, productQuantity };

      return { ...state, current };
    },

    updateProductCart: (state, { payload }: T.UpdateProductPayload): T.Cart => {
      const products = state.current.products.filter(({ key }) => key !== payload.key);

      const productQuantity = products.length.toString();
      const total = getTotal(products);

      const current: T.CartPayload = { ...state.current, products, total, productQuantity };

      return { ...state, current };
    },

    canChangeCart: (state, { payload }: T.CanChangePayload): T.Cart => ({
      ...state,
      canChange: payload,
    }),

    concludedCart: (state): T.Cart => ({ ...state, concluded: true }),

    clearCart: (): T.Cart => initialState,
  },
});
