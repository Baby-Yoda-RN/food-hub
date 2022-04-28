import { StyleSheet } from "react-native";
import { color, font, size } from "../../theme";

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:color.white,
  },
  scrollView:{
    marginTop:size.rg
  },
  horizontalContainer:{
    flexDirection:'row',
  },
  foodCardContainer:{
    flex:1,
    flexWrap:'wrap',
  },
  title:{
    fontFamily:font.bold,
    fontSize:size.lg,
    color:'#323643',
    marginRight:size.xl,
    lineHeight:size.lg+10,
  }
})