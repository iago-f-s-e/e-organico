import { PayloadAction } from '@reduxjs/toolkit';
import { ProductDetail } from '../product/types';

export type ProductCartPayload = {
  key: string;
  producerProduct: ProductDetail;
  quantity: string;
  total: string;
};

export type CartPayload = {
  producerId: string;
  total: string;
  productQuantity: string;
  products: ProductCartPayload[];
};

type SetupCart = {
  producerId: string;
  product: Omit<ProductCartPayload, 'key'>;
};

export type Cart = {
  current: CartPayload;
  hasCurrent: boolean;
  canChange: boolean;
};

export type SetupCartPayload = PayloadAction<SetupCart>;

export type AddProductPayload = PayloadAction<Omit<ProductCartPayload, 'key'>>;

export type RemoveProductPayload = PayloadAction<ProductCartPayload>;

export type UpdateProductPayload = PayloadAction<ProductCartPayload>;

export type CanChangePayload = PayloadAction<boolean>;
