import { deviceName } from 'expo-device';
import { useToast as _useToast } from '@src/hooks/use-toast';
import { SignUpConsumer } from '@src/store/slices/sign-up-consumer/types';
import { SignUpProducer } from '@src/store/slices/sign-up-producer/types';
import { handleReservePhone } from './reserve-phone';
import { handleReserveCredentials } from './reserve-credentials';
import { handleRegisterConsumer } from './register-consumer';
import { handleRegisterProducer } from './register-producer';

type Response = { error: string | null };

type UseSignUp = {
  reservePhone: (phone: string) => Promise<Response>;
  reserveCredentials: (email: string, document: string) => Promise<Response>;
  registerConsumer: (consumer: SignUpConsumer) => Promise<Response>;
  registerProducer: (producer: SignUpProducer) => Promise<Response>;
};

export const useSignUp = (): UseSignUp => {
  const useToast = _useToast();

  const reservePhone = (phone: string): Promise<Response> =>
    handleReservePhone({ deviceName, phone }, useToast.error);

  const reserveCredentials = (email: string, document: string): Promise<Response> =>
    handleReserveCredentials({ deviceName, document, email }, useToast.error);

  const registerConsumer = (consumer: SignUpConsumer): Promise<Response> =>
    handleRegisterConsumer(consumer, useToast.error);

  const registerProducer = (producer: SignUpProducer): Promise<Response> =>
    handleRegisterProducer(producer, useToast.error);

  return { reservePhone, reserveCredentials, registerConsumer, registerProducer };
};
