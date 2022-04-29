import {StackScreenProps} from '@react-navigation/stack';
import {
  TAuthNavigationRoutes,
  EAuthNavigationRoutes,
  TAuthNavigation,
} from '../../navigation';

export type TCategoryScreenProps = StackScreenProps<
  TAuthNavigationRoutes,
  EAuthNavigationRoutes.CATEGORY
>;

export type TCategoryViewProps = {
  title: string;
  press: () => void;
};

export type TLoginNavigation = {
  navigation: TAuthNavigation;
};
