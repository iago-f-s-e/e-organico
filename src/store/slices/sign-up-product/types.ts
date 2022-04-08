import { PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../product/types';

type SignUpProductPayload = {
  product: Product;
  stock: number;
  unitMeasure: string;
  harvestDate: string;
};

export type SignUpProduct = SignUpProductPayload[];

export type Payload = PayloadAction<SignUpProductPayload>;
