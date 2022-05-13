import { foodHubAPI } from "../../config";
import { EUserAction } from "../../context/user";
import { TDispatchUserInfo } from './DrawerNavigation.type';

export const fetchUserInfo = async (dispatch: TDispatchUserInfo) => {
    let tempUserInfo = await foodHubAPI.get('/userInfo');
    dispatch({ type: EUserAction.SET_NAME, name: tempUserInfo.data.name });
    dispatch({ type: EUserAction.SET_EMAIL, email: tempUserInfo.data.email });
    dispatch({ type: EUserAction.SET_IMAGE, image: tempUserInfo.data.image });
};