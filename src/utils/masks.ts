type Mask = 'phone' | 'document' | 'zipCode' | 'money';

type MoneyOptions = {
  withComma?: boolean;
  onlyComma?: boolean;
};

type HandlerMask = (value: string, mask: Mask, options?: MoneyOptions) => string;

type Masks<T> = {
  [key: string]: (value: T, options?: MoneyOptions) => T;
};

function formatTheComa(value: string, options?: MoneyOptions): string {
  if (options?.onlyComma) return Number(value).toFixed(2).replace('.', ',');

  const _value = (Number(value.replace(/\D/g, '')) / 100).toFixed(2);

  if (!options?.withComma) return _value;

  return _value.replace('.', ',');
}

const inputMasks: Masks<string> = {
  money: (value, options) => `R$ ${formatTheComa(value, options)}`,

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
  money: (value: string, options: MoneyOptions) => formatTheComa(value, options),

  phone: (value: string) => value.replace(/\D/g, ''),

  document: (value: string) => value.replace(/\D/g, ''),

  zipCode: (value: string) => value.replace(/\D/g, ''),
};

const inputMask = (key: string) => (key in inputMasks ? inputMasks[key] : (value: string) => value);

const removeMask = (key: string) =>
  key in removeMasks ? removeMasks[key] : (value: string) => value;

export const handleInputMask: HandlerMask = (value, mask, options?: MoneyOptions) =>
  inputMask(mask)(value, options);

export const handleRemoveMask: HandlerMask = (value, mask, options?: MoneyOptions) =>
  removeMask(mask)(value, options);
