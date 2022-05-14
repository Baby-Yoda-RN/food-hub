import {StyleSheet} from 'react-native';
import {size, color} from 'theme';

export const styles = StyleSheet.create({
  picker: {
    backgroundColor: color.transparent,
    borderColor: color.grayLow,
    color: color.primary,
    textDecorationColor: color.primary,
    height: size.sm,
    width: size.xxl + size.xl,
  },
});
