import {StyleSheet} from 'react-native';
import {color, font, size} from 'theme';

export const styles = StyleSheet.create({
  profileImageContainer: {
    flexDirection: 'row',
    flexShrink: 1,
    flexGrow: 0,
  },
  reviewHeaderContainer: {
    flexDirection: 'row',
  },
  colonIcon: {
    alignItems: 'center',
    paddingTop: size.rg,
    flexShrink: 1,
    flexGrow: 0,
    flexBasis: 50,
  },
  userDetailsContainer: {
    flexShrink: 0,
    flexGrow: 1,
    justifyContent: 'center',
  },
  nameText: {
    color: color.black,
    fontSize: size.rg,
    fontFamily: font.semiBold,
    alignItems: 'center',
  },
  dateText: {
    fontSize: size.md,
    fontFamily: font.regular,
  },
  reviewText: {
    marginTop: size.rg,
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
