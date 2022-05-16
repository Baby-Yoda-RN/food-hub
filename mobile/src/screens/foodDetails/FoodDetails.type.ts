import { StackScreenProps } from '@react-navigation/stack';
import { Dispatch } from 'react';
import {
  TAppNavigationRoutes,
  EAppNavigationRoutes,
  TAppNavigation,
  TAppRouteProp,
} from '../../navigation';
import { TAddOn } from '../../types/data';

export type TFoodDetailsProps = StackScreenProps<
  TAppNavigationRoutes,
  EAppNavigationRoutes.FOODDETAIL
>;

export type TFoodDetailsScreenViewProps = {
  isLoading: boolean;
  title: string;
  image: string;
  description: string;
  ratings: number;
  price: number;
  reviewCount: number;
  reviewCountMax: number;
  countPlusMinus: any;
  onpressSeeReview: () => void;
  countPlusMinusChange: () => void;
  onPressPlus: () => void;
  onPressMinus: () => void;
  onPressGoBack: () => void;
  onPressAddToCart: () => void;
  pressAddOn?: () => void;
  selected: boolean;
  addOns: TAddOn;
  count: number;
};

export type TFoodDetailsNavigation = {
  navigation: TAppNavigation;
  route: TAppRouteProp;
};
