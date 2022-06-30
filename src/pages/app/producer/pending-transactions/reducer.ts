import { MinimalProducerTransaction } from '@src/store/slices/transaction/types';

type State = {
  loading: boolean;
  confirming: boolean;
  transactions: MinimalProducerTransaction[];
};

type Actions = 'changeLoading' | 'changeConfirm' | 'onChangeTransactions';

type Action = {
  type: Actions;
  payload?: boolean | MinimalProducerTransaction[];
};

type Reducer = (state: State, action: Action) => State;

const reducers: { [key in Actions]: Reducer } = {
  changeLoading: (state, action): State => ({ ...state, loading: Boolean(action.payload) }),

  changeConfirm: (state, action): State => ({ ...state, confirming: Boolean(action.payload) }),

  onChangeTransactions: (state, action): State => ({
    ...state,
    transactions: action.payload as MinimalProducerTransaction[],
  }),
};

export const initialState: State = {
  loading: true,
  confirming: false,
  transactions: [],
};

export const reducer: Reducer = (state, action) => reducers[action.type](state, action);
