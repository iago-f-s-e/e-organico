import { MinimalProducer } from '@src/store/slices/producer/types';

type State = {
  loading: boolean;
  producers: MinimalProducer[];
  lastProducers: MinimalProducer[];
  topTransactions: MinimalProducer[];
  topRating: MinimalProducer[];
};

type Actions = 'changeLoading' | 'onChangeProducers';

type Action = {
  type: Actions;
  payload?: boolean | MinimalProducer[];
};

type Reducer = (state: State, action: Action) => State;

const reducers: { [key in Actions]: Reducer } = {
  changeLoading: (state, action): State => ({ ...state, loading: Boolean(action.payload) }),

  onChangeProducers: (state, action): State => ({
    ...state,
    producers: action.payload as MinimalProducer[],
  }),
};

export const initialState: State = {
  loading: true,
  producers: [],
  lastProducers: [],
  topTransactions: [],
  topRating: [],
};

export const reducer: Reducer = (state, action) => reducers[action.type](state, action);
