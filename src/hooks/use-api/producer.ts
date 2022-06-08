import {
  getAllProducers,
  getProducerById,
  getProducerProductById,
} from '@src/services/app/producer';
import { ProducerProductDetail } from '@src/store/slices/producer-product/type';
import { MinimalProducer, ProducerDetail } from '@src/store/slices/producer/types';
import { translateGetError } from '@src/utils';
import { OnError, Response } from './types';

type HandleProducer = (onError: OnError) => {
  getAll: () => Promise<Response<MinimalProducer[]>>;
  getById: (id: string) => Promise<Response<ProducerDetail>>;
  getProductById: (id: string, producerId: string) => Promise<Response<ProducerProductDetail>>;
};

export const handleProducer: HandleProducer = (onError) => {
  return {
    getAll: async () => {
      try {
        const data = await getAllProducers();

        return { data, error: null };
      } catch (error) {
        onError(translateGetError(error));

        return { data: null, error: error.message };
      }
    },
    getById: async (id) => {
      try {
        const data = await getProducerById(id);

        return { data, error: null };
      } catch (error) {
        onError(translateGetError(error));

        return { data: null, error: error.message };
      }
    },
    getProductById: async (id, producerId) => {
      try {
        const data = await getProducerProductById(id, producerId);

        return { data, error: null };
      } catch (error) {
        onError(translateGetError(error));

        return { data: null, error: error.message };
      }
    },
  };
};
