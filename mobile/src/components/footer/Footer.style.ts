import {StyleSheet} from 'react-native';
import {color, size} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  topButtons: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  bottomButtons: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: size.xs,
    borderRadius: size.lg,
    borderColor: color.white,
    justifyContent: 'center',
  },
  bottomButtonText: {
    marginHorizontal: size.lg,
    padding: size.sm,
    color: color.white,
  },
  bottomText: {
    flexDirection: 'row',
  },
  text: {
    color: color.white,
  },
  linkText: {
    color: color.white,
    textDecorationLine: 'underline',
  },
});
