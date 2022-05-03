import { StackScreenProps } from '@react-navigation/stack';
import { TAuthNavigationRoutes, EAuthNavigationRoutes, TAuthNavigation } from '../../navigation';

export type TSignUpScreenProps = StackScreenProps<TAuthNavigationRoutes, EAuthNavigationRoutes.SIGNUP>

export type TSignUpScreenViewProps = {
    title: string;
    press: () => void;
};

export type TSignUpNavigation = {
    navigation: TAuthNavigation
};