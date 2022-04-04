import { CertificationType } from '@src/store/slices/producer/types';
import { Animated } from 'react-native';

type Delivery = 'YES' | 'NO';

type State = {
  sizeImage: Animated.ValueXY;
  sizeButton: Animated.ValueXY;
  opacityButton: Animated.ValueXY;
  certification: CertificationType;
  delivery: Delivery;
  loading: boolean;
};

type Actions =
  | 'onOpenInput'
  | 'onCloseInput'
  | 'changeCertification'
  | 'changeDelivery'
  | 'changeLoading';

type Action = {
  type: Actions;
  payload?: CertificationType | Delivery | boolean;
};

type Reducer = (state: State, action: Action) => State;

const reducers: { [key in Actions]: Reducer } = {
  changeLoading: (state, action): State => ({ ...state, loading: Boolean(action.payload) }),

  changeDelivery: (state, action): State => ({
    ...state,
    delivery: String(action.payload) as Delivery,
  }),

  changeCertification: (state, action): State => ({
    ...state,
    certification: String(action.payload) as CertificationType,
  }),

  onCloseInput: (state, _): State => {
    Animated.parallel([
      Animated.timing(state.sizeImage.x, {
        toValue: 150,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(state.sizeImage.y, {
        toValue: 150,
        duration: 200,
        useNativeDriver: false,
      }),
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

  onOpenInput: (state, _): State => {
    Animated.parallel([
      Animated.timing(state.sizeImage.x, {
        toValue: 100,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(state.sizeImage.y, {
        toValue: 100,
        duration: 200,
        useNativeDriver: false,
      }),
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
  sizeImage: new Animated.ValueXY({ x: 150, y: 150 }),
  sizeButton: new Animated.ValueXY({ x: 150, y: 40 }),
  opacityButton: new Animated.ValueXY({ x: 1, y: 0 }),
  certification: 'IN CONVERSION',
  delivery: 'YES',
  loading: false,
};

export const reducer: Reducer = (state, action) => reducers[action.type](state, action);
