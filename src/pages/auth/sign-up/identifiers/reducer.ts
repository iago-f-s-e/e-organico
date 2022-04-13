import { Image } from '@src/store/slices/image/types';
import { Animated } from 'react-native';

export type State = {
  sizeImage: Animated.ValueXY;
  sizeButton: Animated.ValueXY;
  opacityButton: Animated.ValueXY;
  name: string;
  phone: string;
  image: Image;
  loading: boolean;
};

type Actions =
  | 'onOpenInput'
  | 'onCloseInput'
  | 'changeName'
  | 'changePhone'
  | 'changeImage'
  | 'changeLoading';

type Action = {
  type: Actions;
  payload?: boolean | string | Image;
};

type Reducer = (state: State, action: Action) => State;

const reducers: { [key in Actions]: Reducer } = {
  changeLoading: (state, { payload }): State => ({ ...state, loading: Boolean(payload) }),

  changeName: (state, { payload }): State => ({ ...state, name: String(payload) }),

  changePhone: (state, { payload }): State => ({ ...state, phone: String(payload) }),

  changeImage: (state, { payload }): State => ({ ...state, image: payload as Image }),

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
  name: '',
  phone: '',
  loading: false,
  image: {
    base64: '',
    uri: '',
  },
};

export const reducer: Reducer = (state, action) => reducers[action.type](state, action);
