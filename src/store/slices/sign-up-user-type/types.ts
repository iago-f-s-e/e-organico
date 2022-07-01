import { PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '../current/types';

export type SignUpUserType = {
  type: UserType;
};

export type Payload = PayloadAction<SignUpUserType>;
