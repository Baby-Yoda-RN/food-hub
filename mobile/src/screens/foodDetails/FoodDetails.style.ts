import {StyleSheet} from 'react-native';
import {color, font, size} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: size.rg,
  },
  header: {
    paddingLeft: 0,
  },
  title: {
    fontSize: size.lg,
    fontFamily: font.semiBold,
    color: color.black,
  },
  button: {
    padding: size.rg,
    borderRadius: size.xxl,
  },
  text: {
    textAlign: 'center',
    margin: size.rg,
    fontFamily: font.semiBold,
  },
});
