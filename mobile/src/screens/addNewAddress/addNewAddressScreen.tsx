import React, {FC} from 'react';
import {TaddNewAddressNavigation} from './addNewAddressScreen.type';
import {AddNewAddressScreenView} from './addNewAddressScreen.view';
import {useGlobalState} from '../../context/global';

export const AddNewAddressScreen: FC<TaddNewAddressNavigation> = ({
  navigation,
}) => {
  const {state} = useGlobalState();

  return (
    <AddNewAddressScreenView
      goBack={() => navigation?.goBack()}
      name={state.userInfo.name}
      email={state.userInfo.email}
      phoneNumber={state.userInfo.phone}
      saveButton={() => {}}
    />
  );
};
