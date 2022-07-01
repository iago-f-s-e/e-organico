import { Market } from '@src/store/slices/market/types';
import { Animated } from 'react-native';

type State = {
  sizeButton: Animated.ValueXY;
  opacityButton: Animated.ValueXY;
  loading: boolean;
  markets: Market[];
};

type Actions = 'onOpenButton' | 'onCloseButton' | 'changeLoading' | 'onChangeMarkets';

type Action = {
  type: Actions;
  payload?: boolean | Market[];
};

type Reducer = (state: State, action: Action) => State;

const reducers: { [key in Actions]: Reducer } = {
  changeLoading: (state, action): State => ({ ...state, loading: Boolean(action.payload) }),

  onChangeMarkets: (state, action): State => ({ ...state, markets: action.payload as Market[] }),

  onOpenButton: (state, _): State => {
    Animated.parallel([
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

  onCloseButton: (state, _): State => {
    Animated.parallel([
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
  sizeButton: new Animated.ValueXY({ x: 0, y: 0 }),
  opacityButton: new Animated.ValueXY({ x: 0, y: 0 }),
  loading: true,
  markets: [],
};

export const reducer: Reducer = (state, action) => reducers[action.type](state, action);
