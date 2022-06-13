import { Address } from '../address/types';
import { Market, Workday } from '../market/types';
import { Payment } from '../payment-method/types';
import { ProducerProductDetail } from '../producer-product/type';
import { User, UserDetail } from '../user/types';

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
  id: string;
  total: string;
  quantity: string;
  producerProduct: ProducerProductDetail;
};

type PickTransaction = {
  type: 'pick';
  market: Market;
  selectedDay: Workday;
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
  consumer: UserDetail;
  producer: User;
  total: string;
  createdAt: string;
  productQuantity: number;
};

export type TransactionDetail = Transaction & {
  products: TransactionProduct[];
  payment: Payment;
};
