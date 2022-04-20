import { createSlice } from '@reduxjs/toolkit';

import { Ui, ConfirmOrCancelPayload } from './types';

const initialState: Ui = {
  showBottomTab: true,
  cartToTab: {
    confirmedAddress: false,
    confirmedPayment: false,
    confirmedProducts: false,
  },
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    hideBottomTab: (state): Ui => ({ ...state, showBottomTab: false }),
    showBottomTab: (state): Ui => ({ ...state, showBottomTab: true }),

    confirmOrCancelCartProducts: (state, { payload }: ConfirmOrCancelPayload): Ui => ({
      ...state,
      cartToTab: { ...state.cartToTab, confirmedProducts: payload },
    }),

    confirmOrCancelCartAddress: (state, { payload }: ConfirmOrCancelPayload): Ui => ({
      ...state,
      cartToTab: { ...state.cartToTab, confirmedAddress: payload },
    }),

    confirmOrCancelCartPayment: (state, { payload }: ConfirmOrCancelPayload): Ui => ({
      ...state,
      cartToTab: { ...state.cartToTab, confirmedPayment: payload },
    }),
  },
});
