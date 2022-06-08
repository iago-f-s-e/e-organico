import { defaultProducerProduct } from '@src/constants/default-entities';
import { ProducerProductDetail } from '@src/store/slices/producer-product/type';
import { handleInputMask } from '@src/utils';

export type State = {
  loading: boolean;
  idParam: string;
  producerProduct: ProducerProductDetail;
  total: string;
  quantity: string;
  price: number;
};

type Actions =
  | 'decrementQuantity'
  | 'incrementQuantity'
  | 'changeLoading'
  | 'onChangeProducerProduct';

type Action = {
  type: Actions;
  payload?: boolean | ProducerProductDetail;
};

type Reducer = (state: State, action: Action) => State;

const reducers: { [key in Actions]: Reducer } = {
  changeLoading: (state, action): State => ({ ...state, loading: Boolean(action.payload) }),

  onChangeProducerProduct: (state, action): State => {
    const producerProduct = action.payload as ProducerProductDetail;
    const price = Number(producerProduct.price);
    const total = handleInputMask(producerProduct.price, 'money', { onlyComma: true });

    return { ...state, producerProduct, price, total };
  },

  decrementQuantity: (state): State => {
    const quantity = Number(state.quantity) - 1;

    if (quantity <= 0) return state;

    const total = handleInputMask((quantity * state.price).toString(), 'money', {
      onlyComma: true,
    });

    return { ...state, total, quantity: quantity.toString() };
  },
  incrementQuantity: (state): State => {
    const quantity = Number(state.quantity) + 1;
    const total = handleInputMask((quantity * state.price).toString(), 'money', {
      onlyComma: true,
    });

    return { ...state, total, quantity: quantity.toString() };
  },
};

export const initialState: State = {
  quantity: '1',
  total: 'R$ 0,00',
  price: 0,
  idParam: '',
  loading: true,
  producerProduct: defaultProducerProduct,
};

export const reducer: Reducer = (state, action) => reducers[action.type](state, action);
