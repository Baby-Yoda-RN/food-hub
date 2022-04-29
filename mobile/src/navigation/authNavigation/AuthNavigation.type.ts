import { StackNavigationProp } from "@react-navigation/stack";

export enum EAuthNavigationRoutes {
    SIGNUP = "SignUp",
    LOGIN = "Login",
    RESET_PASSWORD = "ResetPassword"
};

export type TAuthNavigationRoutes = {
    [EAuthNavigationRoutes.SIGNUP]: undefined;
    [EAuthNavigationRoutes.LOGIN]: undefined;
    [EAuthNavigationRoutes.RESET_PASSWORD]: undefined;
};

export type TAuthNavigation = StackNavigationProp<TAuthNavigationRoutes>;