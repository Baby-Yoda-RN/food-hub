import {StackNavigationProp} from '@react-navigation/stack';

export enum EAppNavigationRoutes {
  CART = 'Cart',
  REVIEW = 'Review',
  HOME = 'Home',
  CATEGORY = 'Category',
  MYORDERS = 'MyOrders',
  FAVORITEFOODITEMS = 'FavoriteFoodItems',
}

export type TAppNavigationRoutes = {
  [EAppNavigationRoutes.CART]: undefined;
  [EAppNavigationRoutes.REVIEW]: undefined;
  [EAppNavigationRoutes.HOME]: undefined;
  [EAppNavigationRoutes.CATEGORY]: undefined;
  [EAppNavigationRoutes.MYORDERS]: undefined;
  [EAppNavigationRoutes.FAVORITEFOODITEMS]: undefined;
};

export type TAppNavigation = StackNavigationProp<TAppNavigationRoutes>;
