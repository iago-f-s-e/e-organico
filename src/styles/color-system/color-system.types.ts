export type MainColorSystem = {
  primary: string;
  secondary: string;
  lightPrimary: string;
};

export type BasicColorSystem = {
  white: string;
  greyText: string;
  black: string;
  grey: string;
  silver: string;
  transparent: string;
};

export type ExternalColorSystem = {
  facebook: string;
};

export type EntityColorSystem = {
  modalOverlay: string;
  background: string;
  greyIcon: string;
  text: string;
  banner: string;
  heart: string;
  border: string;
  drawer: string;
  money: string;
};

export type ActionsColorSystem = {
  clear: string;
  error: string;
  info: string;
  success: string;
  danger: string;
  selectedOptionBackground: string;
};

export type OthersColorSystem = {
  steel: string;
  ricePaper: string;
  frost: string;
  cloud: string;
  _20WindowTint: string;
  panther: string;
  charcoal: string;
  coal: string;
  bloodOrange: string;
  snow: string;
  ember: string;
  eggplant: string;
};

export type ColorSystem = {
  main: MainColorSystem;
  basic: BasicColorSystem;
  external: ExternalColorSystem;
  entity: EntityColorSystem;
  actions: ActionsColorSystem;
  others: OthersColorSystem;
};
