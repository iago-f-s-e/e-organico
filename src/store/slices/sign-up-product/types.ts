import { PayloadAction } from '@reduxjs/toolkit';
import { ProducerProduct } from '../product/types';

export type SignUpProduct = ProducerProduct[];

export type Payload = PayloadAction<ProducerProduct>;
