import { MinimalProducerTransaction } from '@src/store/slices/transaction/types';

type State = {
  loading: boolean;
  delivering: boolean;
  transactions: MinimalProducerTransaction[];
};

type Actions = 'changeLoading' | 'changeDeliver' | 'onChangeTransactions';

type Action = {
  type: Actions;
  payload?: boolean | MinimalProducerTransaction[];
};

type Reducer = (state: State, action: Action) => State;

const reducers: { [key in Actions]: Reducer } = {
  changeLoading: (state, action): State => ({ ...state, loading: Boolean(action.payload) }),

  changeDeliver: (state, action): State => ({ ...state, delivering: Boolean(action.payload) }),

  onChangeTransactions: (state, action): State => ({
    ...state,
    transactions: action.payload as MinimalProducerTransaction[],
  }),
};

export const initialState: State = {
  loading: true,
  delivering: false,
  transactions: [],
};

export const reducer: Reducer = (state, action) => reducers[action.type](state, action);
