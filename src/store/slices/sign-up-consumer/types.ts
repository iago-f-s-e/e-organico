import { PayloadAction } from '@reduxjs/toolkit';
import { SignUpPayload } from '../sign-up/types';

type ConsumerPayload = {
  userType: 'consumer';
};

export type SignUpConsumer = SignUpPayload & ConsumerPayload;

export type Payload = PayloadAction<SignUpConsumer>;
