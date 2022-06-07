import { defaultMarketDetail } from '@src/constants/default-entities';
import { MarketDetail } from '@src/store/slices/market/types';

type State = {
  loading: boolean;
  idParam: string;
  market: MarketDetail;
};

type Actions = 'changeLoading' | 'onChangeMarket';

type Action = {
  type: Actions;
  payload?: boolean | MarketDetail;
};

type Reducer = (state: State, action: Action) => State;

const reducers: { [key in Actions]: Reducer } = {
  changeLoading: (state, action): State => ({ ...state, loading: Boolean(action.payload) }),

  onChangeMarket: (state, action): State => ({ ...state, market: action.payload as MarketDetail }),
};

export const initialState: State = {
  loading: true,
  market: defaultMarketDetail,
  idParam: '',
};

export const reducer: Reducer = (state, action) => reducers[action.type](state, action);
