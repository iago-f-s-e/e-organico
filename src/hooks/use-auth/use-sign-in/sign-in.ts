import { Credentials, signIn } from '@src/services/auth';
import { handleRemoveMask } from '@src/utils';
import { OnError, Response } from './types';

export type SignIn = (data: Credentials, onError: OnError) => Promise<Response>;

export const handleSignIn: SignIn = async (credentials, onError) => {
  const phone = handleRemoveMask(credentials.phone, 'phone');

  try {
    const data = await signIn({ password: credentials.password, phone });

    return { data, error: null };
  } catch (_) {
    const error = 'Telefone ou senha inválido!';

    onError(error);

    return { data: null, error };
  }
};
