import { CartPayload } from '@src/store/slices/cart/types';
import { defaultImage } from './image';

export const defaultCart: CartPayload = {
  producer: {
    id: '',
    image: defaultImage,
    name: '',
    score: {
      rating: 0,
      transactions: 0,
    },
  },
  productQuantity: '0',
  products: [],
  total: '0.00',
  payment: {
    id: '',
    name: '',
    type: 'in-person',
  },
  information: {
    type: 'pick',
    market: {
      address: {
        street: '',
        number: '',
        zipCode: '',
        district: '',
        city: '',
        state: '',
        complement: '',
      },
      id: '',
      image: defaultImage,
      name: '',
      workdays: [],
    },
    selectedDay: {
      closing: '',
      id: '',
      opening: '',
      weekday: 'FRIDAY',
    },
  },
};
