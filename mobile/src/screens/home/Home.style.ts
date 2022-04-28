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
  featuredRestaurantsTitleContainer:{
    justifyContent:'space-between',
    alignItems:'center',
  },
  foodCardContainer:{
    flex:1,
    flexWrap:'wrap',
  },
  sectionContainer:{
    marginVertical:size.md,
  },
  title:{
    fontFamily:font.bold,
    fontSize:size.lg+4,
    color:'#323643',
    lineHeight:size.lg+10,
    marginBottom:size.sm,
  },
  subtitle:{
    fontFamily:font.bold,
    fontSize:size.rg+5,
    color:'#323643',
  },
  viewAll:{
    color:color.primary,
    textTransform:'capitalize',
  }
})