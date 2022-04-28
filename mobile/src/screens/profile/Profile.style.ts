import {StyleSheet} from 'react-native';
import { color, size } from '../../theme';

export const styles = StyleSheet.create({
    container:{
       backgroundColor:color.white,
       justifyContent:'space-evenly',
       flexFlow: 'column',
       paddingVertical: size.xl,
       borderRadius: size.sm,   
   },
   name:{
    color: color.black,
    marginVertical: size.sm,
     fontSize: size.rg,
    },
   text:{
       color: color.grayMid,
       marginVertical: size.sm,
      fontSize: size.rg,
   },
   button: {
       marginVertical:size.rg,
       paddingVertical:size.rg,
   },
  

})