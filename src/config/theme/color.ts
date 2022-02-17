type Main = {
  primary: string;
  lightPrimary: string;
};

type Basic = {
  white: string;
  greyText: string;
  black: string;
  grey: string;
  silver: string;
  transparent: string;
};

type External = {
  facebook: string;
};

type Entity = {
  modalOverlay: string;
  background: string;
  greyIcon: string;
  text: string;
  banner: string;
  border: string;
  drawer: string;
};

type Actions = {
  clear: string;
  error: string;
  fire: string;
  selectedOptionBackground: string;
};

type Others = {
  steel: string;
  ricePaper: string;
  frost: string;
  cloud: string;
  windowTint: string;
  panther: string;
  charcoal: string;
  coal: string;
  bloodOrange: string;
  snow: string;
  ember: string;
  eggplant: string;
};

type Colors = {
  main: Main;
  basic: Basic;
  external: External;
  entity: Entity;
  actions: Actions;
  others: Others;
};

const main: Main = {
  primary: '#7BED8D',
  lightPrimary: 'rgba(123, 237, 141, 0.5)',
};

const basic: Basic = {
  white: '#FFFFFF',
  greyText: '#8D9FAF',
  black: '#000000',
  grey: 'rgba(0,0,0,0.5)',
  silver: '#F7F7F7',
  transparent: 'rgba(0,0,0,0)',
};

const external: External = {
  facebook: '#3b5998',
};

const entity: Entity = {
  modalOverlay: 'rgba(0, 0, 0, 0.5)',
  background: '#4A6572',
  greyIcon: '#B3C5D6',
  text: '#E0D7E5',
  banner: '#5F3E63',
  border: '#483F53',
  drawer: 'rgba(30, 30, 29, 0.95)',
};

const actions: Actions = {
  clear: 'rgba(0,0,0,0)',
  error: 'rgba(200, 0, 0, 0.8)',
  fire: '#EC6263',
  selectedOptionBackground: 'rgba(123, 237, 141, 0.3)',
};

const others: Others = {
  steel: '#CCCCCC',
  ricePaper: 'rgba(255,255,255, 0.75)',
  frost: '#D8D8D8',
  cloud: 'rgba(200,200,200, 0.35)',
  windowTint: 'rgba(0, 0, 0, 0.4)',
  panther: '#161616',
  charcoal: '#595959',
  coal: '#2d2d2d',
  bloodOrange: '#fb5f26',
  snow: 'white',
  ember: 'rgba(164, 0, 48, 0.5)',
  eggplant: '#251a34',
};

export const colors: Colors = {
  main,
  basic,
  external,
  entity,
  actions,
  others,
};
