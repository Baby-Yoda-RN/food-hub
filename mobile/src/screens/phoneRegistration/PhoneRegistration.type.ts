import {StackScreenProps} from '@react-navigation/stack';
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
  press: () => void;
};
export type TPhoneRegistrationNavigation = {
  navigation: TAuthNavigation;
};
