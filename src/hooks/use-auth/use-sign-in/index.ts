import { useToast as _useToast } from '@src/hooks/use-toast';
import { useAppDispatch, setLoggedUser } from '@src/store';
import { handleSignIn } from './sign-in';

type Response = { error: string | null };

type UseSignIn = {
  signIn: (phone: string, password: string) => Promise<Response>;
};

export const useSignIn = (): UseSignIn => {
  const useToast = _useToast();
  const appDispatch = useAppDispatch();

  const signIn = async (phone: string, password: string): Promise<Response> => {
    const { data, error } = await handleSignIn({ phone, password }, useToast.error);

    appDispatch(setLoggedUser(data));

    return { error };
  };

  return { signIn };
};
