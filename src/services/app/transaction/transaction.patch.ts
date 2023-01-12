import { endpoints } from '@src/services/config/endpoints';
import { httpPATCH } from '../../http-client';

export function confirmTransaction(id: string, token: string): Promise<void> {
  return httpPATCH(`${endpoints.transaction.DEFAULT}/${id}/confirm`, token);
}

export function cancelTransaction(id: string, token: string): Promise<void> {
  return httpPATCH(`${endpoints.transaction.DEFAULT}/${id}/cancel`, token);
}

export function separateTransaction(id: string, token: string): Promise<void> {
  return httpPATCH(`${endpoints.transaction.DEFAULT}/${id}/separate`, token);
}

export function deliverTransaction(id: string, token: string): Promise<void> {
  return httpPATCH(`${endpoints.transaction.DEFAULT}/${id}/deliver`, token);
}
