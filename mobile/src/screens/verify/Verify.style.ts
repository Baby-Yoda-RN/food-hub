import {StyleSheet} from 'react-native';
import {color, font, size} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    flex: 1,
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
});
