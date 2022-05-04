import { Dispatch } from 'react';
import { TAuthNavigation } from '../../navigation';

export type TLoginScreenViewProps = {
    title: string;
    email: string;
    setEmail: Dispatch<string>;
    password: string;
    setPassword: Dispatch<string>;
    login: () => void;
    goToSignUp: () => void;
    goBack: () => void;
    goToResetPassword: () => void;
    isLoading: boolean;
};

export type TLoginNavigation = {
    navigation: TAuthNavigation
};