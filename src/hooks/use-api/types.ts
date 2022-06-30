import { useToast as _useToast } from '@src/hooks/use-toast';
import { CartPayload } from '@src/store/slices/cart/types';
import { Market, MarketDetail } from '@src/store/slices/market/types';
import { Payment } from '@src/store/slices/payment-method/types';
import { ProducerProductDetail } from '@src/store/slices/producer-product/type';
import { MinimalProducer, ProducerDetail } from '@src/store/slices/producer/types';
import { Product } from '@src/store/slices/product/types';
import {
  MinimalConsumerTransaction,
  MinimalProducerTransaction,
  ProducerTransactionDetail,
} from '@src/store/slices/transaction/types';
import { UnitMeasure } from '@src/store/slices/unit-measure/types';

export type Response<T> = { data: T; error: string | null };
export type OnError = (message: string) => void;
export type OnSuccess = (message: string) => void;

export type UseApi = {
  getAllProducts: () => Promise<Product[]>;
  getAllProducers: () => Promise<MinimalProducer[]>;
  getAllMarkets: () => Promise<Market[]>;
  getAllUnitMeasures: () => Promise<UnitMeasure[]>;
  getAllPayments: () => Promise<Payment[]>;

  getMarketById: (id: string) => Promise<MarketDetail>;
  getProducerById: (id: string) => Promise<ProducerDetail>;
  getProducerProductById: (id: string, producerId: string) => Promise<ProducerProductDetail>;

  postTransaction: (payload: CartPayload) => Promise<Response<CartPayload>>;
  confirmTransaction: (id: string) => Promise<Response<void>>;
  cancelTransaction: (id: string) => Promise<Response<void>>;
  separateTransaction: (id: string) => Promise<Response<void>>;
  deliverTransaction: (id: string) => Promise<Response<void>>;
  getProducerTransactionInProgress: () => Promise<MinimalProducerTransaction[]>;
  getConsumerTransactionInProgress: () => Promise<MinimalConsumerTransaction[]>;
  getProducerTransactionInSeparation: () => Promise<MinimalProducerTransaction[]>;
  getProducerTransactionPending: () => Promise<MinimalProducerTransaction[]>;
  getProducerTransactionConcluded: () => Promise<MinimalProducerTransaction[]>;
  getProducerTransactionById: (id: string) => Promise<ProducerTransactionDetail>;
};
