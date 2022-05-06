import {StyleSheet} from 'react-native';
import {size, color, font} from '../../theme';

export const styles = StyleSheet.create({
  header: {
    marginTop: size.md,
    marginLeft: size.rg,
  },
  imageBackground: {
    height: size.xxl * 2,
  },
  topSection: {
    height: size.xxl + size.xl,
  },
  title1: {
    fontFamily: font.bold,
    fontSize: size.lg + size.sm,
    color: color.black,
  },
  title2: {
    fontFamily: font.bold,
    fontSize: size.lg + size.rg,
    color: color.primary,
    marginTop: -size.lg,
  },
  subHeader: {
    fontSize: size.rg,
    color: color.grayMid,
  },
  text: {
    fontFamily: font.regular,
    color: color.black,
    fontSize: size.rg,
  },
  foodList: {},
  sort: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  aligner: {
    paddingVertical: size.rg,
  },
});
