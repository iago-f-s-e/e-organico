import { createSlice } from '@reduxjs/toolkit';
import { LoggedUser, LoggedUserPayload } from './types';

const initialState: LoggedUser = {
  token: null,
  user: null,
};

export const userSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoggedUser: (_, { payload }: LoggedUserPayload): LoggedUser => payload,
    clearUser: (): LoggedUser => initialState,
  },
});
