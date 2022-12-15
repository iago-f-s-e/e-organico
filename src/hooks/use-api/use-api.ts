import {
  defaultConsumerTransaction,
  defaultMarketDetail,
  defaultProducerDetail,
  defaultProducerProduct,
  defaultProducerTransaction,
} from '@src/constants/default-entities';
import { useToast as _useToast } from '@src/hooks/use-toast';
import { useAppSelector } from '@src/store';
import { CartPayload } from '@src/store/slices/cart/types';
import { Market } from '@src/store/slices/market/types';
import { ProducerProduct, ProducerProductDetail } from '@src/store/slices/producer-product/type';
import {
  ConsumerTransactionDetail,
  MinimalConsumerTransaction,
  MinimalProducerTransaction,
  ProducerTransactionDetail,
} from '@src/store/slices/transaction/types';
import { UseApi } from './types';
import {
  handleMarket,
  handlePayment,
  handleProducer,
  handleProduct,
  handleTransaction,
  handleUnitMeasure,
} from './helpers';

export const useApi = (): UseApi => {
  const { current } = useAppSelector((state) => state);
  const useToast = _useToast();

  const market = {
    getAllMarkets: async () => {
      const { data, error } = await handleMarket(useToast.error).getAll();

      if (!error) return data;

      return [];
    },

    getMarketsWithoutProducerMarket: async () => {
      const { data, error } = await handleMarket(useToast.error).getMarketsWithoutProducerMarket(
        current.token,
      );

      if (!error) return data;

      return [];
    },

    getMarketById: async (id: string) => {
      const { data, error } = await handleMarket(useToast.error).getById(id);

      if (!error) return data;

      return defaultMarketDetail;
    },
  };

  const payment = {
    getAllPayments: async () => {
      const { data, error } = await handlePayment(useToast.error).getAll(current.token);

      if (!error) return data;

      return [];
    },
  };

  const producer = {
    postProducerProducts: (products: ProducerProduct[]) =>
      handleProducer(useToast.error, useToast.success).postProducts(
        products,
        current.token,
        'Produtos adicionados com sucesso!',
      ),

    postProducerMarkets: (markets: Market[]) =>
      handleProducer(useToast.error, useToast.success).postMarkets(
        markets,
        current.token,
        'Feiras adicionados com sucesso!',
      ),

    getAllProducers: async () => {
      const { data, error } = await handleProducer(useToast.error).getAll();

      if (!error) return data;

      return [];
    },

    getProducerById: async (id: string) => {
      const { data, error } = await handleProducer(useToast.error).getById(id, current.token);

      if (!error) return data;

      return defaultProducerDetail;
    },

    getProducerProductById: async (id: string) => {
      const { data, error } = await handleProducer(useToast.error).getProductById(
        id,
        current.token,
      );

      if (!error) return data;

      return defaultProducerProduct;
    },

    getOwnProducerProducts: async () => {
      const { data, error } = await handleProducer(useToast.error).getOwnProducts(current.token);

      if (!error) return data;

      return [];
    },

    updateProducerProduct: (product: ProducerProductDetail) =>
      handleProducer(useToast.error, useToast.success).updateProduct(
        product,
        current.token,
        'Produto atualizado com sucesso!',
      ),

    inactiveProducerProduct: (id: string) =>
      handleProducer(useToast.error, useToast.success).inactiveProduct(
        id,
        current.token,
        'Produto excluído com sucesso!',
      ),
  };

  const product = {
    getAllProducts: async () => {
      const { data, error } = await handleProduct(useToast.error).getAll();

      if (!error) return data;

      return [];
    },

    getProductsWithoutProducerProduct: async () => {
      const { data, error } = await handleProduct(useToast.error).getProductsWithoutProducerProduct(
        current.token,
      );

      if (!error) return data;

      return [];
    },
  };

  const transaction = {
    postTransaction: (payload: CartPayload) =>
      handleTransaction(useToast.error).postTransaction(payload, current.token),

    getConsumerTransactionInProgress: async () => {
      const { data, error } = await handleTransaction(
        useToast.error,
      ).getInProgress<MinimalConsumerTransaction>(current.token);

      if (!error) return data;

      return [];
    },

    getProducerTransactionInProgress: async () => {
      const { data, error } = await handleTransaction(
        useToast.error,
      ).getInProgress<MinimalProducerTransaction>(current.token);

      if (!error) return data;

      return [];
    },

    getProducerTransactionInSeparation: async () => {
      const { data, error } = await handleTransaction(
        useToast.error,
      ).getInSeparation<MinimalProducerTransaction>(current.token);

      if (!error) return data;

      return [];
    },

    getProducerTransactionPending: async () => {
      const { data, error } = await handleTransaction(
        useToast.error,
      ).getPending<MinimalProducerTransaction>(current.token);

      if (!error) return data;

      return [];
    },

    getProducerTransactionConcluded: async () => {
      const { data, error } = await handleTransaction(
        useToast.error,
      ).getConcluded<MinimalProducerTransaction>(current.token);

      if (!error) return data;

      return [];
    },

    getConsumerTransactionConcluded: async () => {
      const { data, error } = await handleTransaction(
        useToast.error,
      ).getConcluded<MinimalConsumerTransaction>(current.token);

      if (!error) return data;

      return [];
    },

    getProducerTransactionById: async (id: string) => {
      const { data, error } = await handleTransaction(
        useToast.error,
      ).getById<ProducerTransactionDetail>(id, current.token);

      if (!error) return data;

      return defaultProducerTransaction;
    },

    getConsumerTransactionById: async (id: string) => {
      const { data, error } = await handleTransaction(
        useToast.error,
      ).getById<ConsumerTransactionDetail>(id, current.token);

      if (!error) return data;

      return defaultConsumerTransaction;
    },

    confirmTransaction: (id: string) => {
      const message =
        current.user.userType === 'consumer'
          ? 'Pedido concluído com sucesso!'
          : 'Pedido confirmado com sucesso! Por favor, separe os itens do pedido. ';

      return handleTransaction(useToast.error, useToast.success).confirmTransaction(
        id,
        current.token,
        message,
      );
    },

    deliverTransaction: (id: string) => {
      const message =
        current.user.userType === 'consumer'
          ? 'Pedido recebido com sucesso!'
          : 'Pedido entregue com sucesso!';

      return handleTransaction(useToast.error, useToast.success).deliverTransaction(
        id,
        current.token,
        message,
      );
    },

    cancelTransaction: (id: string) =>
      handleTransaction(useToast.error, useToast.success).cancelTransaction(
        id,
        current.token,
        'Pedido cancelado com sucesso!',
      ),

    separateTransaction: (id: string) =>
      handleTransaction(useToast.error, useToast.success).separateTransaction(
        id,
        current.token,
        'Pedido separado com sucesso!',
      ),
  };

  const unitMeasure = {
    getAllUnitMeasures: async () => {
      const { data, error } = await handleUnitMeasure(useToast.error).getAll();

      if (!error) return data;

      return [];
    },
  };

  return {
    ...market,
    ...payment,
    ...producer,
    ...product,
    ...transaction,
    ...unitMeasure,
  };
};
