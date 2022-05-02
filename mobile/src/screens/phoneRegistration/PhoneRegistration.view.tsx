import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {Button, Header, TextInput} from '../../components';
import {Container} from '../../components/container/Container';
import {size} from '../../theme';
import {styles} from './PhoneRegistration.style';
import {TPhoneRegistrationViewProps} from './PhoneRegistration.type';

export const PhoneRegistrationView: FC<TPhoneRegistrationViewProps> = ({
  title,
  subtitle,
  handleSendRequest,
}) => {
  return (
    <Container>
      <Header
        leftIconName="ChevronLeft"
        iconWidth={size.md}
        iconHeight={size.md}
        containerStyle={styles.headerContainer}
      />
      <Container>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <View style={styles.textInputContainer}>
          <TextInput type="phone" leftIcon="FlagUSA" />
        </View>
        <Button
          title="SEND"
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonText}
          onPress={handleSendRequest}
        />
      </Container>
    </Container>
  );
};
