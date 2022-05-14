import {StyleSheet} from 'react-native';
import {size, color, font} from 'theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    borderRadius: size.rg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: size.sm,
    alignItems: 'center',
  },
  textContainer: {
    paddingHorizontal: size.rg,
    flex: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    paddingHorizontal: size.xs,
    paddingTop: size.sm,
  },
  topRightIconContainer: {
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: font.semiBold,
    fontSize: size.rg,
    fontWeight: 'bold',
    color: color.black,
  },
  subTitle: {
    fontFamily: font.semiBold,
    fontSize: size.md,
    color: color.grayMid,
  },
  itemQuantity: {
    fontFamily: font.semiBold,
    fontSize: size.rg,
    fontWeight: 'bold',
    color: color.black,
    paddingVertical: size.sm,
    marginHorizontal: size.sm,
  },
  price: {
    fontFamily: font.semiBold,
    fontSize: size.rg,
    color: color.primary,
    paddingTop: size.xs,
  },
  image: {
    borderRadius: size.rg,
    width: size.xl,
    height: size.xl,
  },
  imageContainer: {
    shadowColor: color.black,
    elevation: size.md,
  },
});
