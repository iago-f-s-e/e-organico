import { ProducerProductDetail } from '@src/store/slices/producer-product/type';
import { defaultImage } from './image';

export const defaultProducerProduct: ProducerProductDetail = {
  id: 'PRODUCER_PRODUCT_NOT_FOUND',
  price: '0.00',
  stock: '0',
  harvestDate: new Date(),
  name: 'Não encontrado',
  image: defaultImage,
  unitMeasure: {
    abbreviation: '',
    id: '',
    name: '',
  },
};
