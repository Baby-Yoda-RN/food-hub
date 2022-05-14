import {StyleSheet} from 'react-native';
import {color, size} from 'theme';

export const styles = StyleSheet.create({
  container: {
    borderRadius: size.lg,
    backgroundColor: color.white,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    padding: size.sm,
    shadowColor: color.grayMid,
    elevation: size.xxs,
  },
  priceText: {
    fontSize: size.rg,
    color: color.black,
  },
  dollarSign: {
    color: color.primary,
    fontSize: size.rg,
  },
  ratingText: {
    color: color.black,
    fontWeight: 'bold',
    fontSize: size.md,
  },
  votesText: {
    fontSize: size.sm,
    color: color.grayMid,
  },
  iconContainer: {
    paddingVertical: 0,
    paddingHorizontal: size.xxs,
  },
});
