import {
  ActionsColorSystem,
  BasicColorSystem,
  ColorSystem,
  EntityColorSystem,
  ExternalColorSystem,
  MainColorSystem,
  OthersColorSystem,
} from './color-system.types';

const main: MainColorSystem = {
  primary: '#1BE080',
  secondary: '#00D07D',
  lightPrimary: 'rgba(123, 237, 141, 0.5)',
};

const basic: BasicColorSystem = {
  white: '#FFFFFF',
  greyText: '#8D9FAF',
  black: '#121212',
  grey: 'rgba(0,0,0,0.5)',
  silver: '#F7F7F7',
  transparent: 'rgba(0,0,0,0)',
};

const external: ExternalColorSystem = {
  facebook: '#3b5998',
};

const entity: EntityColorSystem = {
  modalOverlay: 'rgba(0, 0, 0, 0.5)',
  background: '#4A6572',
  greyIcon: '#B3C5D6',
  text: '#E0D7E5',
  banner: '#5F3E63',
  border: '#483F53',
  money: '#00D07D',
  heart: '#F00040',
  drawer: 'rgba(30, 30, 29, 0.95)',
};

const actions: ActionsColorSystem = {
  clear: 'rgba(0,0,0,0)',
  error: '#e74c3c',
  info: '#f1c40f',
  success: '#1abc9c',
  danger: '#e74c3c',
  selectedOptionBackground: 'rgba(123, 237, 141, 0.3)',
};

const others: OthersColorSystem = {
  steel: '#CCCCCC',
  ricePaper: 'rgba(255,255,255, 0.75)',
  frost: '#D8D8D8',
  cloud: 'rgba(200,200,200, 0.35)',
  _20WindowTint: 'rgba(0, 0, 0, 0.2)',
  panther: '#161616',
  charcoal: '#595959',
  coal: '#2d2d2d',
  bloodOrange: '#fb5f26',
  snow: 'white',
  ember: 'rgba(164, 0, 48, 0.5)',
  eggplant: '#251a34',
};

export const colorSystem: ColorSystem = {
  main,
  basic,
  external,
  entity,
  actions,
  others,
};
