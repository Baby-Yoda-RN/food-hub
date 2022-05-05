import {StyleSheet} from 'react-native';
import {color, font, size} from '../../theme';

export const styles = StyleSheet.create({
  header: {
    backgroundColor:color.white,
    paddingHorizontal: size.rg,
    paddingVertical:size.rg,
    shadowColor: color.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  pastOrders: {
    paddingTop: size.lg,
    paddingBottom: size.md,
    color: color.black,
    fontSize: 18,
    fontFamily: font.medium,
  },
  divider: {
    marginVertical: size.rg,
  },
  toggleButtonContainer: {
    paddingVertical: size.lg,
  },
});
