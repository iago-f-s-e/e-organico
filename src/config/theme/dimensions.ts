import * as size from '@src/constants/styles';

// TODO: corrigir os headers do sign-up

const header = {
  height: size.HEADER_WITH_STATUS_BAR_HEIGHT,
  width: size.SCREEN_WIDTH,
};

const components = {
  header,
};

const screen = {
  height: size.SCREEN_HEIGHT,
  width: size.SCREEN_WIDTH,
};

const statusBar = {
  height: size.STATUS_BAR_HEIGHT,
  width: size.SCREEN_WIDTH,
};

export const dimensions = { screen, components, statusBar };
