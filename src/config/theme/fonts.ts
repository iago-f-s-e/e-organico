import { PixelRatio } from 'react-native';

const scaleFont = (size: number): number => size / PixelRatio.getFontScale();

const size = {
  extraLarge: `${scaleFont(26)}px`,
  betweenLargeAndExtraLarge: `${scaleFont(23)}px`,
  large: `${scaleFont(20)}px`,
  betweenMediumAndLarge: `${scaleFont(17)}px`,
  medium: `${scaleFont(14)}px`,
  small: `${scaleFont(12)}px`,
};

const family = {
  light: 'WorkSansLight',
  medium: 'WorkSansMedium',
  semiBold: 'WorkSansSemi',
  bold: 'WorkSansBold',
};

export const font = { family, size };
