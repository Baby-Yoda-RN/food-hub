import { foodHubAPI } from "../../config";
import { TSetUserInfo } from "./DrawerNavigation.type";

export const fetchUserInfo = async (setUserInfo: TSetUserInfo) => {
    let tempUserInfo = await foodHubAPI.get('/userInfo');
    setUserInfo(tempUserInfo.data);
};