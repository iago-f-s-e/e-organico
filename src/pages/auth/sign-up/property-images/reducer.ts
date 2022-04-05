import { Animated } from 'react-native';

type Image = {
  uri: string;
  base64: string;
};

type State = {
  sizeImage: Animated.ValueXY;
  sizeButton: Animated.ValueXY;
  opacityButton: Animated.ValueXY;
  loading: boolean;
  images: Image[];
};

type Actions = 'onOpenInput' | 'onCloseInput' | 'changeLoading' | 'changeImages';

type Action = {
  type: Actions;
  payload?: boolean | { image: Image; index: number };
};

type Reducer = (state: State, action: Action) => State;

const reducers: { [key in Actions]: Reducer } = {
  changeLoading: (state, { payload }): State => ({ ...state, loading: Boolean(payload) }),

  changeImages: (state, { payload }): State => {
    const { images } = state;
    const { index, image } = payload as { image: Image; index: number };

    images[index] = image;

    return { ...state, images };
  },

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
  loading: false,
  images: [],
};

export const reducer: Reducer = (state, action) => reducers[action.type](state, action);
