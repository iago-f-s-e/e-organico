import {
  defaultMarketDetail,
  defaultProducerDetail,
  defaultProducerProduct,
  defaultProducerTransaction,
} from '@src/constants/default-entities';
import { useToast as _useToast } from '@src/hooks/use-toast';
import { useAppSelector } from '@src/store';
import { CartPayload } from '@src/store/slices/cart/types';
import { ProducerProductDetail } from '@src/store/slices/producer-product/type';
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
  const { current } = useAppSelector((state) => state);
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
    const { data, error } = await handlePayment(useToast.error).getAll(current.token);

    if (!error) return data;

    return [];
  };

  const getMarketById = async (id: string) => {
    const { data, error } = await handleMarket(useToast.error).getById(id);

    if (!error) return data;

    return defaultMarketDetail;
  };

  const getProducerById = async (id: string) => {
    const { data, error } = await handleProducer(useToast.error).getById(id, current.token);

    if (!error) return data;

    return defaultProducerDetail;
  };

  const getProducerProductById = async (id: string) => {
    const { data, error } = await handleProducer(useToast.error).getProductById(id, current.token);

    if (!error) return data;

    return defaultProducerProduct;
  };

  const getOwnProducerProducts = async () => {
    const { data, error } = await handleProducer(useToast.error).getOwnProducts(current.token);

    if (!error) return data;

    return [];
  };

  const getConsumerTransactionInProgress = async () => {
    const { data, error } = await handleTransaction(
      useToast.error,
    ).getInProgress<MinimalConsumerTransaction>(current.token);

    if (!error) return data;

    return [];
  };

  const getProducerTransactionInProgress = async () => {
    const { data, error } = await handleTransaction(
      useToast.error,
    ).getInProgress<MinimalProducerTransaction>(current.token);

    if (!error) return data;

    return [];
  };

  const getProducerTransactionInSeparation = async () => {
    const { data, error } = await handleTransaction(
      useToast.error,
    ).getInSeparation<MinimalProducerTransaction>(current.token);

    if (!error) return data;

    return [];
  };

  const getProducerTransactionPending = async () => {
    const { data, error } = await handleTransaction(
      useToast.error,
    ).getPending<MinimalProducerTransaction>(current.token);

    if (!error) return data;

    return [];
  };

  const getProducerTransactionConcluded = async () => {
    const { data, error } = await handleTransaction(
      useToast.error,
    ).getConcluded<MinimalProducerTransaction>(current.token);

    if (!error) return data;

    return [];
  };

  const getProducerTransactionById = async (id: string) => {
    const { data, error } = await handleTransaction(
      useToast.error,
    ).getById<ProducerTransactionDetail>(id, current.token);

    if (!error) return data;

    return defaultProducerTransaction;
  };

  const postTransaction = (payload: CartPayload) =>
    handleTransaction(useToast.error).postTransaction(payload, current.token);

  const updateProducerProduct = (product: ProducerProductDetail) =>
    handleProducer(useToast.error, useToast.success).updateProduct(
      product,
      current.token,
      'Produto atualizado com sucesso!',
    );

  const inactiveProducerProduct = (id: string) =>
    handleProducer(useToast.error, useToast.success).inactiveProduct(
      id,
      current.token,
      'Produto excluído com sucesso!',
    );

  const confirmTransaction = (id: string) => {
    const message =
      current.user.userType === 'consumer'
        ? 'Pedido concluído com sucesso!'
        : 'Pedido confirmado com sucesso! Por favor, separe os itens do pedido. ';

    return handleTransaction(useToast.error, useToast.success).confirmTransaction(
      id,
      current.token,
      message,
    );
  };

  const deliverTransaction = (id: string) => {
    const message =
      current.user.userType === 'consumer'
        ? 'Pedido recebido com sucesso!'
        : 'Pedido entregue com sucesso!';

    return handleTransaction(useToast.error, useToast.success).deliverTransaction(
      id,
      current.token,
      message,
    );
  };

  const cancelTransaction = (id: string) =>
    handleTransaction(useToast.error, useToast.success).cancelTransaction(
      id,
      current.token,
      'Pedido cancelado com sucesso!',
    );

  const separateTransaction = (id: string) =>
    handleTransaction(useToast.error, useToast.success).separateTransaction(
      id,
      current.token,
      'Pedido separado com sucesso!',
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
    getOwnProducerProducts,
    getConsumerTransactionInProgress,
    getProducerTransactionInProgress,
    getProducerTransactionInSeparation,
    getProducerTransactionPending,
    getProducerTransactionConcluded,
    getProducerTransactionById,
    inactiveProducerProduct,
    updateProducerProduct,
    postTransaction,
    confirmTransaction,
    cancelTransaction,
    separateTransaction,
    deliverTransaction,
  };
};
