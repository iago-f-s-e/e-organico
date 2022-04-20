import { PayloadAction } from '@reduxjs/toolkit';

type ConsumerCartTopTab = {
  confirmedProducts: boolean;
  confirmedAddress: boolean;
  confirmedPayment: boolean;
};

export type Ui = {
  showBottomTab: boolean;
  cartToTab: ConsumerCartTopTab;
};

export type ConfirmOrCancelPayload = PayloadAction<boolean>;
