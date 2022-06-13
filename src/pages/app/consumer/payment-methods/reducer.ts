import { Payment } from '@src/store/slices/payment-method/types';

export type State = {
  payment: Payment;
};

type Actions = 'onPaymentMethod';

type Action = {
  type: Actions;
  payload: Payment;
};

type Reducer = (state: State, action: Action) => State;

const reducers: { [key in Actions]: Reducer } = {
  onPaymentMethod: (state, { payload }): State => ({ ...state, payment: payload }),
};

export const initialState: State = {
  payment: null,
};

export const reducer: Reducer = (state, action) => reducers[action.type](state, action);
