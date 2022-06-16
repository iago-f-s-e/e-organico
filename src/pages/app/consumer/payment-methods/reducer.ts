import { Payment } from '@src/store/slices/payment-method/types';

export type State = {
  loading: boolean;
  payment: Payment;
  payments: Payment[];
};

type Actions = 'onPaymentMethod' | 'changeLoading' | 'onChangePayments';

type Action = {
  type: Actions;
  payload: boolean | Payment | Payment[];
};

type Reducer = (state: State, action: Action) => State;

const reducers: { [key in Actions]: Reducer } = {
  changeLoading: (state, action): State => ({ ...state, loading: Boolean(action.payload) }),

  onChangePayments: (state, action): State => ({ ...state, payments: action.payload as Payment[] }),

  onPaymentMethod: (state, { payload }): State => ({ ...state, payment: payload as Payment }),
};

export const initialState: State = {
  loading: true,
  payments: [],
  payment: null,
};

export const reducer: Reducer = (state, action) => reducers[action.type](state, action);
