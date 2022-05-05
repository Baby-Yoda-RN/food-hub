import {StyleSheet} from 'react-native';
import {color, size} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: color.white,
    justifyContent: 'space-around',
    shadowColor: color.black,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 20,
    height: size.xl,
  },
  tabContainer: {},
  badgeContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
