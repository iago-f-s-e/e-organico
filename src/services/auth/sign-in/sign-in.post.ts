import { endpoints } from '@src/services/config/endpoints';
import { LoggedUser } from '@src/store/slices/current/types';
import { httpPOST } from '../../http-client';

export type Credentials = {
  phone: string;
  password: string;
};

export function signIn(data: Credentials): Promise<LoggedUser> {
  return httpPOST<Credentials, LoggedUser>(endpoints.signIn.SIGN_IN, data);
}
