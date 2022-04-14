import { PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '../user/types';

export type SignUpUserType = {
  type: UserType;
};

export type Payload = PayloadAction<SignUpUserType>;
