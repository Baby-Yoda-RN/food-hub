import { StackScreenProps } from '@react-navigation/stack';
import { Dispatch, SetStateAction } from 'react';
import { TAppNavigationRoutes, EAppNavigationRoutes, TAppNavigation } from '../../navigation';
import { TFoodItem, TRestaurant } from '../../types/data';

export type TFavoriteFoodItemsScreenProps = StackScreenProps<TAppNavigationRoutes, EAppNavigationRoutes.FAVORITEFOODITEMS>;

export type TFavoriteFoodItemsScreenViewProps = {
    image: string;
    favoriteFoodItems: TFoodItem[];
    favoriteRestaurants: TRestaurant[];
    isLoading: boolean;
    showFavoriteFoods?: boolean;
    setShowFavoriteFoods?: Dispatch<SetStateAction<boolean>>;
    leftPress: () => void;
    rightPress: () => void;
};

export type TFavoriteFoodItemsNavigation = {
    navigation: TAppNavigation
};

