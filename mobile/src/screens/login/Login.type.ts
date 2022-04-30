import { StackScreenProps } from '@react-navigation/stack';
import { TAuthNavigationRoutes, EAuthNavigationRoutes, TAuthNavigation } from '../../navigation';

export type TLoginScreenProps = StackScreenProps<TAuthNavigationRoutes, EAuthNavigationRoutes.LOGIN>;

export type TLoginScreenViewProps = {
    title: string;
    goToSignUp: () => void;
    goBack: () => void;
    goToResetPassword: () => void;
};

export type TLoginNavigation = {
    navigation: TAuthNavigation
};