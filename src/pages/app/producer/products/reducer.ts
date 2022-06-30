import { MinimalProducerProduct } from '@src/store/slices/producer-product/type';

type State = {
  loading: boolean;
  products: MinimalProducerProduct[];
  topTransactions: MinimalProducerProduct[];
  lessTransactions: MinimalProducerProduct[];
  lowStock: MinimalProducerProduct[];
};

type Actions = 'changeLoading' | 'onChangeProducts';

type Action = {
  type: Actions;
  payload?: boolean | MinimalProducerProduct[];
};

type Reducer = (state: State, action: Action) => State;

const reducers: { [key in Actions]: Reducer } = {
  changeLoading: (state, action): State => ({ ...state, loading: Boolean(action.payload) }),

  onChangeProducts: (state, action): State => ({
    ...state,
    products: action.payload as MinimalProducerProduct[],
  }),
};

export const initialState: State = {
  loading: true,
  products: [],
  topTransactions: [],
  lessTransactions: [],
  lowStock: [],
};

export const reducer: Reducer = (state, action) => reducers[action.type](state, action);
