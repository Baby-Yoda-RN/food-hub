import {EUserAction, TUserAction, TUserState} from './user.type';

export const userReducer = (prevState: TUserState, action:TUserAction) => {
  switch (action.type) {
    default:
      return prevState;
  }
};

