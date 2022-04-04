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
  image: { uri: string; base64: string };
};
type Response = Error | Success;

type FormatState = (state: State) => Response;

export const formatState: FormatState = ({ name, phone, image }): Response => {
  const _name = name.trim();
  const _phone = handleRemoveMask(phone, 'phone');
  const _uri = image.uri.trim();

  if (_name.length <= 1) {
    return { type: 'error', message: 'Nome inválido! O Tamanho precisa ser maior que 1' };
  }

  if (_phone.length !== 11) {
    return { type: 'error', message: 'Numero com formato incorreto!' };
  }

  if (!_uri.length) {
    return { type: 'error', message: 'Image não selecionada' };
  }

  return { type: 'success', name: _name, phone: _phone, image };
};
