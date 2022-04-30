import { StackScreenProps } from '@react-navigation/stack';
import { TAppNavigationRoutes, EAppNavigationRoutes, TAppNavigation } from '../../navigation/appNavigation/AppNavigation.type';

export type TCartScreenProps = StackScreenProps<TAppNavigationRoutes, EAppNavigationRoutes.CART>;

export type TProfileViewProps = {
  name ?: string;
  email ?: string;
  phoneNumber ?: string;
  profileURL ?: string;

}

export type TProfileNavigation = {
  navigation: TAppNavigation
};