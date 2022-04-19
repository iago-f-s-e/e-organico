import { PayloadAction } from '@reduxjs/toolkit';
import { ProductDetail } from '../product/types';

export type PayloadProductCart = {
  key: string;
  producerProduct: ProductDetail;
  quantity: string;
  total: string;
};

export type PayloadCart = {
  producerId: string;
  marketId: string;
  total: string;
  productQuantity: string;
  products: PayloadProductCart[];
};

type SetupCartPayload = {
  producerId: string;
  marketId: string;
  product: Omit<PayloadProductCart, 'key'>;
};

export type Cart = {
  current: PayloadCart;
  hasCurrent: boolean;
  canChange: boolean;
};

export type PayloadSetupCart = PayloadAction<SetupCartPayload>;

export type PayloadAddProduct = PayloadAction<Omit<PayloadProductCart, 'key'>>;

export type PayloadRemoveProduct = PayloadAction<PayloadProductCart>;

export type PayloadUpdateProduct = PayloadAction<PayloadProductCart>;

export type PayloadCanChange = PayloadAction<boolean>;
