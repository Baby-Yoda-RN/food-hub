import { StackNavigationProp } from "@react-navigation/stack";

export enum EAppNavigationRoutes {
    CART = "Cart",
    REVIEW = "Review",
    HOME = 'Home',
};

export type TAppNavigationRoutes = {
    [EAppNavigationRoutes.CART]: undefined;
    [EAppNavigationRoutes.REVIEW]: undefined;
    [EAppNavigationRoutes.HOME]: undefined;
};

export type TAppNavigation = StackNavigationProp<TAppNavigationRoutes>;