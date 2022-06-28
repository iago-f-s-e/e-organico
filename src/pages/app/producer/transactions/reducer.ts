import { MinimalConsumerTransaction } from '@src/store/slices/transaction/types';

type State = {
  loading: boolean;
  concluded: MinimalConsumerTransaction[];
};

type Actions = 'changeLoading';

type Action = {
  type: Actions;
  payload?: boolean | MinimalConsumerTransaction[];
};

type Reducer = (state: State, action: Action) => State;

const reducers: { [key in Actions]: Reducer } = {
  changeLoading: (state, action): State => ({ ...state, loading: Boolean(action.payload) }),
};

export const initialState: State = {
  loading: true,
  concluded: [],
};

export const reducer: Reducer = (state, action) => reducers[action.type](state, action);
