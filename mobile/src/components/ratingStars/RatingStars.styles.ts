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


});