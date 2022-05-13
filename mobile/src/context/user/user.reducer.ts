import { EUserAction, TUserAction, TUserState } from '../user';

export const userReducer = (prevState: TUserState, action: TUserAction) => {
  switch (action.type) {
    case EUserAction.SET_NAME:
      return {
        ...prevState,
        name: action.name,
      };
    case EUserAction.SET_EMAIL:
      return {
        ...prevState,
        email: action.email,
      }
    case EUserAction.SET_IMAGE:
      return {
        ...prevState,
        image: action.image,
      }
    case EUserAction.SET_ADDRESS:
      return {
        ...prevState,
        address: action.address,
      }
    case EUserAction.SET_PHONE:
      return {
        ...prevState,
        phone: action.phone,
      }
    case EUserAction.SET_USER_INFO:
      return {
        name: action.userInfo.name,
        email: action.userInfo.email,
        image: action.userInfo.image,
        address: action.userInfo.address,
        phone: action.userInfo.phone
      }
    default:
      return prevState;
  }
};

