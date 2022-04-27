import { PayloadAction } from '@reduxjs/toolkit';
import { Address } from '../address/types';
import { Market, WorkDay } from '../market/types';
import { ProductDetail } from '../product/types';

type AddressCart = {
  type: 'pick';
  address: Address;
};

type MarketCart = {
  type: 'delivery';
  market: Market;
  selectedDay: WorkDay;
};

type AddressOrMarket = AddressCart | MarketCart;

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
  addressOrMarket: AddressOrMarket;
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

export type SetCartAddressPayload = PayloadAction<AddressOrMarket>;

export type AddProductPayload = PayloadAction<Omit<ProductCartPayload, 'key'>>;

export type RemoveProductPayload = PayloadAction<ProductCartPayload>;

export type UpdateProductPayload = PayloadAction<ProductCartPayload>;

export type CanChangePayload = PayloadAction<boolean>;
