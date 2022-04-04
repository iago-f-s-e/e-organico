import { createSlice } from '@reduxjs/toolkit';

import { Toast, Payload } from './types';

const initialState: Toast = {
  type: 'info',
  message: 'initial message',
  visible: false,
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    hideToast: (state): Toast => ({ ...state, visible: false }),
    showToast: (_, { payload }: Payload): Toast => ({ ...payload, visible: true }),
  },
});

export const { hideToast, showToast } = toastSlice.actions;
export const toast = toastSlice.reducer;
