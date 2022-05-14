import {StyleSheet} from 'react-native';
import {color, font, size} from 'theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    borderRadius: size.md,
    padding: size.rg,
  },
  imageContainer: {
    backgroundColor: color.white,
    borderRadius: size.md,
    padding: size.sm,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  shadow: {
    shadowColor: color.grayMid,
    shadowOffset: {
      width: 1.8,
      height: 1.8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.27,
    elevation: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: size.sm,
  },
  orderId: {
    color: color.primary,
    fontSize: size.rg,
  },
  grayText: {
    color: color.grayMid,
  },
  button: {
    paddingVertical: size.md,
    flex: 1,
  },
  rowDirection: {
    flexDirection: 'row',
  },
  blackText: {
    color: color.black,
  },
  whiteText: {
    color: color.white,
  },
  primaryText: {
    color: color.primary,
  },
  orderInfoContainer: {
    width: '50%',
    justifyContent: 'space-evenly',
  },
  restaurantText: {
    color: color.black,
    fontFamily: font.semiBold,
    fontSize: size.rg,
  },
  orderStatusText: {
    color: color.success,
    fontSize: size.rg,
  },
  subtitle: {
    textAlign: 'right',
    color: color.grayMid,
  },
  estimatedTimeText: {
    color: color.black,
    fontSize: size.lg,
    fontFamily: font.semiBold,
  },
  status2: {
    color: color.black,
    fontSize: size.rg,
  },
  divider: {
    width: '5%',
  },
  centerer: {
    alignItems: 'center',
  },
});
