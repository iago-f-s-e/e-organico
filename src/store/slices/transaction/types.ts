import { Address } from '../address/types';
import { EUDay, Market, Workday } from '../market/types';
import { Payment } from '../payment-method/types';
import { ProducerProductDetail } from '../producer-product/type';
import { UserDetail } from '../current/types';
import { ProducerWithAddressAndProperty } from '../producer/types';

export type TransactionStatus =
  | 'concluded'
  | 'en-route'
  | 'paid-online'
  | 'canceled-by-producer'
  | 'canceled-by-consumer'
  | 'confirmed-by-producer'
  | 'confirmed-by-consumer'
  | 'waiting-for-payment'
  | 'waiting-for-consumer-to-withdraw'
  | 'waiting-for-confirmation-from-the-producer'
  | 'in-separation';

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

type MinimalTransaction = {
  id: string;
  total: string;
  productQuantity: String;
  status: TransactionStatus;
  type: 'pick' | 'delivery';
  market: {
    id: string;
    name: string;
  };
  payment: {
    id: string;
    name: string;
  };
};

export type MinimalConsumerTransaction = MinimalTransaction & {
  number: number;
  producer: {
    id: string;
    name: string;
  };
};

export type MinimalProducerTransaction = MinimalTransaction & {
  number: number;
  createdAt: string;
  selectedDay: {
    id: string;
    weekday: EUDay;
  };
  consumer: Pick<UserDetail, 'id' | 'name'>;
};

export type ProducerTransactionDetail = Omit<MinimalProducerTransaction, 'consumer'> & {
  consumer: UserDetail;
  products: TransactionProduct[];
  payment: Payment;
};

export type ConsumerTransactionDetail = Omit<MinimalConsumerTransaction, 'producer'> & {
  producer: ProducerWithAddressAndProperty;
  products: TransactionProduct[];
  payment: Payment;
  selectedDay: {
    id: string;
    weekday: EUDay;
  };
};
