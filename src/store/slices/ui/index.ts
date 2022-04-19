import { createSlice } from '@reduxjs/toolkit';

import { Ui } from './types';

const initialState: Ui = {
  showBottomTab: true,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    hideBottomTab: (state): Ui => ({ ...state, showBottomTab: false }),
    showBottomTab: (state): Ui => ({ ...state, showBottomTab: true }),
  },
});
