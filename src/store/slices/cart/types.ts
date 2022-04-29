import { PayloadAction } from '@reduxjs/toolkit';
import { PaymentMethod } from '../payment-method/types';
import { PickOrDelivery, TransactionProduct } from '../transaction/types';
import { User } from '../user/types';

export type ProductCartPayload = TransactionProduct & {
  key: string;
};

export type CartPayload = {
  producer: User;
  total: string;
  productQuantity: string;
  pickOrDelivery: PickOrDelivery;
  payment: PaymentMethod;
  products: ProductCartPayload[];
};

type SetupCart = {
  producer: User;
  product: Omit<ProductCartPayload, 'key'>;
};

export type Cart = {
  current: CartPayload;
  hasCurrent: boolean;
  canChange: boolean;
  concluded: boolean;
};

export type SetupCartPayload = PayloadAction<SetupCart>;

export type SetCartAddressPayload = PayloadAction<PickOrDelivery>;

export type SetCartPaymentPayload = PayloadAction<PaymentMethod>;

export type AddProductPayload = PayloadAction<Omit<ProductCartPayload, 'key'>>;

export type RemoveProductPayload = PayloadAction<ProductCartPayload>;

export type UpdateProductPayload = PayloadAction<ProductCartPayload>;

export type CanChangePayload = PayloadAction<boolean>;
