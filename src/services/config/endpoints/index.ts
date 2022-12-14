import { signUp } from './sign-up';
import { signIn } from './sign-in';
import { market } from './market';
import { product } from './product';
import { unitMeasure } from './unit-measure';
import { producer } from './producer';
import { payment } from './payment';
import { transaction } from './transaction';
import { producerProduct } from './producer-product';
import { producerMarket } from './producer-market';

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
  producerMarket,
} as const;
