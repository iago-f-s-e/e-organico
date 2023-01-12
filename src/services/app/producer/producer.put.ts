import { endpoints } from '@src/services/config/endpoints';
import { ProducerProductDetail } from '@src/store/slices/producer-product/type';
import { httpPUT } from '../../http-client';

export function updateProductProduct(
  id: string,
  data: ProducerProductDetail,
  token: string,
): Promise<void> {
  return httpPUT(`${endpoints.producerProduct.DEFAULT}/${id}`, data, token);
}
