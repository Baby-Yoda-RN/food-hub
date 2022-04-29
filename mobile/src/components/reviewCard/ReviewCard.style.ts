import {StyleSheet} from 'react-native';
import {color, font, size} from '../../theme';

export const styles = StyleSheet.create({
  profileImageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  userInformationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: size.rg,
  },
  userDetailsContainer: {
    flexDirection: 'column',
  },
  nameText: {
    color: color.black,
    fontSize: size.rg,
    fontFamily: font.semiBold,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  dateText: {
    fontSize: size.md,
    fontFamily: font.regular,
  },
  reviewText: {
    fontSize: size.rg,
    fontFamily: font.regular,
  },
  image: {
    width: size.xl,
    height: size.xl,
    resizeMode: 'contain',
    borderRadius: 100,
  },
  badgeContainer: {
    justifyContent: 'flex-end',
    right: size.rg,
  },
  badge: {
    borderRadius: 100,
  },
});
