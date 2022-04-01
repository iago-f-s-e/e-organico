type Mask = 'phone' | 'document';

type HandlerInputMask = (value: string, mask: Mask) => string;

type Masks<T> = {
  [key: string]: (value: T) => T;
};

const masks: Masks<string> = {
  phone: (value: string) =>
    value
      .replace(/^(\d{2})(\d{1})/, '($1) $2')
      .replace(/^\((\d{2})\) (\d{1})(\d{1})/, '($1) $2 $3')
      .replace(/^\((\d{2})\) (\d{1}) (\d{4})(\d{1,4})/, '($1) $2 $3-$4'),
  document: (value: string) =>
    value
      .replace(/^(\d{3})(\d{1})/, '$1.$2')
      .replace(/^(\d{3}\.\d{3})(\d{1})/, '$1.$2')
      .replace(/^(\d{3}\.\d{3}\.\d{3})(\d{1})/, '$1-$2'),
};

const getMask = (key: string) => (key in masks ? masks[key] : (value: string) => value);

export const handlerInputMask: HandlerInputMask = (value, mask) => {
  return getMask(mask)(value);
};
