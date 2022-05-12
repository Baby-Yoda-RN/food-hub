import { ImageSourcePropType } from 'react-native';
import { TAppNavigation} from '../../navigation';

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