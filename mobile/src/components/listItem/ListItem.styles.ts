import {StyleSheet} from 'react-native';
import {size, color} from '../../theme';

export const styles = StyleSheet.create({
  Container: {
    backgroundColor: color.white,
    borderRadius: size.rg, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: size.sm,
    alignItems: 'center',
  },
  TextContainer: {
    paddingHorizontal: 27,
    flex: 1,
  },
  IconContainer: {
    flexDirection:'row',
    paddingHorizontal: size.xs,
    paddingTop: size.rg,
  },

  TopRightIconContainer:{
    paddingLeft: 48,
  },

  Title: {
    fontFamily: 'Sofia Pro',
    fontSize: 18,
    fontWeight: 'bold',
    color: color.black,

  },

  SubTitle: {
    fontFamily: 'Sofia Pro',
    fontSize: 14,
    color: color.grayMid,

  },

  ItemQuantity: {
    fontFamily: 'Sofia Pro',
    fontSize: size.rg,
    fontWeight: 'bold',
    color: color.black,
    paddingVertical: 6,
    marginHorizontal: size.sm,
  },

  Price:{
    fontFamily: 'Sofia Pro',
    fontSize: size.rg,
    color: color.primary,
    paddingTop:size.xs,
  },
  
  Image:{
    borderRadius: size.rg, 
    width:size.xl,
    height: size.xl,
  }

});