import { handleInputMask } from '@src/utils';

export type State = {
  total: string;
  quantity: string;
  price: number;
};

type Actions = 'decrementQuantity' | 'incrementQuantity';

type Action = {
  type: Actions;
};

type Reducer = (state: State, action: Action) => State;

const reducers: { [key in Actions]: Reducer } = {
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
};

export const reducer: Reducer = (state, action) => reducers[action.type](state, action);
