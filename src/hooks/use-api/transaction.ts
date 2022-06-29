import {
  getTransactionById,
  getTransactionInProgress,
  postTransaction,
} from '@src/services/app/transaction';
import { CartPayload } from '@src/store/slices/cart/types';
import { handleRemoveMask } from '@src/utils';
import { OnError, Response } from './types';

type HandleTransaction = (onError: OnError) => {
  postTransaction: (payload: CartPayload, token: string) => Promise<Response<CartPayload>>;
  getTransactionInProgress: <T>(token: string) => Promise<Response<T[]>>;
  getTransactionById: <T>(id: string, token: string) => Promise<Response<T>>;
};

export const handleTransaction: HandleTransaction = (onError) => {
  return {
    postTransaction: async (payload, token) => {
      const total = handleRemoveMask(payload.total, 'money', { withComma: false });
      const products = payload.products.map((product) => ({
        ...product,
        total: handleRemoveMask(product.total, 'money', { withComma: false }),
      }));

      try {
        const data = await postTransaction({ ...payload, total, products }, token);

        return { data, error: null };
      } catch (error) {
        onError(error.message);

        return { data: null, error: error.message };
      }
    },

    getTransactionInProgress: async <T>(token: string) => {
      try {
        const data = await getTransactionInProgress<T>(token);

        return { data, error: null };
      } catch (error) {
        onError(error.message);

        return { data: null, error: error.message };
      }
    },

    getTransactionById: async <T>(id: string, token: string) => {
      try {
        const data = await getTransactionById<T>(id, token);

        return { data, error: null };
      } catch (error) {
        onError(error.message);

        return { data: null, error: error.message };
      }
    },
  };
};
