import { LoggedUser } from '@src/store/slices/current/types';
import { defaultImage } from '../default-entities/image';

export const defaultCurrentUser: LoggedUser = {
  token: null,
  user: {
    email: '',
    id: '',
    image: defaultImage,
    name: '',
    phone: '',
    userType: 'consumer',
  },
};
