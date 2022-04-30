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
};

export type TFoodDetailsNavigation = {
  navigation: TAppNavigation;
};
