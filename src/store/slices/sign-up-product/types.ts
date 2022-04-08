import { PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../product/types';

export type SignUpProductPayload = {
  product: Product;
  stock: string;
  unitMeasure: string;
  harvestDate: string;
};

export type SignUpProduct = SignUpProductPayload[];

export type Payload = PayloadAction<SignUpProductPayload>;
