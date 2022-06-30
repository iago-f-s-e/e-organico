import { PayloadAction } from '@reduxjs/toolkit';

export type ToastType = 'error' | 'info' | 'success';

type ToastPayload = {
  type: ToastType;
  message: string;
};

export type Toast = ToastPayload & { visible: boolean };

export type Payload = PayloadAction<ToastPayload>;
