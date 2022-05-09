import {StyleProp, ViewStyle} from 'react-native';
import {TFoodItem, TRestaurant} from '../../types/data';

export type TCardProps = {
  image?: string;
  title?: string;
  containerStyle?: StyleProp<ViewStyle>;
};

export type TRestaurantCardProps = {
  restaurantId: string;
};

export type TFoodItemCardProps = {
  foodItemId: string;
};
