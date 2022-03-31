import { Dimensions } from 'react-native';

const screen = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
};

export const dimensions = { screen };
