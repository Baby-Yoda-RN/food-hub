import {StackNavigationProp} from '@react-navigation/stack';

export enum EAppNavigationRoutes {
  CART = 'Cart',
  REVIEW = 'Review',
  HOME = 'Home',
  CATEGORY = 'Category',
  RATING = "Rating",
}

export type TAppNavigationRoutes = {
  [EAppNavigationRoutes.CART]: undefined;
  [EAppNavigationRoutes.REVIEW]: undefined;
  [EAppNavigationRoutes.HOME]: undefined;
  [EAppNavigationRoutes.CATEGORY]: undefined;
  [EAppNavigationRoutes.RATING]: undefined;
};

export type TAppNavigation = StackNavigationProp<TAppNavigationRoutes>;
