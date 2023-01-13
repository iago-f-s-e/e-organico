import { dimensionSystem } from '@src/styles';
import { defaultProducerProduct } from '@src/constants/default-entities';
import { ProducerProductDetail } from '@src/store/slices/producer-product/type';
import { handleInputMask, handleRemoveMask, translateDate } from '@src/utils';
import { Animated } from 'react-native';

export type State = {
  idParam: string;
  loading: boolean;
  updating: boolean;
  inactivating: boolean;
  stock: string;
  price: string;
  isDifferent: boolean;
  showDatePicker: boolean;
  harvestDate: Date;
  producerProduct: ProducerProductDetail;
  imageSize: Animated.ValueXY;
  sizeConfirmButton: Animated.ValueXY;
  sizeCancelButton: Animated.ValueXY;
  opacityButton: Animated.ValueXY;
};

type Actions =
  | 'changeLoading'
  | 'changeUpdate'
  | 'changeInactive'
  | 'openButton'
  | 'closeButton'
  | 'onInputFocus'
  | 'onInputBlur'
  | 'onChangeHarvestDate'
  | 'onChangeStock'
  | 'onChangePrice'
  | 'onChangeProducerProduct'
  | 'onChangeShowDatePick';

type Action = {
  type: Actions;
  payload?: Date | boolean | string | ProducerProductDetail;
};

type Reducer = (state: State, action: Action) => State;

const _32PerCent = dimensionSystem.screen.width * 0.32;
const _50PerCent = dimensionSystem.screen.width * 0.5;
const _65PerCent = dimensionSystem.screen.width * 0.65;
const _100PerCent = dimensionSystem.screen.width;

const getIsDifferent = (state: State): boolean => {
  const stockIsDifferent = state.stock !== state.producerProduct.stock;

  const priceIsDifferent = handleRemoveMask(state.price, 'money') !== state.producerProduct.price;

  const stateDate = translateDate(state.harvestDate);
  const originalDate = translateDate(state.producerProduct.harvestDate);

  const dateIsDifferent = originalDate !== stateDate;

  return stockIsDifferent || priceIsDifferent || dateIsDifferent;
};

const reducers: { [key in Actions]: Reducer } = {
  changeLoading: (state, action): State => ({ ...state, loading: Boolean(action.payload) }),

  changeUpdate: (state, action): State => ({ ...state, updating: Boolean(action.payload) }),

  changeInactive: (state, action): State => ({ ...state, inactivating: Boolean(action.payload) }),

  onChangeShowDatePick: (state, action): State => ({
    ...state,
    showDatePicker: Boolean(action.payload),
  }),

  onChangeHarvestDate: (state, { payload }): State => {
    const [usDate] = (payload as Date).toISOString().split('T');
    const harvestDate = new Date(`${usDate}T12:00:00.000Z`);

    const newState = { ...state, harvestDate };

    const isDifferent = getIsDifferent(newState);

    return { ...newState, isDifferent };
  },

  onChangeStock: (state, { payload }): State => {
    const newState = { ...state, stock: payload as string };

    const isDifferent = getIsDifferent(newState);

    return { ...newState, isDifferent };
  },

  onChangePrice: (state, { payload }): State => {
    const newState = { ...state, price: payload as string };

    const isDifferent = getIsDifferent(newState);

    return { ...newState, isDifferent };
  },

  onChangeProducerProduct: (state, action): State => {
    const producerProduct = action.payload as ProducerProductDetail;
    const { stock } = producerProduct;
    const harvestDate = new Date(producerProduct.harvestDate);
    const price = handleInputMask(producerProduct.price, 'money', { onlyComma: true });

    const newState = { ...state, producerProduct, price, stock, harvestDate };

    const isDifferent = getIsDifferent(newState);

    return { ...newState, isDifferent };
  },

  openButton: (state, _): State => {
    Animated.parallel([
      Animated.timing(state.opacityButton.x, {
        toValue: 1,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(state.sizeConfirmButton.y, {
        toValue: 40,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(state.sizeConfirmButton.x, {
        toValue: _50PerCent,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(state.sizeCancelButton.x, {
        toValue: _50PerCent,
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
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(state.sizeConfirmButton.y, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(state.sizeConfirmButton.x, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(state.sizeCancelButton.x, {
        toValue: _100PerCent,
        duration: 400,
        useNativeDriver: false,
      }),
    ]).start();

    return state;
  },

  onInputFocus: (state, _): State => {
    Animated.parallel([
      Animated.timing(state.opacityButton.y, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(state.sizeCancelButton.y, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(state.imageSize.x, {
        toValue: _32PerCent,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(state.imageSize.y, {
        toValue: _32PerCent,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();

    return state;
  },

  onInputBlur: (state, _): State => {
    Animated.parallel([
      Animated.timing(state.opacityButton.y, {
        toValue: 1,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(state.sizeCancelButton.y, {
        toValue: 40,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(state.imageSize.x, {
        toValue: _65PerCent,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(state.imageSize.y, {
        toValue: _65PerCent,
        duration: 400,
        useNativeDriver: false,
      }),
    ]).start();

    return state;
  },
};

export const initialState: State = {
  idParam: '',
  isDifferent: false,
  showDatePicker: false,
  loading: true,
  updating: false,
  inactivating: false,
  harvestDate: new Date(),
  price: 'R$ 0,00',
  stock: '0',
  producerProduct: defaultProducerProduct,
  imageSize: new Animated.ValueXY({ x: _65PerCent, y: _65PerCent }),
  sizeConfirmButton: new Animated.ValueXY({ x: 0, y: 1 }),
  sizeCancelButton: new Animated.ValueXY({ x: _100PerCent, y: 40 }),
  opacityButton: new Animated.ValueXY({ x: 0, y: 1 }),
};

export const reducer: Reducer = (state, action) => reducers[action.type](state, action);
