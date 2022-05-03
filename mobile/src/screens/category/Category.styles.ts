import {StyleSheet} from 'react-native';
import {size, color} from '../../theme';

export const styles = StyleSheet.create({
  container: {},
  header: {
    margin: size.md,
    marginHorizontal: size.rg + size.sm,
  },
  imageBackground: {},
  headerText1: {
    fontWeight: 'bold', //TODO use FontFamily better
    fontSize: size.lg,
    color: color.black,
  },
  headerText2: {
    fontWeight: 'bold', //TODO use FontFamily better
    fontSize: size.lg + size.rg,
    color: color.primary,
  },
  subHeader: {
    fontSize: size.rg,
    color: color.grayMid,
  },
  text: {
    color: color.black,
    fontSize: size.sm + size.xs,
  },
  foodList: {
    flex: 1,
    margin: size.md,
    justifyContent: 'center',
    alignContent: 'center',
  },
  sort: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignContent: 'center',
    marginHorizontal: size.rg,
  },
  aligner: {
    paddingVertical: size.lg,
  },
});
