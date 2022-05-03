import {StyleSheet} from 'react-native';
import {size, color, font} from '../../theme';

export const styles = StyleSheet.create({
  header: {
    height: size.xxl + size.xl,
  },
  imageBackground: {
    height: size.xxl * 2,
  },
  headerText1: {
    fontWeight: 'bold',
    fontSize: size.lg + size.sm,
    color: color.black,
  },
  headerText2: {
    fontWeight: 'bold',
    fontSize: size.lg + size.rg,
    color: color.primary,
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
