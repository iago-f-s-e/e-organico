import { Address } from '../address/types';
import { Market, WorkDay } from '../market/types';
import { ProductDetail } from '../product/types';
import { User } from '../user/types';

export type TransactionStatus =
  | 'delivered'
  | 'en-route'
  | 'paid-online'
  | 'canceled-by-producer'
  | 'canceled-by-consumer'
  | 'confirmed-by-producer'
  | 'confirmed-by-consumer'
  | 'waiting-for-payment'
  | 'waiting-for-consumer-to-withdraw'
  | 'waiting-for-confirmation-from-the-producer';

export type TransactionProduct = {
  producerProduct: ProductDetail;
  quantity: string;
  total: string;
};

type PickTransaction = {
  type: 'pick';
  market: Market;
  selectedDay: WorkDay;
};

type DeliveryTransaction = {
  type: 'delivery';
  address: Address;
};

export type PickOrDelivery = PickTransaction | DeliveryTransaction;

export type Transaction = PickOrDelivery & {
  id: string;
  number: number;
  type: 'pick' | 'delivery';
  status: TransactionStatus;
  consumer: User;
  producer: User;
  total: string;
  createdAt: string;
  productQuantity: number;
};

export type TransactionDetail = Transaction & {
  products: TransactionProduct[];
};
