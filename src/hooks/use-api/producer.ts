import * as service from '@src/services/app/producer';
import {
  MinimalProducerProduct,
  ProducerProductDetail,
} from '@src/store/slices/producer-product/type';
import { MinimalProducer, ProducerDetail } from '@src/store/slices/producer/types';
import { translateGetError } from '@src/utils';
import { OnError, Response } from './types';

type HandleProducer = (onError: OnError) => {
  getAll: () => Promise<Response<MinimalProducer[]>>;
  getById: (id: string, token: string) => Promise<Response<ProducerDetail>>;
  getProductById: (id: string, token: string) => Promise<Response<ProducerProductDetail>>;
  getOwnProducts: (token: string) => Promise<Response<MinimalProducerProduct[]>>;
};

export const handleProducer: HandleProducer = (onError) => {
  return {
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
