import { StackScreenProps } from '@react-navigation/stack';
import { TAppNavigationRoutes, EAppNavigationRoutes } from '../../navigation';

export type TLoginScreenProps = StackScreenProps<TAppNavigationRoutes, EAppNavigationRoutes.LOGIN>;

export type TLoginScreenViewProps = {
    title: string;
    press: () => void;
};
