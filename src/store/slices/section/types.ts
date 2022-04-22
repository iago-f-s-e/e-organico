import { PayloadAction } from '@reduxjs/toolkit';
import { Market } from '../market/types';
import { User } from '../user/types';

export type Section = {
  market: Market;
  producer: User;
};

export type UpdateMarketSectionPayload = PayloadAction<Market>;

export type UpdateProducerSectionPayload = PayloadAction<User>;
