import { PayloadAction } from '@reduxjs/toolkit';

export type Section = {
  marketId: string;
  producerId: string;
  consumerId: string;
};

export type Payload = PayloadAction<Partial<Section>>;
