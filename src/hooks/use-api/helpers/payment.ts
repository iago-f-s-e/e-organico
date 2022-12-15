import { translateGetError } from '@src/utils';
import { Payment } from '@src/store/slices/payment-method/types';
import * as services from '@src/services/app/payment';
import { OnError, Response } from '../types';

type HandlePayment = (onError: OnError) => {
  getAll: (token: string) => Promise<Response<Payment[]>>;
};

export const handlePayment: HandlePayment = (onError) => {
  return {
    getAll: async (token) => {
      try {
        const markets = await services.getAllPayments(token);

        return { data: markets, error: null };
      } catch (error) {
        onError(translateGetError(error));

        return { data: null, error: error.message };
      }
    },
  };
};
