import { Credentials, signIn } from '@src/services/auth';
import { LoggedUser } from '@src/store/slices/user/types';
import { handleRemoveMask } from '@src/utils';

type Response = { data: LoggedUser | null; error: string | null };
type OnError = (message: string) => void;
type SignIn = (data: Credentials, onError: OnError) => Promise<Response>;

export const handleSignIn: SignIn = async (credentials, onError) => {
  const phone = handleRemoveMask(credentials.phone, 'phone');

  try {
    const data = await signIn({ password: credentials.password, phone });

    return { data, error: null };
  } catch (error) {
    const message = 'Telefone ou senha inválido!';

    onError(message);

    return { data: null, error };
  }
};
