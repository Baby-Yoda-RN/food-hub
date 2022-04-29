import {StyleSheet} from 'react-native';
import {size, color, font} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 100,
  },

  input: {
    fontFamily: font.regular,
    height: 65,
    width: 65,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: color.grayLow,
    fontSize: 27,
    color: color.red,
  },

  inputColor: {
    fontFamily: font.regular,
    height: 65,
    width: 65,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: size.rg,
    color: color.red,
    borderColor: color.red,
  },
});
