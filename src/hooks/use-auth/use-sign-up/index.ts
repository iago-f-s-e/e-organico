import { deviceName } from 'expo-device';
import { useToast as _useToast } from '@src/hooks/use-toast';
import { handleReservePhone } from './reserve-phone';
import { handleReserveCredentials } from './reserve-credentials';

type Response = { error: string | null };

type UseSignUp = {
  reservePhone: (phone: string) => Promise<Response>;
  reserveCredentials: (email: string, document: string) => Promise<Response>;
};

export const useSignUp = (): UseSignUp => {
  const useToast = _useToast();

  const reservePhone = (phone: string): Promise<Response> =>
    handleReservePhone({ deviceName, phone }, useToast.error);

  const reserveCredentials = (email: string, document: string): Promise<Response> =>
    handleReserveCredentials({ deviceName, document, email }, useToast.error);

  return { reservePhone, reserveCredentials };
};
