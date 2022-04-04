import { createSlice } from '@reduxjs/toolkit';

import { Payload, SignUpUserType } from './types';

const initialState: SignUpUserType = {
  type: 'consumer',
};

export const signUpUserTypeSlice = createSlice({
  name: 'signUpUserType',
  initialState,
  reducers: {
    changeSignUpUserType: (_, { payload }: Payload): SignUpUserType => ({ ...payload }),
  },
});
