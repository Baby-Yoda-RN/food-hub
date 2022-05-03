import {StyleProp, ViewStyle} from 'react-native';
import {TFoodItem, TRestaurant} from '../../types/data';

export type TCardProps = {
  image?: string;
  title?: string;
  containerStyle?: StyleProp<ViewStyle>;
};

export type TRestaurantCardProps = {
  restaurant: TRestaurant;
};

export type TFoodItemCardProps = {
  foodItem: TFoodItem;
};
