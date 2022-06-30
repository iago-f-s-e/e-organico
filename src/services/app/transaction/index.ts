import { endpoints } from '@src/constants/endpoints';
import { CartPayload } from '@src/store/slices/cart/types';
import { httpGET, httpPATCH, httpPOST } from '../../http-client';

export function postTransaction(data: CartPayload, token: string): Promise<CartPayload> {
  return httpPOST(endpoints.transaction.DEFAULT, data, token);
}

export function confirmTransaction(id: string, token: string): Promise<void> {
  return httpPATCH(`${endpoints.transaction.DEFAULT}/${id}/confirm`, token);
}

export function cancelTransaction(id: string, token: string): Promise<void> {
  return httpPATCH(`${endpoints.transaction.DEFAULT}/${id}/cancel`, token);
}

export function getTransactionPending<T>(token: string): Promise<T[]> {
  return httpGET<T[]>(endpoints.transaction.GET_PENDING, token);
}

export function getTransactionInProgress<T>(token: string): Promise<T[]> {
  return httpGET<T[]>(endpoints.transaction.GET_IN_PROGRESS, token);
}

export function getTransactionById<T>(id: string, token: string): Promise<T> {
  return httpGET<T>(`${endpoints.transaction.DEFAULT}/${id}`, token);
}
