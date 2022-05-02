import { StackScreenProps } from '@react-navigation/stack';
import { TAppNavigationRoutes, EAppNavigationRoutes, TAppNavigation } from '../../navigation';
import { TFoodItem } from '../../types/data';

export type TFavoriteFoodItemsScreenProps = StackScreenProps<TAppNavigationRoutes, EAppNavigationRoutes.FAVORITEFOODITEMS>;

export type TFavoriteFoodItemsScreenViewProps = {
    title: string;
    onPress: () => void;
    foodCard: TFoodItem;
    isLoading: boolean
};

export type TFavoriteFoodItemsNavigation = {
    navigation: TAppNavigation
};