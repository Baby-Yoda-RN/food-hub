import {StackNavigationProp} from '@react-navigation/stack';

export enum EAppNavigationRoutes {
  CART = 'Cart',
  REVIEW = 'Review',
  FOODDETAIL = 'FoodDetail',
  HOME = 'Home',
  CATEGORY = 'Category',
  RATING = 'Rating',
  MYORDERS = 'MyOrders',
  ADDNEWADDRESS = 'AddNewAddress',
  PROFILE = 'Profile',
  BOTTOM_TAB_STACK = 'Bottom Tab Stack',
  FAVORITEFOODITEMS = 'FavoriteFoodItems',
  RESTAURANTREVIEW = 'RestaurantReview',
  DRAWER = 'Drawer',
}

export type TAppNavigationRoutes = {
  [EAppNavigationRoutes.CART]: undefined;
  [EAppNavigationRoutes.REVIEW]: undefined;
  [EAppNavigationRoutes.FOODDETAIL]: undefined;
  [EAppNavigationRoutes.HOME]: undefined;
  [EAppNavigationRoutes.CATEGORY]: undefined;
  [EAppNavigationRoutes.RATING]: undefined;
  [EAppNavigationRoutes.MYORDERS]: undefined;
  [EAppNavigationRoutes.ADDNEWADDRESS]: undefined;
  [EAppNavigationRoutes.PROFILE]: undefined;
  [EAppNavigationRoutes.BOTTOM_TAB_STACK]: undefined;
  [EAppNavigationRoutes.FAVORITEFOODITEMS]: undefined;
  [EAppNavigationRoutes.RESTAURANTREVIEW]: undefined;
  [EAppNavigationRoutes.DRAWER]: undefined;
};

export type TAppNavigation = StackNavigationProp<TAppNavigationRoutes>;
