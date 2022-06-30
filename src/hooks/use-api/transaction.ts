import * as service from '@src/services/app/transaction';
import { CartPayload } from '@src/store/slices/cart/types';
import { handleRemoveMask } from '@src/utils';
import { OnError, OnSuccess, Response } from './types';

type HandleTransaction = (
  onError: OnError,
  onSuccess?: OnSuccess,
) => {
  postTransaction: (payload: CartPayload, token: string) => Promise<Response<CartPayload>>;
  confirmTransaction: (id: string, token: string, message: string) => Promise<Response<void>>;
  cancelTransaction: (id: string, token: string, message: string) => Promise<Response<void>>;
  getTransactionInProgress: <T>(token: string) => Promise<Response<T[]>>;
  getTransactionPending: <T>(token: string) => Promise<Response<T[]>>;
  getTransactionById: <T>(id: string, token: string) => Promise<Response<T>>;
};

export const handleTransaction: HandleTransaction = (onError, onSuccess) => {
  return {
    postTransaction: async (payload, token) => {
      const total = handleRemoveMask(payload.total, 'money', { withComma: false });
      const products = payload.products.map((product) => ({
        ...product,
        total: handleRemoveMask(product.total, 'money', { withComma: false }),
      }));

      try {
        const data = await service.postTransaction({ ...payload, total, products }, token);

        return { data, error: null };
      } catch (error) {
        onError(error.message);

        return { data: null, error: error.message };
      }
    },

    confirmTransaction: async (id, token: string, message: string) => {
      try {
        const data = await service.confirmTransaction(id, token);

        onSuccess(message);

        return { data, error: null };
      } catch (error) {
        onError(error.message);

        return { data: null, error: error.message };
      }
    },

    cancelTransaction: async (id, token: string, message: string) => {
      try {
        const data = await service.cancelTransaction(id, token);

        onSuccess(message);

        return { data, error: null };
      } catch (error) {
        onError(error.message);

        return { data: null, error: error.message };
      }
    },

    getTransactionInProgress: async <T>(token: string) => {
      try {
        const data = await service.getTransactionInProgress<T>(token);

        return { data, error: null };
      } catch (error) {
        onError(error.message);

        return { data: null, error: error.message };
      }
    },

    getTransactionPending: async <T>(token: string) => {
      try {
        const data = await service.getTransactionPending<T>(token);

        return { data, error: null };
      } catch (error) {
        onError(error.message);

        return { data: null, error: error.message };
      }
    },

    getTransactionById: async <T>(id: string, token: string) => {
      try {
        const data = await service.getTransactionById<T>(id, token);

        return { data, error: null };
      } catch (error) {
        onError(error.message);

        return { data: null, error: error.message };
      }
    },
  };
};
