import {StyleSheet} from 'react-native';
import {color, font, size} from '../../theme';

export const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'space-between',
  },
  header: {
    padding: size.lg,
  },

  leftIconStyle: {
    backgroundColor: color.white,
    borderRadius: size.sm,
  },

  rightIconStyle: {
    backgroundColor: color.red,
    borderRadius: size.xxl,
  },

  BackgroundImageStyle: {
    borderRadius: size.rg,
    margin: size.rg,
  },

  title: {
    fontSize: size.lg,
    fontFamily: font.semiBold,
    color: color.black,
    marginTop: size.rg,
  },

  subtitle: {
    fontSize: size.rg,
    fontFamily: font.semiBold,
    color: color.black,
    marginTop: size.sm,
  },

  containerRatingReview: {
    flexDirection: 'row',
    marginTop: size.xs,
  },

  ratings: {
    color: color.black,
    fontFamily: font.semiBold,
    fontSize: size.rg,
  },
  reviewCount: {
    color: color.grayMid,
    fontFamily: font.medium,
    fontSize: size.rg,
    marginHorizontal: size.sm,
  },
  seeReview: {
    color: color.primary,
    fontFamily: font.medium,
    textDecorationLine: 'underline',
  },

  description: {
    fontSize: size.rg,
    fontFamily: font.medium,
    color: color.grayMid,
    marginTop: size.sm,
  },

  button: {
    padding: size.rg,
    borderRadius: size.xxl,
    marginHorizontal: size.xl,
    marginVertical: size.lg,
  },
  text: {
    textAlign: 'center',
    margin: size.rg,
    fontFamily: font.semiBold,
  },

  containerPriceAndPlusMinus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: size.sm,
  },
  containerPlusMinus: {
    flexDirection: 'row',
  },
  textPlusMinus: {
    textAlignVertical: 'center',
    color: color.black,
    fontFamily: font.semiBold,
    marginRight: size.sm,
    marginLeft: size.sm,
  },

  textPrice: {
    textAlignVertical: 'center',
    color: color.primary,
    fontFamily: font.semiBold,
    fontSize: size.rg,
  },

  containerAddOn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: size.sm,
  },

  containerAddOnPriceSelection: {
    flexDirection: 'row',
  },
  titleAddOn: {
    fontSize: size.rg,
    fontFamily: font.medium,
    textAlignVertical: 'center',
    marginHorizontal: size.sm,
    color: color.black,
  },
});
