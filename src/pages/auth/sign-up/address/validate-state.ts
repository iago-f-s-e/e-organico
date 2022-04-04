import { handleRemoveMask } from '@src/utils';
import { State } from './reducer';

type Error = {
  type: 'error';
  message: string;
};

type Success = {
  type: 'success';
  city: string;
  complement: string;
  district: string;
  number: string;
  state: string;
  street: string;
  zipCode: string;
};
type Response = Error | Success;

type ValidateState = (state: State) => Response;

const isValidNumber = (value: string) => Number.isInteger(Number(value)) && Number(value) > 0;

export const validateState: ValidateState = ({
  city: _city,
  complement: _complement,
  district: _district,
  number: _number,
  state: _state,
  street: _street,
  zipCode,
}): Response => {
  const city = _city.trim();
  const complement = _complement.trim();
  const district = _district.trim();
  const number = _number.trim();
  const state = _state.trim();
  const street = _street.trim();
  const _zipCode = handleRemoveMask(zipCode, 'zipCode');

  if (city.length <= 2) return { type: 'error', message: 'Cidade invalida!' };

  if (district.length <= 2) return { type: 'error', message: 'Bairro invalido!' };

  if (state.length <= 2) return { type: 'error', message: 'Estado invalido!' };

  if (street.length <= 2) return { type: 'error', message: 'Rua invalida!' };

  if (!!number.length && !isValidNumber(number))
    return { type: 'error', message: 'Numero invalido!' };

  if (_zipCode.length !== 8) return { type: 'error', message: 'CEP invalido!' };

  return { type: 'success', city, complement, district, number, state, street, zipCode };
};
