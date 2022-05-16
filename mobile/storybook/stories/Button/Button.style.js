import {StyleSheet} from 'react-native';
import {size, font, color} from '../../../src/theme';

export const styles = StyleSheet.create({
  container: {},
  defaultContainer: {
    marginVertical: size.rg,
  },
  default: {
    width: '100%',
    marginVertical: size.rg,
    padding: size.rg,
  },
  light: {
    padding: size.rg,
    backgroundColor: color.transparent,
    borderWidth: 1,
    borderColor: color.grayDisabled,
  },
  lightText: {
    color: color.grayMid,
  },
  logoContainer: {
    flexDirection: 'row',
  },
  logo: {
    backgroundColor: 'transparent',
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: color.grayDisabled,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: size.rg,
  },
  logoText: {
    fontFamily: font.semiBold,
    color: color.black,
    marginHorizontal: size.sm,
  },
  logoutContainer: {
    marginVertical: size.rg,
  },
  logoutLogo: {
    backgroundColor: color.primary,
    alignSelf: 'flex-start',
    alignItems: 'center',
    margin: size.rg,
  },
  logoutContainer: {
      backgroundColor: color.white,
      borderRadius: size.xl,
  },
  logoutText: {
    color: color.white,
    marginHorizontal: size.sm,
  }
});
