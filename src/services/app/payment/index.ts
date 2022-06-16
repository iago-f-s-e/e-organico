import { endpoints } from '@src/constants/endpoints';
import { Payment } from '@src/store/slices/payment-method/types';
import { httpClientGET } from '../../http-client';

export function getAllPayments(token: string): Promise<Payment[]> {
  return httpClientGET<Payment[]>(endpoints.payment.GET_ALL, token);
}
