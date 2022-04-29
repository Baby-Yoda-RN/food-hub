import { StackNavigationProp } from "@react-navigation/stack";

export enum EAppNavigationRoutes {
    CART = "Cart",
    REVIEW = "Review",
    RATING = "Rating",
};

export type TAppNavigationRoutes = {
    [EAppNavigationRoutes.CART]: undefined;
    [EAppNavigationRoutes.REVIEW]: undefined;
    [EAppNavigationRoutes.RATING]: undefined;
};

export type TAppNavigation = StackNavigationProp<TAppNavigationRoutes>;