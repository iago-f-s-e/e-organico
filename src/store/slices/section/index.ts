import { createSlice } from '@reduxjs/toolkit';
import { Section, UpdateMarketSectionPayload, UpdateProducerSectionPayload } from './types';

const initialState: Section = {
  market: null,
  producer: null,
};

export const sectionSlice = createSlice({
  name: 'section',
  initialState,
  reducers: {
    updateMarketSection: (state, { payload }: UpdateMarketSectionPayload): Section => ({
      ...state,
      market: payload,
    }),
    updateProducerSection: (state, { payload }: UpdateProducerSectionPayload): Section => ({
      ...state,
      producer: payload,
    }),
    clearSection: (): Section => initialState,
  },
});
