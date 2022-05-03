import {StyleSheet} from 'react-native';
import {color, size} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  topButtons: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: size.rg,
  },
  bottomButtons: {
    backgroundColor: 'rgba(255, 255, 255, .1)',
    borderWidth: size.xxs,
    borderRadius: size.lg,
    borderColor: color.white,
    justifyContent: 'center',
    height: size.lg + size.rg,
    marginTop: size.rg,
  },
  bottomButtonText: {
    marginHorizontal: size.xl,
    padding: size.sm,
    color: color.white,
  },
  bottomText: {
    flexDirection: 'row',
    marginTop: size.rg,
  },
  text: {
    color: color.white,
  },
  linkText: {
    color: color.white,
    textDecorationLine: 'underline',
  },
  lineThrough: {
    textDecorationLine: 'line-through',
  },
  lineStyle: {
    borderColor: color.white,
    borderWidth: 1,
    width: '27%',
    marginHorizontal: size.rg,
    opacity: 0.2,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
