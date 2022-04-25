import {StyleSheet} from 'react-native';
import {size, color} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  input: {
    fontFamily: 'Sofia Pro',
    height: 65,
    width: 65,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: color.grayLow,
    fontSize: 27,
  },

  inputColor: {
    fontFamily: 'Sofia Pro',
    height: 65,
    width: 65,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: size.rg,

    borderColor: color.red,
  },
});
