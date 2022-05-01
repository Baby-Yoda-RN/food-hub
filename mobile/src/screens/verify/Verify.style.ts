import {StyleSheet} from 'react-native';
import {color, font, size} from '../../theme';

export const styles = StyleSheet.create({
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
    borderRadius: size.rg,
  },

  PinContainer: {
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
  },
  subtext2button: {
    borderRadius: size.rg,
    color: color.red,
  },

  button: {
    marginTop: size.xxl,
    padding: size.rg,
    shadowColor: color.black,
    elevation: size.lg,
  },
});
