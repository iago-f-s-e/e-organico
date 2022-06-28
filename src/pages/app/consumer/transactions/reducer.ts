import { MinimalConsumerTransaction } from '@src/store/slices/transaction/types';

type State = {
  loading: boolean;
  inProgress: MinimalConsumerTransaction[];
  concluded: MinimalConsumerTransaction[];
};

type Actions = 'changeLoading' | 'onChangeInProgress';

type Action = {
  type: Actions;
  payload?: boolean | MinimalConsumerTransaction[];
};

type Reducer = (state: State, action: Action) => State;

const reducers: { [key in Actions]: Reducer } = {
  changeLoading: (state, action): State => ({ ...state, loading: Boolean(action.payload) }),

  onChangeInProgress: (state, action): State => ({
    ...state,
    inProgress: action.payload as MinimalConsumerTransaction[],
  }),
};

export const initialState: State = {
  loading: true,
  inProgress: [],
  concluded: [],
};

export const reducer: Reducer = (state, action) => reducers[action.type](state, action);
