import {StyleSheet} from 'react-native';
import {color, size} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    margin: size.md,
  },
  title1: {
    fontSize: size.xl - size.rg,
    fontWeight: 'bold',
    color: 'black',
  },
  title2: {
    fontSize: size.xl - size.rg,
    fontWeight: 'bold',
    color: color.primary,
  },
  subTitle: {
    fontSize: size.rg,
    color: color.black,
  },
  imageBackground: {
    flex: 1,
  },
  header: {
    flex: 1,
    alignItems: 'flex-end',
  },
  topSection: {
    flex: 6,
  },
  footer: {
    flex: 3,
  },
});
