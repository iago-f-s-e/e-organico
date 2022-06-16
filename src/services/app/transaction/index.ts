import { endpoints } from '@src/constants/endpoints';
import { CartPayload } from '@src/store/slices/cart/types';
import { httpClientPOST } from '../../http-client';

export function postTransaction(data: CartPayload, token: string): Promise<CartPayload> {
  return httpClientPOST(endpoints.transaction.POST_TRANSACTION, data, token);
}
