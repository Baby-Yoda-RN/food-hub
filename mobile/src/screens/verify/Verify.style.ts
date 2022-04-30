import {StyleSheet} from 'react-native';
import {color, font, size} from '../../theme';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: color.white,
  },

  container: {
    flex: 2,
    margin: size.rg,
    flexDirection: 'column',
  },
  header: {
    padding: size.rg,
  },
  title: {
    padding: size.rg,
    fontSize: size.lg,
    fontFamily: font.semiBold,
    color: color.black,
  },
  subtext: {
    padding: size.rg,
    borderRadius: size.rg,
  },

  container2: {
    flex: 2,
    margin: size.rg,
    flexDirection: 'row',
  },

  subtext2: {
    padding: size.rg,
    borderRadius: size.rg,
  },
  subtextbutton: {
    padding: size.rg,
    borderRadius: size.rg,
    color: color.red,
  },
  buttonContainer: {
    marginTop: size.lg,
    padding: size.md,
  },
});
