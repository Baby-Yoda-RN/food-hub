import {StyleSheet} from 'react-native';
import {size, color, font} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  input: {
    fontFamily: font.semiBold,
    height: size.xl,
    width: size.xl,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: color.grayLow,
    fontSize: size.md,
    color: color.red,
  },

  inputColor: {
    fontFamily: font.semiBold,
    height: size.xl,
    width: size.xl,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: size.md,
    color: color.red,
    borderColor: color.red,
  },
});
