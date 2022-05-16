import {StackScreenProps} from '@react-navigation/stack';
import { Dispatch } from 'react';
import {
  EAuthNavigationRoutes,
  TAuthNavigation,
  TAuthNavigationRoutes,
} from '../../navigation';

export type TResetPasswordProps = StackScreenProps<
  TAuthNavigationRoutes,
  EAuthNavigationRoutes.RESET_PASSWORD
>;
export type TResetPasswordViewProps = {
  title: string;
  subtitle: string;
  sendNewPassword: () => void;
  goBack: () => void;
  setEmail: Dispatch<string>;
};
export type TResetPasswordNavigation = {
  navigation: TAuthNavigation;
};
