import { Animated } from 'react-native';

type State = {
  sizeImage: Animated.ValueXY;
  password: string;
  phone: string;
  loading: boolean;
};

type Actions = 'onOpenInput' | 'onCloseInput' | 'changePassword' | 'changePhone' | 'changeLoading';

type Action = {
  type: Actions;
  payload?: string | boolean;
};

type Reducer = (state: State, action: Action) => State;

const reducers: { [key in Actions]: Reducer } = {
  changeLoading: (state, { payload }): State => ({ ...state, loading: Boolean(payload) }),

  changePassword: (state, { payload }): State => ({ ...state, password: String(payload) }),

  changePhone: (state, { payload }): State => ({ ...state, phone: String(payload) }),

  onCloseInput: (state, _): State => {
    Animated.parallel([
      Animated.timing(state.sizeImage.x, {
        toValue: 200,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(state.sizeImage.y, {
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
        toValue: 20,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();

    return state;
  },
};

export const initialState: State = {
  sizeImage: new Animated.ValueXY({ x: 200, y: 40 }),
  password: '',
  phone: '',
  loading: false,
};

export const reducer: Reducer = (state, action) => reducers[action.type](state, action);
