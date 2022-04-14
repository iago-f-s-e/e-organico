import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Dimensions } from 'react-native';

export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const HEADER_HEIGHT = 50;
export const STATUS_BAR_HEIGHT = getStatusBarHeight();
export const HEADER_WITH_STATUS_BAR_HEIGHT = HEADER_HEIGHT + STATUS_BAR_HEIGHT;
