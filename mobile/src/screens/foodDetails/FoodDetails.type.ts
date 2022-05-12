import {StackScreenProps} from '@react-navigation/stack';
import {
  TAppNavigationRoutes,
  EAppNavigationRoutes,
  TAppNavigation,
} from '../../navigation';

export type TFoodDetailsProps = StackScreenProps<
  TAppNavigationRoutes,
  EAppNavigationRoutes.FOODDETAIL
>;

export type TFoodDetailsScreenViewProps = {
  title: string;
  subtitle: string;
  description: string;
  price: int;
  rating: int;
  reviewCount: int;
  countPlusMinus: any;
  countPlusMinusChange: () => {};
  onPressPlus: () => {};
  onPressMinus: () => {};
  addOn: [];
};

export type TFoodDetailsNavigation = {
  navigation: TAppNavigation;
};
