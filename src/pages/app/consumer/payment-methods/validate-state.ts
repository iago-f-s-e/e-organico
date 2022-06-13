import { Payment } from '@src/store/slices/payment-method/types';
import { State } from './reducer';

type Error = {
  type: 'error';
  message: string;
};

type Success = {
  type: 'success';
  payment: Payment;
};

type Response = Error | Success;

type ValidateState = (state: State) => Response;

export const validateState: ValidateState = (state: State) => {
  if (!state.payment) {
    return { type: 'error', message: 'Selecione uma forma de pagamento!' };
  }

  return { type: 'success', payment: state.payment };
};
