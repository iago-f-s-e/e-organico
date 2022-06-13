import { AxiosError } from 'axios';

type HashMap<T> = {
  [key: string]: T;
};

const translateRequestError = (error: AxiosError): string => {
  const message = String(error.request._response);

  if (message.includes('Failed to connect to')) return 'Erro ao tentar conectar com o servidor!';

  return message;
};

const translateResponseGetError = (error: AxiosError): string => {
  const errors: HashMap<string> = {
    'The user phone already exists.': 'Este telefone já existe!',
    'The user document already exists.': 'Este email ou cpf já existe!',
    'The user email already exists.': 'Este email ou cpf já existe!',
    'The user already exists.': 'O usuário já existe!',
  };

  return errors[error?.response?.data?.message] || error.response.data.message;
};

export const translateSignUpError = (error: AxiosError): string => {
  const errors: HashMap<string> = {
    'The user phone already exists.': 'Este telefone já existe!',
    'The user document already exists.': 'Este email ou cpf já existe!',
    'The user email already exists.': 'Este email ou cpf já existe!',
    'The user already exists.': 'O usuário já existe!',
  };

  return errors[error?.response?.data?.message] || error.response.data.message;
};

export const translateGetError = (error: AxiosError): string => {
  if (error.response) return translateResponseGetError(error);

  return translateRequestError(error);
};
