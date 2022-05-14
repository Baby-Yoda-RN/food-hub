import { StackScreenProps } from '@react-navigation/stack';
import { Dispatch } from 'react';
import { TAuthNavigationRoutes, EAuthNavigationRoutes, TAuthNavigation } from '../../navigation';

export type TSignUpScreenProps = StackScreenProps<TAuthNavigationRoutes, EAuthNavigationRoutes.SIGNUP>

export type TSignUpScreenViewProps = {
    title: string;
    pressLogin: () => void;
    pressSignUp: () => void;
    isLoading: boolean;
    setName: Dispatch<string>;
    setEmail: Dispatch<string>;
    setPassword: Dispatch<string>;
};

export type TSignUpNavigation = {
    navigation: TAuthNavigation
};