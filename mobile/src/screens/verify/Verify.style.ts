import {StyleSheet} from 'react-native';
import {color, font, size} from '../../theme';

export const styles = StyleSheet.create({
  containerBackground: {
    backgroundColor: color.white,
  },
  container: {
    flex: 1,
    margin: size.rg,
    flexDirection: 'column',
  },
  header: {
    paddingTop: size.lg,
  },

  title: {
    marginTop: size.xl,
    fontSize: size.lg,
    fontFamily: font.semiBold,
    color: color.black,
  },
  subtext: {
    fontFamily: font.medium,
    color: color.grayMid,
    borderRadius: size.rg,
  },

  pinContainer: {
    flex: 0,
    marginTop: size.lg,
  },

  container2: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: size.lg,
  },
  subtext2: {
    marginHorizontal: size.sm,
    borderRadius: size.rg,
    color: color.grayMid,
    borderRadius: size.rg,
    fontFamily: font.medium,
  },
  subtext2Link: {
    borderRadius: size.rg,
    color: color.primary,
    fontFamily: font.medium,
  },

  button: {
    fontFamily: font.medium,
    marginTop: size.xxl,
    padding: size.rg,
    shadowColor: color.black,
    elevation: size.lg,
    borderRadius: size.lg,
  },
});
