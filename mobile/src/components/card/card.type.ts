import {FoodItem, Restaurant} from '../../types/data';
import {StyleProp, ViewStyle} from 'react-native';

export type TCardProps = {
  restaurant?: Restaurant; // Optional for now, will be mandatory with data
  foodItem?: FoodItem; // Optional for now, will be mandatory with data
  cardType: 'foodCard' | 'restaurantCard';
  containerStyle?: StyleProp<ViewStyle>;
};
