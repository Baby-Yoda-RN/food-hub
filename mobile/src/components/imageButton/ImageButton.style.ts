import {StyleSheet} from 'react-native';
import {color, size} from 'theme';

export const styles = StyleSheet.create({
  divider: {
    height: size.md,
  },
  option: {
    marginHorizontal: size.md,
    marginVertical: 20,
    paddingTop: size.sm,
    paddingHorizontal: size.sm,
    paddingBottom: size.rg,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: color.white,
  },
  imageContainer: {
    backgroundColor: color.white,
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  textOption: {
    color: color.textGray,
  },
  textOptionSelected: {
    color: color.white,
  },
  selected: {
    backgroundColor: color.primary,
  },
  shadow: {
    shadowColor: color.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: size.sm,
  },
});
