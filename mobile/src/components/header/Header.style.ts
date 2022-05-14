import {StyleSheet} from 'react-native';
import {color, size} from 'theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  locationContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    color: color.black,
    flex: 1,
    padding: 10,
  },
  deliverTo: {
    fontSize: size.md,
    textAlign: 'center',
    color: color.grayMid,
    padding: size.sm,
  },
  deliveryLocation: {
    fontSize: size.rg,
    textAlign: 'center',
    color: color.primary,
  },
  leftIcon: {
    alignItems: 'center',
    padding: size.sm,
    borderRadius: size.md,
    borderColor: '#ddd',
    borderBottomWidth: size.xxs,
    borderRightWidth: size.xxs,
    shadowColor: color.black,
    shadowOffset: {width: size.xxs, height: size.xxs},
    shadowOpacity: 0.9,
    shadowRadius: size.sm,
  },
  rightIcon: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 12,
    borderColor: '#ddd',
    borderBottomWidth: 2,
    borderRightWidth: 2,
    shadowColor: color.black,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
  image: {
    borderRadius: 12,
    alignItems: 'center',
    height: 38,
    width: 38,
  },
});
