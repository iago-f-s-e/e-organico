import { PayloadAction } from '@reduxjs/toolkit';
import { Payment } from '../payment-method/types';
import { MinimalProducer } from '../producer/types';
import { PickOrDelivery, TransactionProduct } from '../transaction/types';

export type ProductCartPayload = TransactionProduct & {
  key: string;
};

export type CartPayload = {
  total: string;
  productQuantity: string;
  producer: MinimalProducer;
  payment: Payment;
  products: ProductCartPayload[];
  information: PickOrDelivery;
};

type SetupCart = {
  producer: MinimalProducer;
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

export type SetCartPaymentPayload = PayloadAction<Payment>;

export type AddProductPayload = PayloadAction<Omit<ProductCartPayload, 'key'>>;

export type RemoveProductPayload = PayloadAction<ProductCartPayload>;

export type UpdateProductPayload = PayloadAction<ProductCartPayload>;

export type CanChangePayload = PayloadAction<boolean>;
