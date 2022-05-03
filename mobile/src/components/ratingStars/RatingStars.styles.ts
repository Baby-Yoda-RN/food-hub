import {StyleSheet} from 'react-native';
import {color, font, size} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    padding:size.sm,
    borderRadius: size.rg,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  titleContainer:{
      alignItems: 'center',
      alignContent: 'center',
  },
  title: {
    paddingVertical: size.xs,
    color: color.primary,
    fontSize: size.rg,
    lineHeight: size.rg,
    textAlign: 'center',
    fontFamily: font.regular,
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