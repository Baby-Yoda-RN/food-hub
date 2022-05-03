import {StackNavigationProp} from '@react-navigation/stack';

export enum EAuthNavigationRoutes {
  SIGNUP = 'SignUp',
  LOGIN = 'Login',
  PHONE_REGISTRATION = 'Phone_Registration',
  WELCOME = 'Welcome',
  RESET_PASSWORD = "ResetPassword"
}

export type TAuthNavigationRoutes = {
  [EAuthNavigationRoutes.SIGNUP]: undefined;
  [EAuthNavigationRoutes.LOGIN]: undefined;
  [EAuthNavigationRoutes.PHONE_REGISTRATION]: undefined;
  [EAuthNavigationRoutes.WELCOME]: undefined;
  [EAuthNavigationRoutes.RESET_PASSWORD]: undefined;
};

export type TAuthNavigation = StackNavigationProp<TAuthNavigationRoutes>;
