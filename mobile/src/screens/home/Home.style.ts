import {Dimensions, StyleSheet} from 'react-native';
import {color, font, size} from '../../theme';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  content: {
    flex: 1,
  },
  scrollView: {
    marginTop: size.rg,
  },
  scrollViewStyle: {
    flex: 1,
  },
  horizontalContainer: {
    flexDirection: 'row',
  },
  featuredRestaurantsTitleContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  foodCardContainer: {
    flex: 1,
    justifyContent:'space-between',
    flexWrap: 'wrap',
  },
  foodItemContainer:{
    width:'46%',
    backgroundColor:color.white,
    borderRadius:size.rg,
    marginBottom:size.lg,
  },
  headerContainer: {
    marginHorizontal: size.rg,
    paddingBottom: size.rg,
    shadowColor: color.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  shadow:{
    shadowColor: color.black,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 3,
  },
  sectionContainer: {
    marginVertical: size.md,
  },
  title: {
    fontFamily: font.bold,
    fontSize: size.lg,
    lineHeight: size.lg + 10,
    marginVertical:size.rg,
    color:color.title,
  },
  subtitle: {
    fontFamily: font.bold,
    fontSize: size.rg + 5,
    color:color.title,
  },
  viewAll: {
    color: color.primary,
    textTransform: 'capitalize',
  },
  viewAllContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:color.midGray
  },
  restaurantContainer: {
    width: windowWidth - 100,
  },
});
