import {StyleSheet} from 'react-native';
import {color, size} from 'theme';

export const styles = StyleSheet.create({
  container: {
    padding: size.sm,
    borderRadius: size.xxl,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  buttonDisabled: {
    backgroundColor: color.grayDisabled,
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
