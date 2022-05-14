import {StackScreenProps} from '@react-navigation/stack';
import { Dispatch } from 'react';
import {
  TAppNavigationRoutes,
  EAppNavigationRoutes,
  TAppNavigation,
} from '../../navigation/appNavigation/AppNavigation.type';

export type TCartScreenProps = StackScreenProps<
  TAppNavigationRoutes,
  EAppNavigationRoutes.CART
>;

export type TProfileViewProps = {
  isLoading: boolean;
  name?: string;
  email?: string;
  image?: string;
  phoneNumber?: string;
  goBack?: () => void;
  saveButton: () => void;
  setName: Dispatch<string>;
  setEmail: Dispatch<string>;
  setPhone: Dispatch<string>;
};

export type TProfileNavigation = {
  navigation: TAppNavigation;
};
