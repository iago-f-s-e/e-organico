import { endpoints } from '@src/constants/endpoints';
import { LoggedUser } from '@src/store/slices/user/types';
import { httpPOST } from '../../http-client';

export type Credentials = {
  phone: string;
  password: string;
};

export function signIn(data: Credentials): Promise<LoggedUser> {
  return httpPOST<Credentials, LoggedUser>(endpoints.signIn.SIGN_IN, data);
}
