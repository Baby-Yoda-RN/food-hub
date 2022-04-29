import { StackScreenProps } from '@react-navigation/stack';
import { TAuthNavigationRoutes, EAuthNavigationRoutes, TAuthNavigation } from '../../navigation';

export type TLoginScreenProps = StackScreenProps<TAuthNavigationRoutes, EAuthNavigationRoutes.LOGIN>;

export type TaddNewAddressViewProps = {
    title: string;
    press: () => void;
};

export type TaddNewAddressNavigation = {
    navigation: TAuthNavigation
};