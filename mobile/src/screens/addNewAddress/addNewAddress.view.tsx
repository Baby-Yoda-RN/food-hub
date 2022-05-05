import React, {FC, useState} from 'react';
import {View, Text} from 'react-native';
import {TextInput, Header, Button, Dropdown} from '../../components';
import {TaddNewAddressViewProps} from './addNewAddress.type';
import {styles} from './addNewAddress.style';
import {size} from '../../theme';

export const AddNewAddressScreenView: FC<TaddNewAddressViewProps> = ({
  name,
  phoneNumber,
  state,
  city,
  street,
  saveButton,
  goBack,

}) => {

  return (
    <>
      <Header
        leftIconName="ChevronLeft"
        title="Add new address"
        iconWidth={size.rg}
        iconHeight={size.rg}
        containerStyle={styles.header}
        leftPress={goBack}
      />
      <View style={styles.container}>
        <Text style={styles.text}>Full name</Text>
        <TextInput type="search" placeholder='Name' />
        <Text style={styles.text}>Mobile number</Text>
        <TextInput type="search" placeholder='Phone Number' />
        <Text style={styles.text}>State</Text>
        <TextInput type="search" placeholder='State' />
        <Text style={styles.text}>City</Text>
        <TextInput type="search" placeholder='City' />
        <Text style={styles.text}>Street (Include house number)</Text>
        <TextInput type="search" placeholder='Street' />
        <Button title="SAVE" containerStyle={styles.button} onPress={saveButton}/>
      </View>
    </>
  );
};
