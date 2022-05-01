import {StyleSheet} from 'react-native';
import {size, color, font} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
  },

  input: {
    fontFamily: font.semiBold,
    paddingTop: 0,
    paddingBottom: 0,
    height: size.xl,
    width: size.xl,
    marginHorizontal: size.sm,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: color.grayLow,
    fontSize: size.lg,
    color: color.red,

    shadowColor: color.black,
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  inputColor: {
    fontFamily: font.semiBold,
    paddingTop: 0,
    paddingBottom: 0,
    height: size.xl,
    width: size.xl,
    marginHorizontal: size.sm,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: size.lg,
    color: color.red,
    borderColor: color.red,

    shadowColor: color.black,
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
