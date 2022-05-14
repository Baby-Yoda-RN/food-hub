import {StyleSheet} from 'react-native';
import {color, size} from 'theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    borderRadius: size.xl,
    borderWidth: 1,
    borderColor: color.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 2,
  },
  button: {
    flex: 1,
    borderRadius: size.xl,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: size.rg,
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
