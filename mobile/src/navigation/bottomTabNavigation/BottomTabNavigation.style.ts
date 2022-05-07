import {StyleSheet} from 'react-native';
import {color, size} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: color.white,
    justifyContent: 'space-around',
    height: size.xl,
  },
  badgeContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    borderRadius: 100,
  },
});
