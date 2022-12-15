import { useToast as _useToast } from '@src/hooks/use-toast';
import { handleSignIn } from './helpers';
import { Response } from './types';

type UseSignIn = {
  signIn: (phone: string, password: string) => Promise<Response>;
};

export const useSignIn = (): UseSignIn => {
  const useToast = _useToast();

  const signIn = async (phone: string, password: string): Promise<Response> =>
    handleSignIn({ phone, password }, useToast.error);

  return { signIn };
};
