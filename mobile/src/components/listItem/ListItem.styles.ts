import {StyleSheet} from 'react-native';
import {size, color} from '../../theme';

export const styles = StyleSheet.create({
  Container: {
    backgroundColor: color.white,
    borderRadius: 8, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: size.rg,
    paddingVertical: size.sm,
    alignItems: 'center',
  },
  TextContainer: {
    flex: 1,
  },
  IconContainer: {
    flexDirection:'row',
    paddingHorizontal: size.xs,
    paddingTop: size.lg,
  },

  Title: {
    fontFamily: 'Sofia Pro',
    fontSize: size.rg,
    color: color.black,
    paddingHorizontal: size.rg,
  },

  SubTitle: {
    fontFamily: 'Sofia Pro',
    color: color.grayMid,
    paddingHorizontal: size.rg,
  },

  Price:{
    fontFamily: 'Sofia Pro',
    fontSize: size.rg,
    color: color.primary,
    paddingHorizontal: size.rg,
    paddingTop:size.sm,
  },
  
  Image:{
    width:size.xl,
    height: size.xl,
  }
});