import { Animated } from 'react-native';

export type Props = {
  label?: string;
  animated: {
    opacity: Animated.AnimatedValue;
    height: Animated.AnimatedValue;
  };
  loading: boolean;
  handle: () => void;
};
