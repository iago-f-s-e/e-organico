import { signUp } from './sign-up';
import { signIn } from './sign-in';
import { market } from './market';
import { product } from './product';
import { unitMeasure } from './unit-measure';
import { producer } from './producer';
import { payment } from './payment';
import { transaction } from './transaction';
import { producerProduct } from './producer-product';

export const BASE_URL = __DEV__ ? 'http://192.168.100.80:3030' : 'http://143.244.164.32:3030';
export const endpoints = {
  signUp,
  signIn,
  market,
  product,
  unitMeasure,
  producer,
  producerProduct,
  payment,
  transaction,
};
