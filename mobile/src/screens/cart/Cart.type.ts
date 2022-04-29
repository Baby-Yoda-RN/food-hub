import { StackScreenProps } from '@react-navigation/stack';
import { TAppNavigationRoutes, EAppNavigationRoutes, TAppNavigation } from '../../navigation';

export type TCartScreenProps = StackScreenProps<TAppNavigationRoutes, EAppNavigationRoutes.CART>;

export type TCartScreenViewProps = {
    title: string;
    onPress: () => void;
};

export type TCartNavigation = {
    navigation: TAppNavigation
};