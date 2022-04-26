import {StyleSheet} from 'react-native';
import {color, size} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    borderRadius:size.sm,
    padding: 18,
    top: 20, //dev
    marginHorizontal: 20, //dev
    height:240 //dev
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
    elevation: 10,
  },
});
