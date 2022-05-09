import {StyleSheet} from 'react-native';
import {color, size} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: color.white,
    justifyContent: 'space-around',
    paddingTop: size.rg,
    paddingBottom: size.sm,
    shadowColor: color.black,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 20,
  },
  tabContainer: {},
  badgeContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
