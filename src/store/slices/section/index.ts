import { createSlice } from '@reduxjs/toolkit';
import { Section, Payload } from './types';

const initialState: Section = {
  consumerId: '',
  marketId: '',
  producerId: '',
};

export const sectionSlice = createSlice({
  name: 'section',
  initialState,
  reducers: {
    updateSection: (state, { payload }: Payload): Section => ({ ...state, ...payload }),
    clearSection: (): Section => initialState,
  },
});
