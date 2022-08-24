import { Product } from '@src/store/slices/product/types';
import { UnitMeasure } from '@src/store/slices/unit-measure/types';
import { Animated } from 'react-native';

type State = {
  sizeButton: Animated.ValueXY;
  opacityButton: Animated.ValueXY;
  loading: boolean;
  products: Product[];
  unitMeasures: UnitMeasure[];
};

type Actions =
  | 'onOpenButton'
  | 'onCloseButton'
  | 'changeLoading'
  | 'onChangeProducts'
  | 'onChangeUnitMeasures';

type Action = {
  type: Actions;
  payload?: boolean | Product[] | UnitMeasure[];
};

type Reducer = (state: State, action: Action) => State;

const reducers: { [key in Actions]: Reducer } = {
  changeLoading: (state, action): State => ({ ...state, loading: Boolean(action.payload) }),

  onChangeProducts: (state, action): State => ({ ...state, products: action.payload as Product[] }),

  onChangeUnitMeasures: (state, action): State => ({
    ...state,
    unitMeasures: action.payload as UnitMeasure[],
  }),

  onOpenButton: (state, _): State => {
    Animated.parallel([
      Animated.timing(state.opacityButton.x, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(state.sizeButton.y, {
        toValue: 40,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();

    return state;
  },

  onCloseButton: (state, _): State => {
    Animated.parallel([
      Animated.timing(state.opacityButton.x, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(state.sizeButton.y, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();

    return state;
  },
};

export const initialState: State = {
  sizeButton: new Animated.ValueXY({ x: 0, y: 0 }),
  opacityButton: new Animated.ValueXY({ x: 0, y: 0 }),
  loading: false,
  products: [],
  unitMeasures: [],
};

export const reducer: Reducer = (state, action) => reducers[action.type](state, action);
