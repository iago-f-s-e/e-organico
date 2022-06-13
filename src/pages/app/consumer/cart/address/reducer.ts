import { Market, Workday } from '@src/store/slices/market/types';
import { Animated } from 'react-native';

export type State = {
  sizeButton: Animated.ValueXY;
  opacityButton: Animated.ValueXY;
  toChangeMarket: boolean;
  market: Market;
  weekday: Workday;
  markets: Market[];
};

type Actions =
  | 'openButton'
  | 'closeButton'
  | 'onChangeMarket'
  | 'onChangeDay'
  | 'onToChangeMarket'
  | 'onToChangeMarkets';

type Action = {
  type: Actions;
  payload?: Market | Market[] | Workday | boolean;
};

type Reducer = (state: State, action: Action) => State;

const reducers: { [key in Actions]: Reducer } = {
  onChangeMarket: (state, { payload }): State => ({ ...state, market: payload as Market }),

  onToChangeMarket: (state, { payload }): State => ({ ...state, toChangeMarket: Boolean(payload) }),

  onToChangeMarkets: (state, action): State => ({ ...state, markets: action.payload as Market[] }),

  onChangeDay: (state, { payload }): State => ({ ...state, weekday: payload as Workday }),

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
  sizeButton: new Animated.ValueXY({ x: 0, y: 40 }),
  opacityButton: new Animated.ValueXY({ x: 1, y: 0 }),
  toChangeMarket: false,
  market: null,
  weekday: null,
  markets: [],
};

export const reducer: Reducer = (state, action) => reducers[action.type](state, action);
