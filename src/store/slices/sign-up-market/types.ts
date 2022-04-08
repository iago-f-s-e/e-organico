import { PayloadAction } from '@reduxjs/toolkit';
import { Market } from '../market/types';

export type SignUpMarket = Market[];

export type Payload = PayloadAction<Market>;
