import {foodHubAPI} from '../../../config';
import {THandleLogin, TUseHandleLogout} from './helper.type';
import {removeToken, storeToken, ELocalStorage} from '../../../utilities';
import {EAuthAction} from '../../../context/auth';

export const useHandleLogin: THandleLogin = async (
  email,
  password,
  dispatch,
) => {
  const response = await foodHubAPI.post('/login', {
    email,
    password,
  });

  try {
    if (response.status === 200) {
      if (response.data.token) {
        storeToken(ELocalStorage.TOKEN_KEY, response.data.token);
        dispatch({type: EAuthAction.SIGN_IN, token: response.data.token});
      }
    }
  } catch (error) {
    console.error(error);
  }
};

export const useHandleLogout: TUseHandleLogout = async (dispatch, signOut) => {
  await removeToken(ELocalStorage.TOKEN_KEY);
  dispatch({type: signOut, token: null});
};
