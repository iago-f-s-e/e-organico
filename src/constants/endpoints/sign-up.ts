type MixedEndPoints<T> = {
  [key: string]: T;
};

export const SIGN_UP: MixedEndPoints<MixedEndPoints<string>> = {
  'sign-up': {
    'reserve-phone': 'auth/sign-up/reserve-phone',
  },
};

export const enum signUp {
  'RESERVER_PHONE' = 'auth/sign-up/reserve-phone',
  'RESERVER_EMAIL' = 'auth/sign-up/reserve-email',
  'RESERVER_DOCUMENT' = 'auth/sign-up/reserve-document',
  'REGISTER_CONSUMER' = 'auth/sign-up/register-consumer',
  'REGISTER_PRODUCER' = 'auth/sign-up/register-producer',
}
