import {TAppTheme} from './AppTheme.type';
import {color} from '../color/color';

export const AppTheme = {
  dark: {
    dark: false,
    colors: {
      primary: color.primary,
      background: color.black,
      card: color.primary,
      text: color.black,
      border: color.primary,
      notification: color.primary,
    },
  },
  white: {
    dark: false,
    colors: {
      primary: color.blue,
      background: color.white,
      card: color.blue,
      text: color.black,
      border: color.blue,
      notification: color.blue,
    },
  },
  blue: {
    dark: false,
    colors: {
      primary: color.blue,
      background: color.white,
      card: color.blue,
      text: color.black,
      border: color.blue,
      notification: color.blue,
    },
  },
};
