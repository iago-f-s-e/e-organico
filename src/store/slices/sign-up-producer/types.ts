import { PayloadAction } from '@reduxjs/toolkit';
import { Image } from '../image/types';
import { Market } from '../market/types';
import { CertificationType } from '../producer/types';
import { ProducerProduct } from '../product/types';
import { SignUpPayload } from '../sign-up/types';

type ProducerPayload = {
  userType: 'producer';
  certification: CertificationType;
  makeDelivery: 'YES' | 'NO';
  propertyImages: Image[];
  markets: Market[];
  products: ProducerProduct[];
};

export type SignUpProducer = SignUpPayload & ProducerPayload;

export type Payload = PayloadAction<SignUpProducer>;
