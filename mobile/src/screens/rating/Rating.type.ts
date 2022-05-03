import {StackScreenProps} from '@react-navigation/stack';
import { ImageSourcePropType } from 'react-native';
import { EAppNavigationRoutes, TAppNavigation, TAppNavigationRoutes } from '../../navigation';
import { TRestaurant } from '../../types/data';

export type TRatingView = {
    restaurant?: string,
    address?: string;
    isDelivered?: boolean;
    restaurantImage?: ImageSourcePropType;
    title?: string;
    starRating?: number;
    textRating?: string[];
    press?: () => void;
}

export type TRatingNavigation = {
    navigation: TAppNavigation;
}