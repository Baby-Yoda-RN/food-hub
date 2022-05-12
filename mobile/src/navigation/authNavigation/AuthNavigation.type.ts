import {StackNavigationProp} from '@react-navigation/stack';

export enum EAuthNavigationRoutes {
  SIGNUP = 'SignUp',
  LOGIN = 'Login',
  VERIFY = 'Verify',
  PHONE_REGISTRATION = 'Phone_Registration',
  WELCOME = 'Welcome',
  RESET_PASSWORD = 'ResetPassword',
  STORY_BOOK = 'Story_Book',
}

export type TAuthNavigationRoutes = {
  [EAuthNavigationRoutes.SIGNUP]: undefined;
  [EAuthNavigationRoutes.LOGIN]: undefined;
  [EAuthNavigationRoutes.VERIFY]: undefined;
  [EAuthNavigationRoutes.PHONE_REGISTRATION]: undefined;
  [EAuthNavigationRoutes.WELCOME]: undefined;
  [EAuthNavigationRoutes.RESET_PASSWORD]: undefined;
  [EAuthNavigationRoutes.STORY_BOOK]: undefined;
};

export type TAuthNavigation = StackNavigationProp<TAuthNavigationRoutes>;
