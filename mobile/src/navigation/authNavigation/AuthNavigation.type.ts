import {StackNavigationProp} from '@react-navigation/stack';

export enum EAuthNavigationRoutes {
  SIGNUP = 'SignUp',
  LOGIN = 'Login',
  CATEGORY = 'Category',
}

export type TAuthNavigationRoutes = {
  [EAuthNavigationRoutes.SIGNUP]: undefined;
  [EAuthNavigationRoutes.LOGIN]: undefined;
  [EAuthNavigationRoutes.CATEGORY]: undefined;
};

export type TAuthNavigation = StackNavigationProp<TAuthNavigationRoutes>;
