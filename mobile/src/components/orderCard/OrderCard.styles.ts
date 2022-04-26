import {StyleSheet} from 'react-native';
import {color, size} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    borderRadius:size.sm,
    padding: 18,
  },
  imageContainer:{
    backgroundColor:color.white,
    borderRadius:size.sm,
    padding:size.sm,
  },
  image:{
    width:50,
    height:50,
    resizeMode:'contain'
  },
  shadow: {
    shadowColor: color.grayMid,
    shadowOffset: {
      width: 1.8,
      height: 1.8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.27,
    elevation: 15,
  },
  rowContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:size.sm,
  },
  orderId:{
    color: color.primary,
    fontSize: 16
  },
  grayText:{
    color:color.grayMid
  },
  button:{
    paddingVertical:size.m,
    minWidth:'45%',
  },
  rowDirection:{
    flexDirection:'row'
  },
  blackText:{
    color:color.black
  },
  whiteText:{
    color:color.white
  },
  primaryText:{
    color:color.primary
  }
});
