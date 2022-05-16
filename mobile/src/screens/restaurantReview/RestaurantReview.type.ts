import { ImageSourcePropType } from 'react-native';
import {
  TAppNavigation,
} from '../../navigation';

export type TRestaurantReviewView = {
  restaurant?: string,
  restaurantImage?: ImageSourcePropType;
  title?: string;
  starRating?: number;
  textRating?: string[];
  leftIconPress: () => void;
  submit: () => void;
}

export type TRestaurantReviewNavigation = {
  navigation: TAppNavigation;
}