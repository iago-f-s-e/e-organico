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
  separateTransaction: (id: string, token: string, message: string) => Promise<Response<void>>;
  deliverTransaction: (id: string, token: string, message: string) => Promise<Response<void>>;
  getInProgress: <T>(token: string) => Promise<Response<T[]>>;
  getInSeparation: <T>(token: string) => Promise<Response<T[]>>;
  getPending: <T>(token: string) => Promise<Response<T[]>>;
  getConcluded: <T>(token: string) => Promise<Response<T[]>>;
  getById: <T>(id: string, token: string) => Promise<Response<T>>;
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

    separateTransaction: async (id, token: string, message: string) => {
      try {
        const data = await service.separateTransaction(id, token);

        onSuccess(message);

        return { data, error: null };
      } catch (error) {
        onError(error.message);

        return { data: null, error: error.message };
      }
    },

    deliverTransaction: async (id, token: string, message: string) => {
      try {
        const data = await service.deliverTransaction(id, token);

        onSuccess(message);

        return { data, error: null };
      } catch (error) {
        onError(error.message);

        return { data: null, error: error.message };
      }
    },

    getInProgress: async <T>(token: string) => {
      try {
        const data = await service.getTransactionInProgress<T>(token);

        return { data, error: null };
      } catch (error) {
        onError(error.message);

        return { data: null, error: error.message };
      }
    },

    getInSeparation: async <T>(token: string) => {
      try {
        const data = await service.getTransactionInSeparation<T>(token);

        return { data, error: null };
      } catch (error) {
        onError(error.message);

        return { data: null, error: error.message };
      }
    },

    getPending: async <T>(token: string) => {
      try {
        const data = await service.getTransactionPending<T>(token);

        return { data, error: null };
      } catch (error) {
        onError(error.message);

        return { data: null, error: error.message };
      }
    },

    getConcluded: async <T>(token: string) => {
      try {
        const data = await service.getTransactionConcluded<T>(token);

        return { data, error: null };
      } catch (error) {
        onError(error.message);

        return { data: null, error: error.message };
      }
    },

    getById: async <T>(id: string, token: string) => {
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
