import { Product } from '@src/store/slices/product/types';
import * as services from '@src/services/app/product';
import { translateGetError } from '@src/utils';
import { OnError, Response } from './types';

type HandleProduct = (onError: OnError) => {
  getAll: () => Promise<Response<Product[]>>;
  getProductsWithoutProducerProduct: (token: string) => Promise<Response<Product[]>>;
};

export const handleProduct: HandleProduct = (onError) => {
  return {
    getAll: async () => {
      try {
        const products = await services.getAllProducts();

        return { data: products, error: null };
      } catch (error) {
        onError(translateGetError(error));

        return { data: null, error: error.message };
      }
    },

    getProductsWithoutProducerProduct: async (token) => {
      try {
        const products = await services.getProductsWithoutProducerProduct(token);

        return { data: products, error: null };
      } catch (error) {
        onError(translateGetError(error));

        return { data: null, error: error.message };
      }
    },
  };
};
