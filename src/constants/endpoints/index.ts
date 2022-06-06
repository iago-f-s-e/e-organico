import { signUp } from './sign-up';
import { market } from './market';
import { product } from './product';
import { unitMeasure } from './unit-measure';

// 192.168.100.80
// 192.168.0.102

export const endpoints = { signUp, market, product, unitMeasure };
export const BASE_URL = 'http://192.168.0.15:8080';
