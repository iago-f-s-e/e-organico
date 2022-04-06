import { AxiosError } from 'axios';

type HashMap<T> = {
  [key: string]: T;
};

export const translateSignUpError = (error: AxiosError): string => {
  const errors: HashMap<string> = {
    'The user phone already exists.': 'Este telefone já existe!',
  };

  return errors[error?.response?.data?.message] || error.response.data.message;
};
