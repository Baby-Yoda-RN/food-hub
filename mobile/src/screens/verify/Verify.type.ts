import {StackScreenProps} from '@react-navigation/stack';
import {
  TAuthNavigationRoutes,
  EAuthNavigationRoutes,
  TAuthNavigation,
} from '../../navigation';

export type TVerifyScreenProps = StackScreenProps<
  TAuthNavigationRoutes,
  EAuthNavigationRoutes.VERIFY
>;

export type TVerifyScreenViewProps = {
  title: string;
  emailName: string;
  pinEntry: string;
};

export type TVerifyScreenNavigation = {
  navigation: TAuthNavigation;
};
