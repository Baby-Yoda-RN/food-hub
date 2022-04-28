export enum ERootStackRoutes {
    HOME_SCREEN = 'HOME_SCREEN',
}

export type RootStackParams = {
    Login: {
        name: string;
    };
    Signup: {
        name: string;
    };
    [ERootStackRoutes.HOME_SCREEN]:undefined,
};