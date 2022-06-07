import { defaultProducerDetail } from '@src/constants/default-entities';
import { ProducerDetail } from '@src/store/slices/producer/types';

type State = {
  loading: boolean;
  idParam: string;
  producer: ProducerDetail;
};

type Actions = 'changeLoading' | 'onChangeProducer';

type Action = {
  type: Actions;
  payload?: boolean | ProducerDetail;
};

type Reducer = (state: State, action: Action) => State;

const reducers: { [key in Actions]: Reducer } = {
  changeLoading: (state, action): State => ({ ...state, loading: Boolean(action.payload) }),

  onChangeProducer: (state, action): State => ({
    ...state,
    producer: action.payload as ProducerDetail,
  }),
};

export const initialState: State = {
  loading: true,
  producer: defaultProducerDetail,
  idParam: '',
};

export const reducer: Reducer = (state, action) => reducers[action.type](state, action);
