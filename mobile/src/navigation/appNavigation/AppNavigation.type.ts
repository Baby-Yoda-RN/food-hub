import {StackNavigationProp} from '@react-navigation/stack';

export enum EAppNavigationRoutes {
  CART = 'Cart',
  REVIEW = 'Review',
  HOME = 'Home',
  CATEGORY = 'Category',
  RATING = 'Rating',
  MYORDERS = 'MyOrders',
  BOTTOM_TAB_STACK = 'Bottom Tab Stack',
  FAVORITEFOODITEMS = 'FavoriteFoodItems',
  RESTAURANTREVIEW = 'RestaurantReview'
}

export type TAppNavigationRoutes = {
  [EAppNavigationRoutes.CART]: undefined;
  [EAppNavigationRoutes.REVIEW]: undefined;
  [EAppNavigationRoutes.HOME]: undefined;
  [EAppNavigationRoutes.CATEGORY]: undefined;
  [EAppNavigationRoutes.RATING]: undefined;
  [EAppNavigationRoutes.MYORDERS]: undefined;
  [EAppNavigationRoutes.BOTTOM_TAB_STACK]: undefined;
  [EAppNavigationRoutes.FAVORITEFOODITEMS]: undefined;
  [EAppNavigationRoutes.RESTAURANTREVIEW]: undefined;
};

export type TAppNavigation = StackNavigationProp<TAppNavigationRoutes>;
