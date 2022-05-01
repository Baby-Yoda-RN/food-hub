import { StyleSheet } from 'react-native';
import { size, color, font } from '../../theme';

export const styles = StyleSheet.create({
  Container: {
    backgroundColor: color.white,
    borderRadius: size.rg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: size.sm,
    alignItems: 'center',
  },
  TextContainer: {
    paddingHorizontal: size.rg,
    flex: 1,
  },
  IconContainer: {
    flexDirection: 'row',
    paddingHorizontal: size.xs,
    paddingTop: size.sm,
  },

  TopRightIconContainer: {
    alignItems: 'flex-end',
  },

  Title: {
    fontFamily: font.semiBold,
    fontSize: size.rg,
    fontWeight: 'bold',
    color: color.black,

  },

  SubTitle: {
    fontFamily: font.semiBold,
    fontSize: size.md,
    color: color.grayMid,

  },

  ItemQuantity: {
    fontFamily: font.semiBold,
    fontSize: size.rg,
    fontWeight: 'bold',
    color: color.black,
    paddingVertical: size.sm,
    marginHorizontal: size.sm,
  },

  Price: {
    fontFamily: font.semiBold,
    fontSize: size.rg,
    color: color.primary,
    paddingTop: size.xs,
  },

  Image: {
    borderRadius: size.rg,
    width: size.xl,
    height: size.xl,
  },
  imageContainer: {
    shadowColor: color.black,
    elevation: size.md,
  }

});