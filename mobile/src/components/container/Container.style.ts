import { StyleSheet } from "react-native"
import {color, size} from '../../theme'

export const styles = StyleSheet.create({
  safeAreaContainer:{
    flex:1,
    backgroundColor:color.white,
  },
  container:{
    flex:1,
    marginHorizontal:size.rg,
  },
  loading:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
})