import { Animated } from 'react-native';

type State = {
  sizeImage: Animated.ValueXY;
  sizeButton: Animated.ValueXY;
  opacityButton: Animated.ValueXY;
  email: string;
  document: string;
  password: string;
  confPassword: string;
  loading: boolean;
};

type Actions =
  | 'onOpenInput'
  | 'onCloseInput'
  | 'changeEmail'
  | 'changeDocument'
  | 'changePassword'
  | 'changeConfPassword'
  | 'changeLoading';

type Action = {
  type: Actions;
  payload?: string | boolean;
};

type Reducer = (state: State, action: Action) => State;

const reducers: { [key in Actions]: Reducer } = {
  changeLoading: (state, action): State => ({ ...state, loading: Boolean(action.payload) }),

  changeEmail: (state, action): State => ({ ...state, email: String(action.payload) }),

  changeDocument: (state, action): State => ({ ...state, document: String(action.payload) }),

  changePassword: (state, action): State => ({ ...state, password: String(action.payload) }),

  changeConfPassword: (state, action): State => ({
    ...state,
    confPassword: String(action.payload),
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
  email: '',
  document: '',
  password: '',
  confPassword: '',
  loading: false,
};

export const reducer: Reducer = (state, action) => reducers[action.type](state, action);
