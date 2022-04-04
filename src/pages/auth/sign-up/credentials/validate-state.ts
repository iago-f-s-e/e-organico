import { handlerValidate } from '@src/utils';
import { State } from './reducer';

type Error = {
  type: 'error';
  message: string;
};

type Success = {
  type: 'success';
  email: string;
  document: string;
  password: string;
};
type Response = Error | Success;

type ValidateState = (state: State) => Response;

export const validateState: ValidateState = ({
  confPassword,
  document,
  email,
  password,
}): Response => {
  const documentIsValid = handlerValidate(document, 'document');
  const isValidEmail = handlerValidate(email, 'email');

  if (!isValidEmail) {
    return { type: 'error', message: 'Email inválido!' };
  }

  if (!documentIsValid) {
    return { type: 'error', message: 'CPF inválido!' };
  }

  if (password.length < 8) {
    return { type: 'error', message: 'A senha precisa conter mais que 8 dígitos!' };
  }

  if (password !== confPassword) {
    return { type: 'error', message: 'As senhas não são iguais!' };
  }

  return { type: 'success', document, email, password };
};
