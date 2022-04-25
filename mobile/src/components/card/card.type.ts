import {FoodItem, Restaurant} from '../../types/data';
import {StyleProp, ViewStyle} from 'react-native';

export type TCardProps = {
  image?: string;
  title?: string;
  subtitle?: string;
  tags?: string[];
  rating?: number;
  usersVoted?: number;
  favorite?: boolean;
  price?: number;
  freeDelivery?: string;
  deliveryTime?: number;
  restaurant?: Restaurant;
  foodItem?: FoodItem;
  isRestaurant: boolean;
  containerStyle?: StyleProp<ViewStyle>;
};
