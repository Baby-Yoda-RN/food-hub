import { StackScreenProps } from '@react-navigation/stack';
import { Dispatch, SetStateAction } from 'react';
import { TAppNavigationRoutes, EAppNavigationRoutes, TAppNavigation } from '../../navigation';

export type TFavoriteFoodItemsScreenProps = StackScreenProps<TAppNavigationRoutes, EAppNavigationRoutes.FAVORITEFOODITEMS>;

export type TFavoriteFoodItemsScreenViewProps = {
    onPress: () => void;
    favoriteFoodItems:Array<Object>
    favoriteResturants:Array<Object>
    isLoading: boolean
    showFavoriteFoods?:boolean
    setShowFavoriteFoods?:Dispatch<SetStateAction<boolean>>
};

export type TFavoriteFoodItemsNavigation = {
    navigation: TAppNavigation
};

