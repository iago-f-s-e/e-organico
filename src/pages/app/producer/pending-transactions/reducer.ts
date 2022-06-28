import { MinimalProducerTransaction } from '@src/store/slices/transaction/types';

type State = {
  loading: boolean;
  transactions: MinimalProducerTransaction[];
};

type Actions = 'changeLoading' | 'onChangeTransactions';

type Action = {
  type: Actions;
  payload?: boolean | MinimalProducerTransaction[];
};

type Reducer = (state: State, action: Action) => State;

const reducers: { [key in Actions]: Reducer } = {
  changeLoading: (state, action): State => ({ ...state, loading: Boolean(action.payload) }),

  onChangeTransactions: (state, action): State => ({
    ...state,
    transactions: action.payload as MinimalProducerTransaction[],
  }),
};

export const initialState: State = {
  loading: true,
  transactions: [],
};

export const reducer: Reducer = (state, action) => reducers[action.type](state, action);
