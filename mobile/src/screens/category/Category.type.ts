import {StackScreenProps} from '@react-navigation/stack';
import {
  TAppNavigationRoutes,
  EAppNavigationRoutes,
  TAppNavigation,
} from '../../navigation/appNavigation/AppNavigation.type';

export type TCategoryScreenProps = StackScreenProps<
  TAppNavigationRoutes,
  EAppNavigationRoutes.CATEGORY
>;

export type TCategoryViewProps = {
  title: string;
  press: () => void;
};

export type TCategoryNavigation = {
  navigation: TAppNavigation;
};
