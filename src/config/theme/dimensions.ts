import { Dimensions } from 'react-native';

const screen = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
};

export const fonts = {
  extraLarge: '25px',
  large: '20px',
  medium: '15px',
};

export const dimensions = { screen, fonts };
