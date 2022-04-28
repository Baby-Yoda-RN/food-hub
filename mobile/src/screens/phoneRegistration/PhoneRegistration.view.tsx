import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {Button, Header, TextInput} from '../../components';
import {size} from '../../theme';
import {styles} from './PhoneRegistration.style';
import {TPhoneRegistrationViewProps} from './PhoneRegistration.type';

export const PhoneRegistrationView: FC<TPhoneRegistrationViewProps> = () => {
  return (
    <View>
      <Header
        leftIconName="ChevronLeft"
        iconWidth={size.md}
        iconHeight={size.md}
        containerStyle={styles.headerContainer}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Registration</Text>
        <Text style={styles.subtitle}>
          Enter your phone number to verify your account
        </Text>
        <TextInput type="phone" leftIcon="FlagUSA" />
        <Button
          title="SEND"
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonText}
        />
      </View>
    </View>
  );
};
