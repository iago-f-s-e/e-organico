import { endpoints } from '@src/services/config/endpoints';
import { httpPATCH } from '../../http-client';

export function inactiveProductProduct(id: string, token: string): Promise<void> {
  return httpPATCH(`${endpoints.producerProduct.DEFAULT}/${id}/inactive`, token);
}
