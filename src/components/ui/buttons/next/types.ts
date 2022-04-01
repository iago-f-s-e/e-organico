import { Animated } from 'react-native';

export type Props = {
  animated: {
    opacity: Animated.AnimatedValue;
    height: Animated.AnimatedValue;
  };
  loading: boolean;
  handle: () => void;
};
