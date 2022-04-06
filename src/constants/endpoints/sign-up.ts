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
}
