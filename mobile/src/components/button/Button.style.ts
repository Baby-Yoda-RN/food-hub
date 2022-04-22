import {StyleSheet} from 'react-native';
import {color, size} from '../theme';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  buttonDisabled: {
    backgroundColor: color.lightGray,
  },
  buttonEnabled: {
    backgroundColor: color.primary,
  },
  title: {
    color: color.white,
    fontSize: size.rg,
    lineHeight: size.rg,
    textAlign: 'center',
  },
});