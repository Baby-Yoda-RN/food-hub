import React, {FC} from 'react';
import {EAuthNavigationRoutes} from '../../navigation/authNavigation/AuthNavigation.type';
import {TaddNewAddressNavigation} from './addNewAddress.type';
import {AddNewAddressScreenView} from './addNewAddress.view';

export const AddNewAddressScreen: FC<TaddNewAddressNavigation> = ({navigation}) => {
  return (
    <AddNewAddressScreenView
      name='Eljad Eendaz'
      phoneNumber='(201)867-5309'
      state='California'
      city='Sacramento'
      street='4102 Pretty View Lane'
      press={() => navigation.navigate(EAuthNavigationRoutes.SIGNUP)}
    />
  );
};
