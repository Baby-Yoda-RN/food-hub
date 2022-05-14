import {StackScreenProps} from '@react-navigation/stack';
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
  name?: string;
  phoneNumber?: string;
  state?: string;
  city?: string;
  street?: string;
  saveButton?: () => void;
  goBack?: () => void;
  press?: () => void;
};

export type TaddNewAddressNavigation = {
  navigation?: TAuthNavigation;
};
