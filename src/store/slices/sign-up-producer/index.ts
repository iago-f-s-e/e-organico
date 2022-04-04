import { createSlice } from '@reduxjs/toolkit';

import { Payload, SignUpProducer } from './types';

const initialState: SignUpProducer = {
  userType: 'producer',
  address: {
    city: '',
    complement: '',
    district: '',
    number: -1,
    state: '',
    street: '',
    zipCode: '',
  },
  document: '',
  email: '',
  name: '',
  password: '',
  phone: '',
  certification: 'IN CONVERSION',
  makeDelivery: false,
};

export const signUpProducerSlice = createSlice({
  name: 'signUpProducer',
  initialState,
  reducers: {
    changeSignUpProducer: (state, { payload }: Payload): SignUpProducer => ({
      ...state,
      ...payload,
    }),
  },
});
