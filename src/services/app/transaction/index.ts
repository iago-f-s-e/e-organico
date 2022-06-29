import { endpoints } from '@src/constants/endpoints';
import { CartPayload } from '@src/store/slices/cart/types';
import { httpClientGET, httpClientPOST } from '../../http-client';

export function postTransaction(data: CartPayload, token: string): Promise<CartPayload> {
  return httpClientPOST(endpoints.transaction.POST_TRANSACTION, data, token);
}

export function getTransactionInProgress<T>(token: string): Promise<T[]> {
  return httpClientGET<T[]>(endpoints.transaction.GET_IN_PROGRESS, token);
}

export function getTransactionById<T>(id: string, token: string): Promise<T> {
  return httpClientGET<T>(`${endpoints.transaction.GET_BY_ID}/${id}`, token);
}
