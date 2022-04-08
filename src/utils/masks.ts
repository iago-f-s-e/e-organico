type Mask = 'phone' | 'document' | 'zipCode' | 'money';

type HandlerMask = (value: string, mask: Mask) => string;

type Masks<T> = {
  [key: string]: (value: T) => T;
};

function formatTheComa(value: string, withComma: boolean): string {
  const _value = (Number(value.replace(/\D/g, '')) / 100).toFixed(2);

  if (!withComma) return _value;

  return _value.replace('.', ',');
}

const inputMasks: Masks<string> = {
  money: (value) => `R$ ${formatTheComa(value, true)}`,

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

  zipCode: (value: string) => value.replace(/^(\d{5})(\d{1})/, '$1-$2'),
};

const removeMasks: Masks<string> = {
  money: (value: string) => formatTheComa(value, false),

  phone: (value: string) => value.replace(/\D/g, ''),

  document: (value: string) => value.replace(/\D/g, ''),

  zipCode: (value: string) => value.replace(/\D/g, ''),
};

const inputMask = (key: string) => (key in inputMasks ? inputMasks[key] : (value: string) => value);

const removeMask = (key: string) =>
  key in removeMasks ? removeMasks[key] : (value: string) => value;

export const handlerInputMask: HandlerMask = (value, mask) => inputMask(mask)(value);
export const handleRemoveMask: HandlerMask = (value, mask) => removeMask(mask)(value);
