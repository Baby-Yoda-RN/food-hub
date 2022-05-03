import {StyleProp, ViewStyle} from 'react-native';
import {TFoodItem, TRestaurant} from '../../types/data';

export type TCardProps = {
  image?: string;
  title?: string;
  renderDetails: () => {};
  containerStyle?: StyleProp<ViewStyle>;
};

export type TRestaurantCardProps = {
  restaurant: TRestaurant;
};

export type TFoodItemCardProps = {
  foodItem: TFoodItem;
};
