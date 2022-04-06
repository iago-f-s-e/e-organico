import { signUp } from '@src/constants/endpoints';
import { AxiosResponse } from 'axios';
import { httpClient } from '../../http-client';

export function reservePhone(phone: string, mac: string): Promise<AxiosResponse> {
  return httpClient.post(`${signUp.RESERVER_PHONE}/${mac}`, { phone });
}
