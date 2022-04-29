import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum EAppNavigationRoutes {
  PHONE_REGISTRATION = 'PHONE_REGISTRATION',
}

export type TAppNavigationRoutes = {
  [EAppNavigationRoutes.PHONE_REGISTRATION]: undefined;
};

export type TAppNavigation = NativeStackNavigationProp<TAppNavigationRoutes>;
