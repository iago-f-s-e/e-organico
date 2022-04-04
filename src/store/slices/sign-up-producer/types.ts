import { PayloadAction } from '@reduxjs/toolkit';
import { CertificationType } from '../producer/types';
import { SignUpPayload } from '../sign-up/types';

type ProducerPayload = {
  userType: 'producer';
  certification: CertificationType;
  makeDelivery: boolean;
};

export type SignUpProducer = SignUpPayload & ProducerPayload;

export type Payload = PayloadAction<SignUpProducer>;
