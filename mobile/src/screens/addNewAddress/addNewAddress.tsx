import React, {FC} from 'react';
import {EAuthNavigationRoutes} from '../../navigation/authNavigation/AuthNavigation.type';
import {TaddNewAddressNavigation} from './addNewAddress.type';
import {AddNewAddressScreenView} from './addNewAddress.view';

export const addNewAddress: FC<TaddNewAddressNavigation> = ({navigation}) => {
  return (
    <AddNewAddressScreenView
      title="Save"
      press={() => navigation.navigate(EAuthNavigationRoutes.SIGNUP)}
    />
  );
};
