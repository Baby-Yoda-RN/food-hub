import { StackScreenProps } from '@react-navigation/stack';
import { TAuthNavigationRoutes, EAuthNavigationRoutes, TAuthNavigation } from '../../navigation';
import { TFoodItem } from '../../types/data';

export type TFavoriteFoodItemsScreenProps = StackScreenProps<TAuthNavigationRoutes, EAuthNavigationRoutes.FAVORITEFOODITEMS>

export type TFavoriteFoodItemsScreenViewProps = {
    title: string;
    press: () => void;
    foodCard: TFoodItem;
};

export type TFavoriteFoodItemsNavigation = {
    navigation: TAuthNavigation
};