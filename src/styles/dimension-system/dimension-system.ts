import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const HEADER_HEIGHT = 50;
const STATUS_BAR_HEIGHT = getStatusBarHeight();
const HEADER_WITH_STATUS_BAR_HEIGHT = HEADER_HEIGHT + STATUS_BAR_HEIGHT;

const header = {
  height: HEADER_WITH_STATUS_BAR_HEIGHT,
  width: SCREEN_WIDTH,
};

const components = {
  header,
};

const screen = {
  height: SCREEN_HEIGHT,
  width: SCREEN_WIDTH,
};

const statusBar = {
  height: STATUS_BAR_HEIGHT,
  width: SCREEN_WIDTH,
};

export const dimensionSystem = { screen, components, statusBar };
