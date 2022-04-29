import { StackNavigationProp } from "@react-navigation/stack";

export enum EAppNavigationRoutes {
    CART = "Cart",
    REVIEW = "Review",
    FAVORITEFOODITEMS = "FavoriteFoodItems",
};

export type TAppNavigationRoutes = {
    [EAppNavigationRoutes.CART]: undefined;
    [EAppNavigationRoutes.REVIEW]: undefined;
    [EAppNavigationRoutes.FAVORITEFOODITEMS]: undefined;
};

export type TAppNavigation = StackNavigationProp<TAppNavigationRoutes>;