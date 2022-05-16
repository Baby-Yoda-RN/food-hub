import {StyleSheet} from 'react-native';
import {size, color, font} from '../../../src/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    padding: 20,
  },
  text: {
    margin: size.rg,
    fontSize: size.lg,
    fontFamily: font.semiBold,
    color: color.white,
  },
  viewStyle1: {
    backgroundColor: 'red',
    width: size.xxl + size.xxl,
    height: size.xxl + size.xxl,
    marginTop: size.xl,
  },
  viewStyle2: {
    backgroundColor: 'blue',
    width: size.xxl + size.xxl,
    height: size.xxl + size.xxl,
    marginTop: size.xl,
  },
  viewStyle3: {
    backgroundColor: 'green',
    width: size.xxl + size.xxl,
    height: size.xxl + size.xxl,
    marginTop: size.xl,
  },
});
