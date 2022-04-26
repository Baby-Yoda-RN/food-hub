import {StyleSheet} from 'react-native';
import {color, size} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    borderRadius: size.lg,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 2,
    backgroundColor: color.white,
    paddingVertical: size.sm,
    width: '25%',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    margin: 20,
  },
});
