import { Dispatch } from 'react';
import { ImageSourcePropType } from 'react-native';
import { TAppNavigation, TAppRouteProp } from '../../navigation';
export type TRatingView = {
    isLoading: boolean;
    background: string;
    restaurant?: string;
    logo: string;
    address?: string;
    isDelivered?: boolean;
    restaurantImage?: ImageSourcePropType;
    title?: string;
    starRating?: number;
    textRating?: string[];
    press?: () => void;
    leftPress: () => void;
    setReview: Dispatch<string>;
}

export type TRatingNavigation = {
    navigation: TAppNavigation;
    route: TAppRouteProp;
}