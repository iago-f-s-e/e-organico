import { getAllProducers, getProducerById } from '@src/services/app/producer';
import { MinimalProducer, ProducerDetail } from '@src/store/slices/producer/types';
import { OnError, Response } from './types';

type HandleProducer = (onError: OnError) => {
  getAll: () => Promise<Response<MinimalProducer[]>>;
  getById: (id: string) => Promise<Response<ProducerDetail>>;
};

export const handleProducer: HandleProducer = (onError) => {
  return {
    getAll: async () => {
      try {
        const data = await getAllProducers();

        return { data, error: null };
      } catch (error) {
        onError(error.message);

        return { data: null, error: error.message };
      }
    },
    getById: async (id) => {
      try {
        const data = await getProducerById(id);

        return { data, error: null };
      } catch (error) {
        onError(error.message);

        return { data: null, error: error.message };
      }
    },
  };
};
