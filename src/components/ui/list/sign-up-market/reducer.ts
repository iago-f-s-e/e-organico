import { Animated } from 'react-native';

export type State = {
  sizeContainer: Animated.ValueXY;
  opacityContent: Animated.ValueXY;
  opened: boolean;
};

type Actions = 'onOpenAnimation' | 'onCloseAnimation';

type Action = {
  type: Actions;
};

type Reducer = (state: State, action: Action) => State;

const reducers: { [key in Actions]: Reducer } = {
  onOpenAnimation: (state, _): State => {
    Animated.parallel([
      Animated.timing(state.sizeContainer.y, {
        toValue: 400,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(state.opacityContent.x, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();

    return { ...state, opened: true };
  },

  onCloseAnimation: (state, _): State => {
    Animated.parallel([
      Animated.timing(state.sizeContainer.y, {
        toValue: 50,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(state.opacityContent.x, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();

    return { ...state, opened: false };
  },
};

export const initialState: State = {
  sizeContainer: new Animated.ValueXY({ x: 0, y: 50 }),
  opacityContent: new Animated.ValueXY({ x: 1, y: 0 }),
  opened: false,
};

export const reducer: Reducer = (state, action) => reducers[action.type](state, action);
