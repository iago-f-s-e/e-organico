import { signUp } from '@src/constants/endpoints';
import { AxiosResponse } from 'axios';
import { httpClient } from '../../http-client';

export function reservePhone(phone: string, device: string): Promise<AxiosResponse> {
  return httpClient.post(`${signUp.RESERVER_PHONE}`, { phone, device });
}

export function reserveDocument(document: string, device: string): Promise<AxiosResponse> {
  return httpClient.post(`${signUp.RESERVER_DOCUMENT}`, { document, device });
}

export function reserveEmail(email: string, device: string): Promise<AxiosResponse> {
  return httpClient.post(`${signUp.RESERVER_EMAIL}`, { email, device });
}
