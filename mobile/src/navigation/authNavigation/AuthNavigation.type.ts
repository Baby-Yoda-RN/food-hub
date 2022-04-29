import { StackNavigationProp } from "@react-navigation/stack";

export enum EAuthNavigationRoutes {
    SIGNUP = "SignUp",
    LOGIN = "Login",
};

export type TAuthNavigationRoutes = {
    [EAuthNavigationRoutes.SIGNUP]: undefined;
    [EAuthNavigationRoutes.LOGIN]: undefined;
};

export type TAuthNavigation = StackNavigationProp<TAuthNavigationRoutes>;