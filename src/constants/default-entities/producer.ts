import { ProducerDetail } from '@src/store/slices/producer/types';
import { defaultAddress } from './address';
import { defaultImage } from './image';

export const defaultProducerDetail: ProducerDetail = {
  id: 'PRODUCER_NOT_FOUND',
  name: 'Não encontrado',
  image: defaultImage,
  address: defaultAddress,
  score: {
    rating: 0,
    transactions: 0,
  },
  property: {
    images: [],
  },
  products: [],
  markets: [],
};
