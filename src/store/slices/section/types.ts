import { PayloadAction } from '@reduxjs/toolkit';
import { Market } from '../market/types';
import { MinimalProducer } from '../producer/types';

export type Section = {
  market: Market;
  producer: MinimalProducer;
};

export type UpdateMarketSectionPayload = PayloadAction<Market>;

export type UpdateProducerSectionPayload = PayloadAction<MinimalProducer>;
