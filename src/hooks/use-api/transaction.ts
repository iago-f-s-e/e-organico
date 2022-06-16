import { postTransaction } from '@src/services/app/transaction';
import { CartPayload } from '@src/store/slices/cart/types';
import { handleRemoveMask } from '@src/utils';
import { OnError, Response } from './types';

type HandleTransaction = (onError: OnError) => {
  postTransaction: (payload: CartPayload, token: string) => Promise<Response<CartPayload>>;
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
  };
};
