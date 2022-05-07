import {StyleSheet} from 'react-native';
import {color, size} from '../../theme';

export const style = StyleSheet.create({
  containerFocus: {
    borderWidth: size.xs,
    borderColor: color.primary,
    borderRadius: size.sm,
    backgroundColor: color.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: size.md,
    paddingVertical: size.xs,
  },
  containerBlur: {
    borderWidth: size.xs,
    borderColor: color.grayLow,
    borderRadius: size.sm,
    backgroundColor: color.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: size.md,
    paddingVertical: size.xs,
  },
  textInput: {
    fontSize: size.rg + size.xs,
  },
});
