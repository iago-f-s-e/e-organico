import { PayloadAction } from '@reduxjs/toolkit';

export type SignUpUserType = {
  type: 'consumer' | 'producer';
};

export type Payload = PayloadAction<SignUpUserType>;
