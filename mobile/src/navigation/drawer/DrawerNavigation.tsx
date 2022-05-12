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

const Drawer = createDrawerNavigator();

export const MyDrawer: FC<TDrawerNavigationRoutes> = () => {
  const [userInfo, setUserInfo] = useState<TUserInfo>();

  useEffect(() => {
    fetchUserInfo(setUserInfo);
  }, []);

  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={({navigation: {navigate}}) => (
        <SideMenu
          image={userInfo?.image}
          name={userInfo?.name}
          email={userInfo?.email}
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
