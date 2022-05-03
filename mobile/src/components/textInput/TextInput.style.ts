import {StyleSheet} from 'react-native';
import {color, size} from '../../theme';

export const style = StyleSheet.create({
  containerFocus: {
    borderWidth: size.xxs,
    borderColor: color.primary,
    borderRadius: size.sm,
    height: size.xl,
    backgroundColor: color.textRegularBG,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: size.rg,
  },
  containerBlur: {
    borderWidth: size.xxs,
    borderColor: color.grayLow,
    borderRadius: size.sm,
    height: size.xl,
    backgroundColor: color.textRegularBG,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: size.rg,
  },
  textInput: {fontSize: size.rg},
});
