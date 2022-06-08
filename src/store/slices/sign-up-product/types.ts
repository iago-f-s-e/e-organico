import { PayloadAction } from '@reduxjs/toolkit';
import { ProducerProduct } from '../producer-product/type';

export type SignUpProduct = ProducerProduct[];

export type Payload = PayloadAction<ProducerProduct>;
