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
    flexWrap: 'wrap',
  },
  foodItemContainer:{
    width:'50%',
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
  sectionContainer: {
    marginVertical: size.md,
  },
  title: {
    fontFamily: font.bold,
    fontSize: 32,
    lineHeight: size.lg + 10,
    marginBottom: size.sm,
  },
  subtitle: {
    fontFamily: font.bold,
    fontSize: size.rg + 5,
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
