import {
  defaultMarketDetail,
  defaultProducerDetail,
  defaultProducerProduct,
} from '@src/constants/default-entities';
import { useToast as _useToast } from '@src/hooks/use-toast';
import { useAppSelector } from '@src/store';
import { CartPayload } from '@src/store/slices/cart/types';
import { Market, MarketDetail } from '@src/store/slices/market/types';
import { Payment } from '@src/store/slices/payment-method/types';
import { ProducerProductDetail } from '@src/store/slices/producer-product/type';
import { MinimalProducer, ProducerDetail } from '@src/store/slices/producer/types';
import { Product } from '@src/store/slices/product/types';
import {
  MinimalConsumerTransaction,
  MinimalProducerTransaction,
} from '@src/store/slices/transaction/types';
import { UnitMeasure } from '@src/store/slices/unit-measure/types';
import { handleMarket } from './market';
import { handlePayment } from './payment';
import { handleProducer } from './producer';
import { handleProduct } from './product';
import { handleTransaction } from './transaction';
import { Response } from './types';
import { handleUnitMeasure } from './unit-measure';

type UseApi = {
  getAllProducts: () => Promise<Product[]>;
  getAllProducers: () => Promise<MinimalProducer[]>;
  getAllMarkets: () => Promise<Market[]>;
  getAllUnitMeasures: () => Promise<UnitMeasure[]>;
  getAllPayments: () => Promise<Payment[]>;

  getMarketById: (id: string) => Promise<MarketDetail>;
  getProducerById: (id: string) => Promise<ProducerDetail>;
  getProducerProductById: (id: string, producerId: string) => Promise<ProducerProductDetail>;

  postTransaction: (payload: CartPayload) => Promise<Response<CartPayload>>;
  getProducerTransactionInProgress: () => Promise<MinimalProducerTransaction[]>;
  getConsumerTransactionInProgress: () => Promise<MinimalConsumerTransaction[]>;
};

export const useApi = (): UseApi => {
  const { user } = useAppSelector((state) => state);
  const useToast = _useToast();

  const getAllMarkets = async (): Promise<Market[]> => {
    const { data, error } = await handleMarket(useToast.error).getAll();

    if (!error) return data;

    return [];
  };

  const getAllProducers = async (): Promise<MinimalProducer[]> => {
    const { data, error } = await handleProducer(useToast.error).getAll();

    if (!error) return data;

    return [];
  };

  const getAllProducts = async (): Promise<Product[]> => {
    const { data, error } = await handleProduct(useToast.error).getAll();

    if (!error) return data;

    return [];
  };

  const getAllUnitMeasures = async (): Promise<UnitMeasure[]> => {
    const { data, error } = await handleUnitMeasure(useToast.error).getAll();

    if (!error) return data;

    return [];
  };

  const getAllPayments = async (): Promise<Payment[]> => {
    const { data, error } = await handlePayment(useToast.error).getAll(user.token);

    if (!error) return data;

    return [];
  };

  const getMarketById = async (id: string): Promise<MarketDetail> => {
    const { data, error } = await handleMarket(useToast.error).getById(id);

    if (!error) return data;

    return defaultMarketDetail;
  };

  const getProducerById = async (id: string): Promise<ProducerDetail> => {
    const { data, error } = await handleProducer(useToast.error).getById(id, user.token);

    if (!error) return data;

    return defaultProducerDetail;
  };

  const getProducerProductById = async (
    id: string,
    producerId: string,
  ): Promise<ProducerProductDetail> => {
    const { data, error } = await handleProducer(useToast.error).getProductById(
      id,
      producerId,
      user.token,
    );

    if (!error) return data;

    return defaultProducerProduct;
  };

  const getConsumerTransactionInProgress = async () => {
    const { data, error } = await handleTransaction(
      useToast.error,
    ).getTransactionInProgress<MinimalConsumerTransaction>(user.token);

    if (!error) return data;

    return [];
  };

  const getProducerTransactionInProgress = async () => {
    const { data, error } = await handleTransaction(
      useToast.error,
    ).getTransactionInProgress<MinimalProducerTransaction>(user.token);

    if (!error) return data;

    return [];
  };

  const postTransaction = (payload: CartPayload) =>
    handleTransaction(useToast.error).postTransaction(payload, user.token);

  return {
    getAllMarkets,
    getAllProducts,
    getAllUnitMeasures,
    getAllProducers,
    getAllPayments,
    getMarketById,
    getProducerById,
    getProducerProductById,
    getConsumerTransactionInProgress,
    getProducerTransactionInProgress,
    postTransaction,
  };
};
