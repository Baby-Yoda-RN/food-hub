import React, {FC, useEffect, useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ReviewScreen} from '../../screens';
import {SideMenu} from '../../components';
import {
  EDrawerNavigationRoutes,
  TDrawerNavigationRoutes,
  TUserInfo,
} from './DrawerNavigation.type';
import {removeToken} from '../../utilities';
import {fetchUserInfo} from './fetchUserInfo';
import {BottomTabNavigation} from '../bottomTabNavigation/BottomTabNavigator';
import { useGlobalState } from '../../context/global';
import { EUserAction } from '../../context/user';

const Drawer = createDrawerNavigator();

export const MyDrawer: FC<TDrawerNavigationRoutes> = () => {
  const {state, dispatch} = useGlobalState();
  const [userInfo, setUserInfo] = useState<TUserInfo>();

  useEffect(() => {
    fetchUserInfo(setUserInfo);
    dispatch({type: EUserAction.SET_NAME, name: userInfo?.name});
    dispatch({type: EUserAction.SET_EMAIL, email: userInfo?.email});
    dispatch({type: EUserAction.SET_IMAGE, picture: userInfo?.image});
  }, [dispatch]);

  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={({navigation: {navigate}}) => (
        <SideMenu
          name={state.userInfo.name || userInfo?.name}
          email={state.userInfo.email || userInfo?.email}
          image={state.userInfo.image || userInfo?.image}
          pressOrder={() => navigate(EDrawerNavigationRoutes.MYORDERS)}
          pressProfile={() => navigate(EDrawerNavigationRoutes.PROFILE)}
          pressDelivery={() =>
            navigate(EDrawerNavigationRoutes.DELIVERY_ADDRESS)
          }
          pressCart={() => navigate(EDrawerNavigationRoutes.CART)}
          pressReview={() => navigate(EDrawerNavigationRoutes.REVIEW)}
          pressCategory={() => navigate(EDrawerNavigationRoutes.CATEGORY)}
          pressLogout={() => removeToken('key')}
        />
      )}>
      <Drawer.Screen
        name={EDrawerNavigationRoutes.BOTTOM_NAV}
        component={BottomTabNavigation}
      />
      <Drawer.Screen
        name={EDrawerNavigationRoutes.REVIEW}
        component={ReviewScreen}
      />
    </Drawer.Navigator>
  );
};
