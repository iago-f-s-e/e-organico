import { endpoints } from '@src/services/config/endpoints';
import { CertificationType } from '@src/store/slices/producer/types';
import { SignUpConsumer } from '@src/store/slices/sign-up-consumer/types';
import { SignUpProducer } from '@src/store/slices/sign-up-producer/types';
import { AxiosResponse } from 'axios';
import { httpClient } from '../../http-client';

type ProducerDTO = {
  certificationType: CertificationType;
  makeDelivery: boolean;
};

// TODO: remover omits
export type RegisterProducerDTO = Omit<
  SignUpProducer,
  'image' | 'certification' | 'makeDelivery' | 'propertyImages' | 'userType'
> & {
  producer: ProducerDTO;
};

export function reservePhone(phone: string, device: string): Promise<AxiosResponse> {
  return httpClient.post(endpoints.signUp.RESERVER_PHONE, { phone, device });
}

export function reserveDocument(document: string, device: string): Promise<AxiosResponse> {
  return httpClient.post(endpoints.signUp.RESERVER_DOCUMENT, { document, device });
}

export function reserveEmail(email: string, device: string): Promise<AxiosResponse> {
  return httpClient.post(endpoints.signUp.RESERVER_EMAIL, { email, device });
}

export function registerConsumer(data: SignUpConsumer): Promise<AxiosResponse> {
  return httpClient.post(endpoints.signUp.REGISTER_CONSUMER, { ...data, type: 'consumer' });
}

export function registerProducer(data: RegisterProducerDTO): Promise<AxiosResponse> {
  return httpClient.post(endpoints.signUp.REGISTER_PRODUCER, { ...data, type: 'producer' });
}
