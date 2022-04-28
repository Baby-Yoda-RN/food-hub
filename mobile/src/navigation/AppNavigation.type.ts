export enum ERootStackRoutes {
  PHONE_REGISTRATION_SCREEN = 'PHONE_REGISTRATION_SCREEN',
}

export type RootStackParams = {
  Login: {
    name: string;
  };
  Signup: {
    name: string;
  };
  [ERootStackRoutes.PHONE_REGISTRATION_SCREEN]: undefined;
};
