import {StyleSheet} from 'react-native';
import {color, size} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    borderRadius: size.lg,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 2,
    backgroundColor: color.white,
    paddingVertical: size.xs,
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
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
});
