import {StackNavigationProp} from '@react-navigation/stack';

export enum EAppNavigationRoutes {
  CART = 'Cart',
  REVIEW = 'Review',
  FOODDETAIL = 'FoodDetail',
}

export type TAppNavigationRoutes = {
  [EAppNavigationRoutes.CART]: undefined;
  [EAppNavigationRoutes.REVIEW]: undefined;
  [EAppNavigationRoutes.FOODDETAIL]: undefined;
};

export type TAppNavigation = StackNavigationProp<TAppNavigationRoutes>;
