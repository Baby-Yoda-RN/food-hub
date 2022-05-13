import {StackScreenProps} from '@react-navigation/stack';
import { ImageSourcePropType } from 'react-native';
import {
  EAppNavigationRoutes,
  TAppNavigation,
  TAppNavigationRoutes,
} from '../../navigation';

export type TRestaurantReviewView = {
    restaurant?: string,
    restaurantImage?: ImageSourcePropType;
    title?: string;
    starRating?: number;
    textRating?: string[];
    press?: () => void;
}

export type TRestaurantReviewNavigation = {
    navigation: TAppNavigation;
}