import { StackScreenProps } from '@react-navigation/stack';
import {
  TAppNavigationRoutes,
  EAppNavigationRoutes,
  TAppNavigation,
  TAppRouteProp,
} from '../../navigation';

export type TFoodDetailsProps = StackScreenProps<
  TAppNavigationRoutes,
  EAppNavigationRoutes.FOODDETAIL
>;

export type TFoodDetailsScreenViewProps = {
  title: string;
  subtitle: string;
  description: string;
  price: number;
  rating: number;
  reviewCount: number;
  reviewCountMax: number;
  countPlusMinus: any;
  countPlusMinusChange: () => {};
  onPressPlus: () => {};
  onPressMinus: () => {};
  onPressGoBack: () => void;
  onPressAddToCart: () => void;
  addOn: [];
};

export type TFoodDetailsNavigation = {
  navigation: TAppNavigation;
  route: TAppRouteProp;
};
