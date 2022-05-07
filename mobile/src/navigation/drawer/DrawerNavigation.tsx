import React, {FC} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  HomeScreen,
  MyOrdersScreen,
  CartScreen,
  ReviewScreen,
  CategoryScreen,
} from '../../screens';
import {SideMenu} from '../../components';
import {EDrawerNavigationRoutes} from './DrawerNavigation.type';
import {removeToken} from '../../utilities';

const Drawer = createDrawerNavigator();

export const MyDrawer: FC = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={({navigation: {navigate}}) => (
        <SideMenu
          image="https://i.imgur.com/vWqQwxo.jpg"
          name="Willy Wonka"
          email="Willy.Wonka@Chocolate.com"
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
        name={EDrawerNavigationRoutes.HOME}
        component={HomeScreen}
      />
      <Drawer.Screen
        name={EDrawerNavigationRoutes.MYORDERS}
        component={MyOrdersScreen}
      />
      <Drawer.Screen
        name={EDrawerNavigationRoutes.CART}
        component={CartScreen}
      />
      <Drawer.Screen
        name={EDrawerNavigationRoutes.REVIEW}
        component={ReviewScreen}
      />
      <Drawer.Screen
        name={EDrawerNavigationRoutes.CATEGORY}
        component={CategoryScreen}
      />
    </Drawer.Navigator>
  );
};
