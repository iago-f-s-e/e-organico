import { createSlice } from '@reduxjs/toolkit';
import { defaultCurrentUser } from '@src/constants/default-entities';
import { LoggedUser, LoggedUserPayload } from './types';

const initialState: LoggedUser = defaultCurrentUser;

export const userSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoggedUser: (_, { payload }: LoggedUserPayload): LoggedUser => payload,
    clearUser: (): LoggedUser => initialState,
  },
});
