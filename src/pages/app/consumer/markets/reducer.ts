import { Market } from '@src/store/slices/market/types';

type State = {
  loading: boolean;
  markets: Market[];
  lastMarkets: Market[];
  topTransactions: Market[];
};

type Actions = 'changeLoading' | 'onChangeMarkets';

type Action = {
  type: Actions;
  payload?: boolean | Market[];
};

type Reducer = (state: State, action: Action) => State;

const reducers: { [key in Actions]: Reducer } = {
  changeLoading: (state, action): State => ({ ...state, loading: Boolean(action.payload) }),

  onChangeMarkets: (state, action): State => ({ ...state, markets: action.payload as Market[] }),
};

export const initialState: State = {
  loading: true,
  markets: [],
  lastMarkets: [],
  topTransactions: [],
};

export const reducer: Reducer = (state, action) => reducers[action.type](state, action);
