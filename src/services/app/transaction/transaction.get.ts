import { endpoints } from '@src/services/config/endpoints';
import { httpGET } from '../../http-client';

export function getTransactionPending<T>(token: string): Promise<T[]> {
  return httpGET<T[]>(endpoints.transaction.GET_PENDING, token);
}

export function getTransactionInProgress<T>(token: string): Promise<T[]> {
  return httpGET<T[]>(endpoints.transaction.GET_IN_PROGRESS, token);
}

export function getTransactionInSeparation<T>(token: string): Promise<T[]> {
  return httpGET<T[]>(endpoints.transaction.GET_IN_SEPARATION, token);
}

export function getTransactionConcluded<T>(token: string): Promise<T[]> {
  return httpGET<T[]>(endpoints.transaction.GET_CONCLUDED, token);
}

export function getTransactionById<T>(id: string, token: string): Promise<T> {
  return httpGET<T>(`${endpoints.transaction.DEFAULT}/${id}`, token);
}
