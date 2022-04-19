import { createSlice } from '@reduxjs/toolkit';

import { UiState } from './types';

const initialState: UiState = {
  showBottomTab: true,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    hideBottomTab: (state): UiState => ({ ...state, showBottomTab: false }),
    showBottomTab: (state): UiState => ({ ...state, showBottomTab: true }),
  },
});
