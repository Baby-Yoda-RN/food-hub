import {StackNavigationProp} from '@react-navigation/stack';

export enum EAuthNavigationRoutes {
  WELCOME = 'Welcome',
  SIGNUP = 'SignUp',
  LOGIN = 'Login',
}

export type TAuthNavigationRoutes = {
  [EAuthNavigationRoutes.WELCOME]: undefined;
  [EAuthNavigationRoutes.SIGNUP]: undefined;
  [EAuthNavigationRoutes.LOGIN]: undefined;
};

export type TAuthNavigation = StackNavigationProp<TAuthNavigationRoutes>;
