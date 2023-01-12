import { endpoints } from '@src/services/config/endpoints';
import { CartPayload } from '@src/store/slices/cart/types';
import { httpPOST } from '../../http-client';

export function postTransaction(data: CartPayload, token: string): Promise<CartPayload> {
  return httpPOST(endpoints.transaction.DEFAULT, data, token);
}
