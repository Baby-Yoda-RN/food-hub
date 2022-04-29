import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {Button, Header, TextInput} from '../../components';
import {size} from '../../theme';
import {styles} from './PhoneRegistration.style';
import {TPhoneRegistrationViewProps} from './PhoneRegistration.type';

export const PhoneRegistrationView: FC<TPhoneRegistrationViewProps> = ({
  title,
  subtitle,
  press,
}) => {
  return (
    <View>
      <Header
        leftIconName="ChevronLeft"
        iconWidth={size.md}
        iconHeight={size.md}
        containerStyle={styles.headerContainer}
      />
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <TextInput type="phone" leftIcon="FlagUSA" />
        <Button
          title="SEND"
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonText}
          onPress={press}
        />
      </View>
    </View>
  );
};
