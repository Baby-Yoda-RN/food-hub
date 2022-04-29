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
        iconWidth={size.rg}
        iconHeight={size.rg}
        containerStyle={styles.header}
      />
      <Text style={styles.title}>{title}</Text>
      <Text>E-mail</Text>
      <TextInput type="regular" />
      <Text>Password</Text>
      <TextInput type="password" rightIcon="Eye" />
      <Text style={styles.text}>Forgot password?</Text>
      <Button title="LOGIN" containerStyle={styles.button} />
      <Text style={styles.text} onPress={press}>
        Don't have an account? Sign Up
      </Text>
    </View>
  );
};
