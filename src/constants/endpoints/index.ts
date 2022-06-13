import { signUp } from './sign-up';
import { signIn } from './sign-in';
import { market } from './market';
import { product } from './product';
import { unitMeasure } from './unit-measure';
import { producer } from './producer';

// 192.168.100.80
// 192.168.0.102

export const BASE_URL = 'http://192.168.0.234:8080';
export const endpoints = { signUp, signIn, market, product, unitMeasure, producer };
