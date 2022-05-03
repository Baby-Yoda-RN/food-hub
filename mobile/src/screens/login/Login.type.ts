import { TAuthNavigation } from '../../navigation';

export type TLoginScreenViewProps = {
    title: string;
    goToSignUp: () => void;
    goBack: () => void;
    goToResetPassword: () => void;
    isLoading: boolean;
};

export type TLoginNavigation = {
    navigation: TAuthNavigation
};