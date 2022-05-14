import {StackScreenProps} from '@react-navigation/stack';
import {
  TAuthNavigationRoutes,
  EAuthNavigationRoutes,
  TAuthNavigation,
} from '../../navigation';

export type TVerifyScreenViewProps = {
  title: string;
  emailName: string;
  pinEntry: string;
  onPressResend: () => {};
  goBack: () => void;
};

export type TVerifyScreenNavigation = {
  navigation: TAuthNavigation;
};
