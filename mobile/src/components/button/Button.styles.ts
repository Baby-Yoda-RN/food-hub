import {StyleSheet} from 'react-native';
import {color, size} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    borderRadius: size.xl,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: size.sm,
  },
  buttonDisabled: {
    backgroundColor: color.grayDisabled,
  },
  buttonEnabled: {
    backgroundColor: color.primary,
  },
  title: {
    color: color.white,
    fontSize: size.m,
    lineHeight: size.m,
    textAlign: 'center',
  },
});