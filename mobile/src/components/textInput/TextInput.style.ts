import {StyleSheet} from 'react-native';
import {color, size} from 'theme';

export const style = StyleSheet.create({
  containerFocus: {
    borderWidth: size.xs,
    borderColor: color.primary,
    borderRadius: size.sm,
    backgroundColor: color.textRegularBG,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: size.xxs,
    paddingHorizontal: size.md,
  },
  containerBlur: {
    borderWidth: size.xs,
    borderColor: color.grayLow,
    borderRadius: size.sm,
    backgroundColor: color.textRegularBG,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: size.xxs,
    paddingHorizontal: size.md,
  },
  textInput: {fontSize: size.rg},
});
