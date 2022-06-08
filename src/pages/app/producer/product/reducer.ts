import { ProducerProduct } from '@src/store/slices/producer-product/type';
import { Animated } from 'react-native';

export type State = {
  producerProduct: ProducerProduct;
  sizeButton: Animated.ValueXY;
  opacityButton: Animated.ValueXY;
};

type Actions =
  | 'openButton'
  | 'closeButton'
  | 'onChangeHarvestDate'
  | 'onChangeStock'
  | 'onChangePrice';

type Action = {
  type: Actions;
  payload?: Date | string;
};

type Reducer = (state: State, action: Action) => State;

const reducers: { [key in Actions]: Reducer } = {
  onChangeHarvestDate: (state, { payload }): State => ({
    ...state,
    producerProduct: { ...state.producerProduct, harvestDate: payload as Date },
  }),

  onChangeStock: (state, { payload }): State => ({
    ...state,
    producerProduct: { ...state.producerProduct, stock: payload as string },
  }),

  onChangePrice: (state, { payload }): State => ({
    ...state,
    producerProduct: { ...state.producerProduct, price: payload as string },
  }),

  openButton: (state, _): State => {
    Animated.parallel([
      Animated.timing(state.opacityButton.x, {
        toValue: 1,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(state.sizeButton.y, {
        toValue: 40,
        duration: 400,
        useNativeDriver: false,
      }),
    ]).start();

    return state;
  },

  closeButton: (state, _): State => {
    Animated.parallel([
      Animated.timing(state.opacityButton.x, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(state.sizeButton.y, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false,
      }),
    ]).start();

    return state;
  },
};

const imagePath =
  'https://www.amigodoclima.com.br/wp-content/themes/amigodoclima/img/not-available.png';

export const initialState: State = {
  producerProduct: {
    harvestDate: new Date(),
    id: '',
    price: '0.00',
    product: {
      name: '',
      id: '',
      image: imagePath,
      type: '',
    },
    stock: '0',
    unitMeasure: null,
  },
  sizeButton: new Animated.ValueXY({ x: 0, y: 0 }),
  opacityButton: new Animated.ValueXY({ x: 0, y: 0 }),
};

export const reducer: Reducer = (state, action) => reducers[action.type](state, action);
