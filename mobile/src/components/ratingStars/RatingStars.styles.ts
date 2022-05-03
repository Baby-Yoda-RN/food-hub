import {StyleSheet} from 'react-native';
import {color, size} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    padding:size.sm,
    borderRadius: size.rg,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  title: {
    color: color.white,
    fontSize: size.rg,
    lineHeight: size.rg,
    textAlign: 'center',
  },
  icon: {
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

});