import {StyleSheet} from 'react-native';
import {color, size} from '../../theme';

export const style = StyleSheet.create({
  containerFocus: {
    borderWidth: size.xs,
    borderColor: color.primary,
    borderRadius: size.sm,
    height: size.lg,
    backgroundColor: color.textRegularBG,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: size.m,
  },
  containerBlur: {
    borderWidth: size.xs,
    borderColor: color.grayLow,
    borderRadius: size.sm,
    height: size.lg,
    backgroundColor: color.textRegularBG,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: size.m,
  },
  textInput: {fontSize: size.m},
});
