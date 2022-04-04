import { isValidDocument, isValidEmail } from './helpers';

type Type = 'document' | 'email';

type HandlerValidate = (value: string, type: Type) => boolean;

type Types<T, A> = {
  [key: string]: (value: T) => A;
};

const validateType: Types<string, boolean> = {
  document: (value: string) => isValidDocument(value),
  email: (value: string) => isValidEmail(value),
};

const getValidate = (key: string) =>
  key in validateType ? validateType[key] : (value: string) => Boolean(value);

export const handlerValidate: HandlerValidate = (value, type) => getValidate(type)(value);
