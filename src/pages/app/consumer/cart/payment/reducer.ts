import { Animated } from 'react-native';

export type State = {
  loading: boolean;
  sizeButton: Animated.ValueXY;
  opacityButton: Animated.ValueXY;
};

type Actions = 'openButton' | 'closeButton';

type Action = {
  type: Actions;
};

type Reducer = (state: State, action: Action) => State;

const reducers: { [key in Actions]: Reducer } = {
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

export const initialState: State = {
  loading: false,
  sizeButton: new Animated.ValueXY({ x: 0, y: 40 }),
  opacityButton: new Animated.ValueXY({ x: 1, y: 0 }),
};

export const reducer: Reducer = (state, action) => reducers[action.type](state, action);
