import {foodHubAPI} from '../../../config';
import {THandleSignup, TUseHandleLogout} from './helper.type';
import {removeToken, storeToken, ELocalStorage} from '../../../utilities';
import {EAuthAction} from '../../../context/auth';
import {EUserAction} from '../../../context/user';
import {fetchUserInfo} from '../../../navigation/drawer/fetchUserInfo';

export const useHandleSignUp: THandleSignup = async (
  name,
  email,
  password,
  dispatch,
) => {
  const response = await foodHubAPI.post('/register', {
    name,
    email,
    password,
  });

  try {
    if (response.status === 200) {
      if (response.data.token) {
        storeToken(ELocalStorage.TOKEN_KEY, response.data.token);
        dispatch({type: EAuthAction.SIGN_IN, token: response.data.token});
        dispatch({
          type: EUserAction.SET_USER_INFO,
          userInfo: {
            name: response.data.name,
            email: response.data.email,
            image: response.data.image,
            address: response.data.address,
            phone: response.data.phone,
          },
        });
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
