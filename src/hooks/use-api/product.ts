import { Product } from '@src/store/slices/product/types';
import { getAllProducts } from '@src/services/app';
import { OnError, Response } from './types';

type HandleProduct = (onError: OnError) => {
  getAll: () => Promise<Response<Product[]>>;
};

export const handleProduct: HandleProduct = (onError) => {
  return {
    getAll: async () => {
      try {
        const products = await getAllProducts();

        return { data: products, error: null };
      } catch (error) {
        onError(error.message);

        return { data: null, error: error.message };
      }
    },
  };
};
