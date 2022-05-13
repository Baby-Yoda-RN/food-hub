import React, {FC} from 'react';
import {TaddNewAddressNavigation} from './addNewAddressScreen.type';
import {AddNewAddressScreenView} from './addNewAddressScreen.view';



export const AddNewAddressScreen: FC<TaddNewAddressNavigation> = ({
  navigation,
}) => {

  return (
    <AddNewAddressScreenView
      goBack={() => navigation?.goBack()}
    />
  );
};
