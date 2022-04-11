import { PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../product/types';

export type SignUpProductPayload = {
  product: Product;
  price: string;
  stock: string;
  unitMeasure: string;
  harvestDate: Date;
};

export type SignUpProduct = SignUpProductPayload[];

export type Payload = PayloadAction<SignUpProductPayload>;
