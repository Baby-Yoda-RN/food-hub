import {StackScreenProps} from '@react-navigation/stack';
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
  press: () => void;
};
export type TResetPasswordNavigation = {
  navigation: TAuthNavigation;
};