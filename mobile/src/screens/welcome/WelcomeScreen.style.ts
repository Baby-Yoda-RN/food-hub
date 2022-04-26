import {StyleSheet} from 'react-native';
import {color, size} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    margin: size.m,
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
  header: {
    flex: 1,
    alignItems: 'flex-end',
  },
  topSection: {
    flex: 4,
  },
  footer: {
    flex: 3,
  },
});
