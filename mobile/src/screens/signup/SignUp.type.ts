import {Dispatch} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {
  TAuthNavigationRoutes,
  EAuthNavigationRoutes,
  TAuthNavigation,
} from '../../navigation';

export type TSignUpScreenProps = StackScreenProps<
  TAuthNavigationRoutes,
  EAuthNavigationRoutes.SIGNUP
>;

export type TSignUpScreenViewProps = {
  title: string;
  name: string;
  setName: Dispatch<string>;
  email: string;
  setEmail: Dispatch<string>;
  password: string;
  setPassword: Dispatch<string>;
  signup: () => void;
  onPressGoToLogin: () => void;
  isLoading?: boolean;
};

export type TSignUpNavigation = {
  navigation: TAuthNavigation;
};
