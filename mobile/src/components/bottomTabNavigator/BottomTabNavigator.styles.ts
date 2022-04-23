import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    backgroundColor:'white',
    justifyContent:'space-between',
    padding:16,
  },
  iconContainer:{
    padding:16,
  },
  icon:{
    padding:20,
    backgroundColor:'#FE724C',
    borderRadius:50,
  },
  notification:{
    position:'absolute',
    top:0,
    right:0,
    padding:12,
    backgroundColor:'#FFC529',
    borderRadius:8,
  }
})