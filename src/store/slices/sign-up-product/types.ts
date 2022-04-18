import { PayloadAction } from '@reduxjs/toolkit';
import { ProductDetail } from '../product/types';

export type SignUpProduct = ProductDetail[];

export type Payload = PayloadAction<ProductDetail>;
