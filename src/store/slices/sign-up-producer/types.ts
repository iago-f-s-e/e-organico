import { PayloadAction } from '@reduxjs/toolkit';
import { Image } from '../image/types';
import { CertificationType } from '../producer/types';
import { SignUpPayload } from '../sign-up/types';

type ProducerPayload = {
  userType: 'producer';
  certification: CertificationType;
  makeDelivery: 'YES' | 'NO';
  propertyImages: Image[];
};

export type SignUpProducer = SignUpPayload & ProducerPayload;

export type Payload = PayloadAction<SignUpProducer>;
