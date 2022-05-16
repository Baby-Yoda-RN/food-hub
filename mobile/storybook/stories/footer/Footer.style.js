import {StyleSheet} from 'react-native';
import {size, color} from '../../../src/theme';

export const styles = StyleSheet.create({
  section: {
    margin: size.rg,
  },
  login: {
    borderWidth: 1,
    borderColor: color.grayDisabled,
  },
  welcome: {
    backgroundColor: color.primary,
  },
  divider: {
    borderColor: color.grayMid,
  },
  dividerText: {
    color: color.greyDisabled,
  },
});
