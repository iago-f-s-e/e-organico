import { createSlice } from '@reduxjs/toolkit';

import { Payload, SignUpConsumer } from './types';

const initialState: SignUpConsumer = {
  userType: 'consumer',
  address: {
    city: '',
    complement: '',
    district: '',
    number: '',
    state: '',
    street: '',
    zipCode: '',
  },
  image: {
    base64: '',
    uri: '',
  },
  document: '',
  email: '',
  name: '',
  password: '',
  phone: '',
};

export const signUpConsumerSlice = createSlice({
  name: 'signUpConsumer',
  initialState,
  reducers: {
    changeSignUpConsumer: (state, { payload }: Payload): SignUpConsumer => ({
      ...state,
      ...payload,
    }),
  },
});
