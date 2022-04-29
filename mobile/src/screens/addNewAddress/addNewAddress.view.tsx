import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {TextInput, Header, Button} from '../../components';
import {TaddNewAddressViewProps} from './addNewAddress.type';
import {styles} from './addNewAddress.style';
import {size} from '../../theme';

export const AddNewAddressScreenView: FC<TaddNewAddressViewProps> = ({title, press}) => {
  
  return (
    <View style={styles.container}>
      <Header
        leftIconName="ChevronLeft"
        title='Add new Address'
        iconWidth={size.rg}
        iconHeight={size.rg}
        containerStyle={styles.header}
      />
      <Text>Full Name</Text>
      <TextInput type="regular" />
      <Text>Mobile Number</Text>
      <TextInput type="regular" />
      <Text>State</Text>
      <TextInput type="search" />
      <Text>City</Text>
      <TextInput type="search" />
      <Button title="SAVE" containerStyle={styles.button} />
    </View>
  );
};
