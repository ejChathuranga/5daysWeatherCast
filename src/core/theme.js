import {sun, moon} from '../assets';
export const background = () => {
  return new Date().getHours() >= 18 ? night : day;
};

export const dayStateIcon = () => {
  return new Date().getHours() >= 18 ? moon : sun;
};

const night = [
  '#212121',
  '#616161',
  '#757575',
  // theme.colors.gray[900],
  // theme.colors.gray[700],
  // theme.colors.gray[600],
];
const day = [
  '#e54304',
  '#f47100',
  '#fa8100',
  // theme.colors.orange[900],
  // theme.colors.orange[700],
  // theme.colors.orange[600],
];

const theme = {
  colors: {
    white: '#FFF',
    blue: {
      900: '#0000d6',
      800: '#1c00db',
      700: '#3d00e0',
      600: '#5300e8',
      500: '#6002ee',
      400: '#7e3ff2',
      300: '#9965f4',
      200: '#b794f6',
      100: '#d4bff9',
      50: '#efe5fd',
    },
    green: {
      900: '#008b00',
      800: '#09af00',
      700: '#41c300',
      600: '#61d800',
      500: '#75e900',
      400: '#90ee02',
      300: '#aaf255',
      200: '#c6f68d',
      100: '#defabb',
      50: '#f2fde4',
    },
    purpel: {
      900: '#5c00d2',
      800: '#8b00dd',
      700: '#a200e0',
      600: '#ba00e5',
      500: '#cd00ea',
      400: '#d602ee',
      300: '#df55f2',
      200: '#e98df5',
      100: '#f2bcf8',
      50: '#fae4fc',
    },
    orange: {
      900: '#e54304',
      800: '#ee6002',
      700: '#f47100',
      600: '#fa8100',
      500: '#ff8d00',
      400: '#ff9e22',
      300: '#ffaf49',
      200: '#ffc77d',
      100: '#ffddb0',
      50: '#fff2df',
    },
    gray: {
      900: '#212121',
      800: '#424242',
      700: '#616161',
      600: '#757575',
      500: '#9E9E9E',
      400: '#BDBDBD',
      300: '#E0E0E0',
      200: '#EEEEEE',
      100: '#F5F5F5',
      50: '#FAFAFA',
    },
    xxx: {
      900: '',
      800: '',
      700: '',
      600: '',
      500: '',
      400: '',
      300: '',
      200: '',
      100: '',
      50: '',
    },
  },
};

export {theme};
