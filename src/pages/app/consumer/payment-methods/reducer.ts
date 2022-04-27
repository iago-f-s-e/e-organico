import { PaymentMethod } from '@src/store/slices/payment-method/types';

export type State = {
  paymentMethod: PaymentMethod;
};

type Actions = 'onPaymentMethod';

type Action = {
  type: Actions;
  payload: PaymentMethod;
};

type Reducer = (state: State, action: Action) => State;

const reducers: { [key in Actions]: Reducer } = {
  onPaymentMethod: (state, { payload }): State => ({ ...state, paymentMethod: payload }),
};

export const initialState: State = {
  paymentMethod: null,
};

export const reducer: Reducer = (state, action) => reducers[action.type](state, action);
