import { StackNavigationProp } from "@react-navigation/stack";

export enum EAppNavigationRoutes {
    SIGNUP = "SignUp",
    LOGIN = "Login",
};

export type TAppNavigationRoutes = {
    [EAppNavigationRoutes.SIGNUP]: undefined;
    [EAppNavigationRoutes.LOGIN]: undefined;
};

export type TAppNavigation = StackNavigationProp<TAppNavigationRoutes>;