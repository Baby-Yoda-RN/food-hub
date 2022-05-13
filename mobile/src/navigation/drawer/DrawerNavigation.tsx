import React, {FC, useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ReviewScreen, Profile, AddNewAddressScreen} from '../../screens';
import {SideMenu} from '../../components';
import {
  EDrawerNavigationRoutes,
  TDrawerNavigationRoutes,
} from './DrawerNavigation.type';
import {removeToken} from '../../utilities';
import {fetchUserInfo} from './fetchUserInfo';
import {BottomTabNavigation} from '../bottomTabNavigation/BottomTabNavigator';
import {useGlobalState} from '../../context/global';
import {ELocalStorage} from '../../utilities';

const Drawer = createDrawerNavigator();

export const MyDrawer: FC<TDrawerNavigationRoutes> = () => {
  const {state, dispatch} = useGlobalState();

  useEffect(() => {
    fetchUserInfo(dispatch);
  }, [dispatch]);

  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={({navigation: {navigate}}) => (
        <SideMenu
          name={state.userInfo.name}
          email={state.userInfo.email}
          image={state.userInfo.image}
          pressOrder={() => navigate(EDrawerNavigationRoutes.MYORDERS)}
          pressProfile={() => navigate(EDrawerNavigationRoutes.PROFILE)}
          pressDelivery={() =>
            navigate(EDrawerNavigationRoutes.DELIVERY_ADDRESS)
          }
          pressCart={() => navigate(EDrawerNavigationRoutes.CART)}
          pressReview={() => navigate(EDrawerNavigationRoutes.REVIEW)}
          pressCategory={() => navigate(EDrawerNavigationRoutes.CATEGORY)}
          pressLogout={() => removeToken(ELocalStorage.TOKEN_KEY)}
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
      <Drawer.Screen
        name={EDrawerNavigationRoutes.PROFILE}
        component={Profile}
      />
      <Drawer.Screen
        name={EDrawerNavigationRoutes.DELIVERY_ADDRESS}
        component={AddNewAddressScreen}
      />
    </Drawer.Navigator>
  );
};
