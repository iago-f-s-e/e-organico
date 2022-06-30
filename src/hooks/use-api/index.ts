import {
  defaultMarketDetail,
  defaultProducerDetail,
  defaultProducerProduct,
  defaultProducerTransaction,
} from '@src/constants/default-entities';
import { useToast as _useToast } from '@src/hooks/use-toast';
import { useAppSelector } from '@src/store';
import { CartPayload } from '@src/store/slices/cart/types';
import {
  MinimalConsumerTransaction,
  MinimalProducerTransaction,
  ProducerTransactionDetail,
} from '@src/store/slices/transaction/types';
import { handleMarket } from './market';
import { handlePayment } from './payment';
import { handleProducer } from './producer';
import { handleProduct } from './product';
import { handleTransaction } from './transaction';
import { UseApi } from './types';
import { handleUnitMeasure } from './unit-measure';

export const useApi = (): UseApi => {
  const { user: curr } = useAppSelector((state) => state);
  const useToast = _useToast();

  const getAllMarkets = async () => {
    const { data, error } = await handleMarket(useToast.error).getAll();

    if (!error) return data;

    return [];
  };

  const getAllProducers = async () => {
    const { data, error } = await handleProducer(useToast.error).getAll();

    if (!error) return data;

    return [];
  };

  const getAllProducts = async () => {
    const { data, error } = await handleProduct(useToast.error).getAll();

    if (!error) return data;

    return [];
  };

  const getAllUnitMeasures = async () => {
    const { data, error } = await handleUnitMeasure(useToast.error).getAll();

    if (!error) return data;

    return [];
  };

  const getAllPayments = async () => {
    const { data, error } = await handlePayment(useToast.error).getAll(curr.token);

    if (!error) return data;

    return [];
  };

  const getMarketById = async (id: string) => {
    const { data, error } = await handleMarket(useToast.error).getById(id);

    if (!error) return data;

    return defaultMarketDetail;
  };

  const getProducerById = async (id: string) => {
    const { data, error } = await handleProducer(useToast.error).getById(id, curr.token);

    if (!error) return data;

    return defaultProducerDetail;
  };

  const getProducerProductById = async (id: string, producerId: string) => {
    const { data, error } = await handleProducer(useToast.error).getProductById(
      id,
      producerId,
      curr.token,
    );

    if (!error) return data;

    return defaultProducerProduct;
  };

  const getConsumerTransactionInProgress = async () => {
    const { data, error } = await handleTransaction(
      useToast.error,
    ).getTransactionInProgress<MinimalConsumerTransaction>(curr.token);

    if (!error) return data;

    return [];
  };

  const getProducerTransactionInProgress = async () => {
    const { data, error } = await handleTransaction(
      useToast.error,
    ).getTransactionInProgress<MinimalProducerTransaction>(curr.token);

    if (!error) return data;

    return [];
  };

  const getProducerTransactionPending = async () => {
    const { data, error } = await handleTransaction(
      useToast.error,
    ).getTransactionPending<MinimalProducerTransaction>(curr.token);

    if (!error) return data;

    return [];
  };

  const getProducerTransactionById = async (id: string) => {
    const { data, error } = await handleTransaction(
      useToast.error,
    ).getTransactionById<ProducerTransactionDetail>(id, curr.token);

    if (!error) return data;

    return defaultProducerTransaction;
  };

  const postTransaction = (payload: CartPayload) =>
    handleTransaction(useToast.error).postTransaction(payload, curr.token);

  const confirmTransaction = (id: string) => {
    const message =
      curr.user.userType === 'consumer'
        ? 'Pedido concluído com sucesso!'
        : 'Pedido confirmado com sucesso! Por favor, separe os itens do pedido. ';

    return handleTransaction(useToast.error, useToast.success).confirmTransaction(
      id,
      curr.token,
      message,
    );
  };

  const cancelTransaction = (id: string) =>
    handleTransaction(useToast.error, useToast.success).confirmTransaction(
      id,
      curr.token,
      'Pedido cancelado com sucesso!',
    );

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
    getProducerTransactionPending,
    getProducerTransactionById,
    postTransaction,
    confirmTransaction,
    cancelTransaction,
  };
};
