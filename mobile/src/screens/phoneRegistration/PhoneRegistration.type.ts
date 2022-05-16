import {StackScreenProps} from '@react-navigation/stack';
import { Dispatch } from 'react';
import {
  EAuthNavigationRoutes,
  TAuthNavigation,
  TAuthNavigationRoutes,
} from '../../navigation';

export type TPhoneRegistrationProps = StackScreenProps<
  TAuthNavigationRoutes,
  EAuthNavigationRoutes.PHONE_REGISTRATION
>;
export type TPhoneRegistrationViewProps = {
  title: string;
  subtitle: string;
  handleSendRequest: () => void;
  handleBackRequest: () => void;
  setPhoneNumber: Dispatch<string>;
};
export type TPhoneRegistrationNavigation = {
  navigation: TAuthNavigation;
};
