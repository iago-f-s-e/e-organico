import { createSlice } from '@reduxjs/toolkit';

import { Payload, SignUpProduct } from './types';

const initialState: SignUpProduct = [];

export const signUpProductSlice = createSlice({
  name: 'signUpProduct',
  initialState,
  reducers: {
    addSignUpProduct: (state, { payload }: Payload): SignUpProduct => [...state, payload],

    removeSignUpProduct: (state, { payload }: Payload): SignUpProduct =>
      state.filter(({ product }) => payload.product.id !== product.id),

    clearSignUpProduct: (): SignUpProduct => initialState,
  },
});
