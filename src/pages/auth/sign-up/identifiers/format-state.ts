import { handleRemoveMask } from '@src/utils';
import { State } from './reducer';

type Error = {
  type: 'error';
  message: string;
};

type Success = {
  type: 'success';
  name: string;
  phone: string;
};
type Response = Error | Success;

type FormatState = (state: State) => Response;

export const formatState: FormatState = ({ name, phone }): Response => {
  const _name = name.trim();
  const _phone = handleRemoveMask(phone, 'phone');

  if (_name.length <= 1) {
    return { type: 'error', message: 'Nome inválido! O Tamanho precisa ser maior que 1' };
  }

  if (_phone.length !== 11) {
    return { type: 'error', message: 'Numero com formato incorreto!' };
  }

  return { type: 'success', name: _name, phone: _phone };
};
