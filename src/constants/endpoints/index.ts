import { signUp } from './sign-up';
import { signIn } from './sign-in';
import { market } from './market';
import { product } from './product';
import { unitMeasure } from './unit-measure';
import { producer } from './producer';
import { payment } from './payment';
import { transaction } from './transaction';

// 192.168.100.80
// 172.16.10.13

export const BASE_URL = 'http://192.168.100.80:8080';
export const endpoints = {
  signUp,
  signIn,
  market,
  product,
  unitMeasure,
  producer,
  payment,
  transaction,
};
