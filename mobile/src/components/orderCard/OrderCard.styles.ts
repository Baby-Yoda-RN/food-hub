import {StyleSheet} from 'react-native';
import {color, size} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    borderRadius: size.sm,
    padding: size.m,
  },
  imageContainer: {
    backgroundColor: color.white,
    borderRadius: size.sm,
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
    fontSize: size.m,
  },
  grayText: {
    color: color.grayMid,
  },
  button: {
    paddingVertical: size.m,
    minWidth: '45%',
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
    fontWeight: '600',
    fontSize: size.m,
  },
  orderStatusText: {
    color: color.success,
    fontSize: size.m,
  },
  subtitle:{
    textAlign: 'right',
    color: color.grayMid
  },
  estimatedTimeText:{
    color: color.black,
    fontSize: size.rg,
    fontWeight: '600',
  },
  orderStatus2:{
    color: color.black,
    fontSize: size.m
  }
});
