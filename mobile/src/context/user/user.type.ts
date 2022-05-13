export type TUserState = {
  name: string,
  email: string,
  image: string,
  address: {
    street: string,
    city: string,
    state: string,
    zipcode: number
  },
  phone: string
}

export type TUserAction = {
  type: EUserAction;
  name: string;
  email: string;
  image: string;
  address: {
    street: string,
    city: string,
    state: string,
    zipcode: number
  },
  phone: string;
  userInfo: TUserState;
}

export enum EUserAction {
  SET_NAME = 'SET_NAME',
  SET_EMAIL = 'SET_EMAIL',
  SET_IMAGE = 'SET_IMAGE',
  SET_ADDRESS = 'SET_ADDRESS',
  SET_PHONE = 'SET_PHONE',
  SET_USER_INFO = 'SET_USER_INFO',
}