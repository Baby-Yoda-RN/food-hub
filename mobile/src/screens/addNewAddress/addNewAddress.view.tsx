import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {TextInput, Header, Button} from '../../components';
import {TaddNewAddressViewProps} from './addNewAddress.type';
import {styles} from './addNewAddress.style';
import {size} from '../../theme';

export const AddNewAddressScreenView: FC<TaddNewAddressViewProps> = ({
  name,
  phoneNumber,
  state,
  city,
  street,
  press

}) => {

  
  return (
    <>
      <Header
      leftIconName="ChevronLeft"
      title='Add new address'
      iconWidth={size.rg}
      iconHeight={size.rg}
      containerStyle={styles.header}
      />
      <View style={styles.container}>
        <Text style={styles.text}>Full name</Text>
        <TextInput type="search" placeholder={name}/>
        <Text style={styles.text}>Mobile number</Text>
        <TextInput type="search" placeholder={phoneNumber}/>
        <Text style={styles.text}>State</Text>
        <TextInput type="search" placeholder={state}/>
        <Text style={styles.text}>City</Text>
        <TextInput type="search" placeholder={city}/>
        <Text style={styles.text}>Street (Include house number)</Text>
        <TextInput type="search" placeholder={street}/>
        <Button title="SAVE" containerStyle={styles.button} />
      </View>
    </>
  );
};
