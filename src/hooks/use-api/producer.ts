import * as service from '@src/services/app/producer';
import { Market } from '@src/store/slices/market/types';
import {
  MinimalProducerProduct,
  ProducerProduct,
  ProducerProductDetail,
} from '@src/store/slices/producer-product/type';
import { MinimalProducer, ProducerDetail } from '@src/store/slices/producer/types';
import { handleRemoveMask, translateGetError } from '@src/utils';
import { OnError, OnSuccess, Response } from './types';

type HandleProducer = (
  onError: OnError,
  onSuccess?: OnSuccess,
) => {
  getAll: () => Promise<Response<MinimalProducer[]>>;
  getById: (id: string, token: string) => Promise<Response<ProducerDetail>>;
  getProductById: (id: string, token: string) => Promise<Response<ProducerProductDetail>>;
  updateProduct: (
    product: ProducerProductDetail,
    token: string,
    message: string,
  ) => Promise<Response<void>>;
  postProducts: (
    products: ProducerProduct[],
    token: string,
    message: string,
  ) => Promise<Response<void>>;
  postMarkets: (markets: Market[], token: string, message: string) => Promise<Response<void>>;
  inactiveProduct: (id: string, token: string, message: string) => Promise<Response<void>>;
  getOwnProducts: (token: string) => Promise<Response<MinimalProducerProduct[]>>;
};

export const handleProducer: HandleProducer = (onError, onSuccess) => {
  return {
    updateProduct: async (_product, token, message) => {
      try {
        const product = {
          ..._product,
          price: handleRemoveMask(_product.price, 'money', { withComma: false }),
        };
        const data = await service.updateProductProduct(product.id, product, token);

        onSuccess(message);

        return { data, error: null };
      } catch (error) {
        onError(translateGetError(error));

        return { data: null, error: error.message };
      }
    },

    postProducts: async (_products, token, message) => {
      try {
        const products = _products.map((product) => ({
          ...product,
          price: handleRemoveMask(product.price, 'money', { withComma: false }),
        }));

        const data = await service.postProducerProducts(products, token);

        onSuccess(message);

        return { data, error: null };
      } catch (error) {
        onError(translateGetError(error));

        return { data: null, error: error.message };
      }
    },

    postMarkets: async (markets, token, message) => {
      try {
        const data = await service.postProducerMarkets(markets, token);

        onSuccess(message);

        return { data, error: null };
      } catch (error) {
        onError(translateGetError(error));

        return { data: null, error: error.message };
      }
    },

    inactiveProduct: async (id, token, message) => {
      try {
        const data = await service.inactiveProductProduct(id, token);

        onSuccess(message);

        return { data, error: null };
      } catch (error) {
        onError(translateGetError(error));

        return { data: null, error: error.message };
      }
    },

    getAll: async () => {
      try {
        const data = await service.getAllProducers();

        return { data, error: null };
      } catch (error) {
        onError(translateGetError(error));

        return { data: null, error: error.message };
      }
    },

    getById: async (id, token) => {
      try {
        const data = await service.getProducerById(id, token);

        return { data, error: null };
      } catch (error) {
        onError(translateGetError(error));

        return { data: null, error: error.message };
      }
    },

    getProductById: async (id, token) => {
      try {
        const data = await service.getProducerProductById(id, token);

        return { data, error: null };
      } catch (error) {
        onError(translateGetError(error));

        return { data: null, error: error.message };
      }
    },

    getOwnProducts: async (token) => {
      try {
        const data = await service.getOwnProducerProduct(token);

        return { data, error: null };
      } catch (error) {
        onError(translateGetError(error));

        return { data: null, error: error.message };
      }
    },
  };
};
