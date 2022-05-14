import { StackScreenProps } from '@react-navigation/stack';
import { Dispatch } from 'react';
import {
  TAuthNavigationRoutes,
  EAuthNavigationRoutes,
  TAuthNavigation,
} from '../../navigation/authNavigation/AuthNavigation.type';

export type TLoginScreenProps = StackScreenProps<
  TAuthNavigationRoutes,
  EAuthNavigationRoutes.LOGIN
>;

export type TaddNewAddressViewProps = {
  isLoading?: boolean;
  name?: string;
  phoneNumber?: string;
  state?: string;
  city?: string;
  street?: string;
  saveButton?: () => void;
  goBack?: () => void;
  press?: () => void;
  setName: Dispatch<string>;
  setPhone: Dispatch<string>;
  setCity: Dispatch<string>;
  setStreet: Dispatch<string>;
  setProvince: Dispatch<string>;
};

export type TaddNewAddressNavigation = {
  navigation?: TAuthNavigation;
};
