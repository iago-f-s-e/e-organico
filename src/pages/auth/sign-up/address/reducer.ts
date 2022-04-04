import { Animated } from 'react-native';

export type State = {
  sizeImage: Animated.ValueXY;
  sizeButton: Animated.ValueXY;
  opacityButton: Animated.ValueXY;
  street: string;
  number: string;
  zipCode: string;
  district: string;
  city: string;
  state: string;
  complement: string;
  loading: boolean;
};

type Actions =
  | 'onOpenInput'
  | 'onCloseInput'
  | 'changeStreet'
  | 'changeNumber'
  | 'changeZipCode'
  | 'changeDistrict'
  | 'changeCity'
  | 'changeState'
  | 'changeComplement'
  | 'changeLoading';

type Action = {
  type: Actions;
  payload?: boolean | string;
};

type Reducer = (state: State, action: Action) => State;

const reducers: { [key in Actions]: Reducer } = {
  changeLoading: (state, action): State => ({ ...state, loading: Boolean(action.payload) }),

  changeStreet: (state, action): State => ({ ...state, street: String(action.payload) }),

  changeNumber: (state, action): State => ({ ...state, number: String(action.payload) }),

  changeZipCode: (state, action): State => ({ ...state, zipCode: String(action.payload) }),

  changeDistrict: (state, action): State => ({ ...state, district: String(action.payload) }),

  changeCity: (state, action): State => ({ ...state, city: String(action.payload) }),

  changeState: (state, action): State => ({ ...state, state: String(action.payload) }),

  changeComplement: (state, action): State => ({ ...state, complement: String(action.payload) }),

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
  street: '',
  number: '',
  zipCode: '',
  district: '',
  city: '',
  state: '',
  complement: '',
  loading: false,
};

export const reducer: Reducer = (state, action) => reducers[action.type](state, action);
