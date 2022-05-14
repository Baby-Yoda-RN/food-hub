import {StackScreenProps} from '@react-navigation/stack';
import {
  TAuthNavigationRoutes,
  EAuthNavigationRoutes,
  TAuthNavigation,
} from '../../navigation';

export type TWelcomeScreenProps = StackScreenProps<
  TAuthNavigationRoutes,
  EAuthNavigationRoutes.WELCOME
>;

export type TWelcomeScreenViewProps = {
  title: string;
  pressSignUp: () => void;
  pressSignIn: () => void;
  goToStoryBook: () => void;
};

export type TWelcomeNavigation = {
  navigation: TAuthNavigation;
};
