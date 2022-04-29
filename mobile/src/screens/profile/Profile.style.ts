import {StyleSheet} from 'react-native';
import { color, size } from '../../theme';

export const styles = StyleSheet.create({
    profileContainer:{
        backgroundColor:color.white,
        justifyContent:'space-evenly',
        alignItems:'center',
        paddingBottom: size.xl,
        flexFlow: 'column',  
    },
    inputContainer:{
       backgroundColor:color.white,
       justifyContent:'space-evenly',
       alignContent:'space-around',
       padding:size.sm,
       flexFlow: 'column',
   },
   header: {
        padding: size.sm,
        backgroundColor:color.white,
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