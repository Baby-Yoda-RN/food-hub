import React, {FC, useEffect, useState} from 'react';
import {TaddNewAddressNavigation} from './addNewAddressScreen.type';
import {AddNewAddressScreenView} from './addNewAddressScreen.view';
import {useGlobalState} from '../../context/global';
import {foodHubAPI} from '../../config';
import {EUserAction} from '../../context/user';

export const AddNewAddressScreen: FC<TaddNewAddressNavigation> = ({
  navigation,
}) => {
  const {state, dispatch} = useGlobalState();
  const [name, setName] = useState(state.userInfo.name);
  const [phone, setPhone] = useState(state.userInfo.name);
  const [street, setStreet] = useState(state.userInfo.address.street);
  const [city, setCity] = useState(state.userInfo.address.city);
  const [province, setProvince] = useState(state.userInfo.address.state);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const {data} = await foodHubAPI.get('./userInfo');
      dispatch({type: EUserAction.SET_NAME, name: data.name});
      dispatch({type: EUserAction.SET_PHONE, phone: data.phone});
      dispatch({type: EUserAction.SET_ADDRESS, address: data.address});
      setIsLoading(false);
    };
    getData();
  }, []);

  const saveAddress = () => {
    dispatch({type: EUserAction.SET_NAME, name});
    dispatch({type: EUserAction.SET_PHONE, phone});
    dispatch({
      type: EUserAction.SET_ADDRESS,
      address: {
        street,
        city,
        state: province,
      },
    });
  };

  return (
    <AddNewAddressScreenView
      isLoading={isLoading}
      goBack={() => navigation?.goBack()}
      name={state.userInfo.name}
      phoneNumber={state.userInfo.phone}
      street={state.userInfo.address.street}
      city={state.userInfo.address.city}
      state={state.userInfo.address.state}
      saveButton={() => saveAddress()}
      setName={setName}
      setPhone={setPhone}
      setStreet={setStreet}
      setCity={setCity}
      setProvince={setProvince}
    />
  );
};
