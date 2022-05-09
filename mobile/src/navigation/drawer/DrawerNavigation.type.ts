import { Dispatch } from "react";

export enum EDrawerNavigationRoutes {
    CART = 'Cart',
    REVIEW = 'Review',
    HOME = 'Home',
    CATEGORY = 'Category',
    MYORDERS = 'MyOrders',
    DELIVERY_ADDRESS = 'DeliveryAddress',
    PROFILE = 'Profile',
    BOTTOM_NAV = 'Bottom_Nav'
}

export type TDrawerNavigationRoutes = {
    [EDrawerNavigationRoutes.CART]: undefined;
    [EDrawerNavigationRoutes.REVIEW]: undefined;
    [EDrawerNavigationRoutes.HOME]: undefined;
    [EDrawerNavigationRoutes.CATEGORY]: undefined;
    [EDrawerNavigationRoutes.MYORDERS]: undefined;
    [EDrawerNavigationRoutes.DELIVERY_ADDRESS]: undefined;
    [EDrawerNavigationRoutes.PROFILE]: undefined;
    [EDrawerNavigationRoutes.BOTTOM_NAV]: undefined;
};

export type TUserInfo = {
    name: string;
    image: string;
    email: string;
}

export type TSetUserInfo = Dispatch<{
    name: string;
    image: string;
    email: string;
}>