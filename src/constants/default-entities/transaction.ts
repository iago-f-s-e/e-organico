import { ProducerTransactionDetail } from '@src/store/slices/transaction/types';
import { defaultAddress } from './address';
import { defaultImage } from './image';

export const defaultProducerTransaction: ProducerTransactionDetail = {
  id: 'TRANSACTION_NOT_FOUND',
  createdAt: new Date().toISOString(),
  number: 0,
  productQuantity: '0',
  status: 'delivered',
  total: '0.00',
  type: 'delivery',
  products: [],
  selectedDay: {
    id: 'NOT_FOUND',
    weekday: 'FRIDAY',
  },
  payment: {
    id: 'NOT_FOUND',
    name: '',
    type: 'in-person',
  },
  market: {
    id: 'NOT_FOUND',
    name: '',
  },
  consumer: {
    id: 'NOT_FOUND',
    address: defaultAddress,
    imagePath: defaultImage,
    name: '',
    phone: '00000000000',
    score: {
      rating: 0,
      transactions: 0,
    },
  },
};
