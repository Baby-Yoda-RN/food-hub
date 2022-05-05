import React, {FC, useState} from 'react';
import {EAuthNavigationRoutes} from '../../navigation/authNavigation/AuthNavigation.type';
import {TaddNewAddressNavigation} from './addNewAddress.type';
import {AddNewAddressScreenView} from './addNewAddress.view';



export const AddNewAddressScreen: FC<TaddNewAddressNavigation> = ({
  navigation,
}) => {

  return (
    <AddNewAddressScreenView
      goBack={() => navigation.goBack()}
    />
  );
};
