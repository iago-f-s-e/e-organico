import { Address } from '../address/types';
import { Market, Workday } from '../market/types';
import { Payment } from '../payment-method/types';
import { ProducerProductDetail } from '../producer-product/type';
import { MinimalProducer } from '../producer/types';
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

export type MinimalTransaction = {
  id: string;
  producer: MinimalProducer;
  consumer: {
    id: string;
    name: string;
  };
  total: number;
  productQuantity: number;
  payment: {
    id: string;
    name: string;
    type: string;
  };
  information: {
    type: 'pick' | 'delivery';
    market?: Market;
    selectedDay?: Workday;
    address?: Address;
  };
};

export type MinimalConsumerTransaction = {
  id: string;
  total: string;
  productQuantity: string;
  status: TransactionStatus;
  type: 'pick' | 'delivery';
  market: {
    id: string;
    name: string;
  };
  producer: {
    id: string;
    name: string;
  };
  payment: {
    id: string;
    name: string;
  };
};

// TODO: TROCAR TRANSACTION POR MINIMAL_TRANSACTION

export type TransactionDetail = Transaction & {
  products: TransactionProduct[];
  payment: Payment;
};
