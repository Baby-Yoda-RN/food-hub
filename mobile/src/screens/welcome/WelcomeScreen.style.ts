import {StyleSheet} from 'react-native';
import {color, size} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    margin: size.m,
  },
  header: {
    alignItems: 'flex-end',
  },
  title1: {
    fontSize: size.lg,
    fontWeight: 'bold',
    color: 'black',
  },
  title2: {
    fontSize: size.lg,
    fontWeight: 'bold',
    color: color.primary,
  },
  subTitle: {
    fontSize: size.m,
    color: color.black,
  },
  imageBackground: {
    flex: 1,
  },
  footer: {
    flex: 3,
  },
});
