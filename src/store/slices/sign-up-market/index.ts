import { createSlice } from '@reduxjs/toolkit';

import { Payload, SignUpMarket } from './types';

const initialState: SignUpMarket = [];

export const signUpMarketSlice = createSlice({
  name: 'signUpMarket',
  initialState,
  reducers: {
    addSignUpMarket: (state, { payload }: Payload): SignUpMarket => [...state, payload],
    removeSignUpMarket: (state, { payload }: Payload): SignUpMarket =>
      state.filter((market) => payload.id !== market.id),
    clearSignUpMarket: (): SignUpMarket => initialState,
  },
});
