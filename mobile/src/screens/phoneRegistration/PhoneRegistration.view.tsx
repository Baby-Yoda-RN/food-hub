import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {Button, Header, TextInput} from '../../components';
import {Container} from '../../components/container/Container';
import {size} from '../../theme';
import {styles} from './PhoneRegistration.style';
import {TPhoneRegistrationViewProps} from './PhoneRegistration.type';
import BackgroundImage from '../../assets/background/auth_background.png';

export const PhoneRegistrationView: FC<TPhoneRegistrationViewProps> = ({
  title,
  subtitle,
  handleSendRequest,
  handleBackRequest,
}) => {
  return (
    <Container
      isScrollViewDisabled={true}
      backgroundImage={BackgroundImage}
      headerStyle={styles.headerContainer}
      header={
        <Header
          leftIconName="ChevronLeft"
          leftIconStyle={styles.backIconStyle}
          leftPress={handleBackRequest}
          iconWidth={size.md}
          iconHeight={size.md}
        />
      }>
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
  );
};
