import { StackScreenProps } from '@react-navigation/stack';
import { TAppNavigationRoutes, EAppNavigationRoutes } from '../../navigation';

export type TSignUpScreenProps = StackScreenProps<TAppNavigationRoutes, EAppNavigationRoutes.SIGNUP>

export type TSignUpScreenViewProps = {
    title: string;
    press: () => void;
};
