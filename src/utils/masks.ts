export type mask = 'phone';

export type HandlerInputMask = (event: string, mask: mask) => string;

type Masks<T> = {
  [key: string]: (value: T) => T;
};

const masks: Masks<string> = {
  phone: (value: string) =>
    value
      .replace(/^(\d{2})(\d{1})/, '($1) $2')
      .replace(/^\((\d{2})\) (\d{4,5})(\d{1,4})/, '($1) $2-$3'),
};

const getMask = (key: string) => (key in masks ? masks[key] : (value: string) => value);

export const handlerInputMask: HandlerInputMask = (value, mask) => {
  return getMask(mask)(value);
};
