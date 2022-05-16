import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {TextInput, Header, Button, Container} from '../../components';
import {size, color} from '../../theme';
import {styles} from './ResetPassword.style';
import {TResetPasswordViewProps} from './ResetPassword.type';

export const ResetPasswordView: FC<TResetPasswordViewProps> = ({
  title,
  subtitle,
  sendNewPassword,
  goBack,
  setEmail,
}) => {
  return (
    <Container
      backgroundImage={require('../../assets/background/auth_background.png')}
      isScrollViewDisabled={true}
      header={
        <Header
          leftIconName="ChevronLeft"
          iconWidth={size.rg}
          iconHeight={size.rg}
          containerStyle={styles.header}
          leftIconStyle={{backgroundColor: color.white}}
          leftPress={goBack}
        />
      }>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{subtitle}</Text>
      <View style={styles.textInputContainer}>
        <TextInput type="regular" onChangeText={setEmail}/>
      </View>
      <Button
        title="SEND NEW PASSWORD"
        containerStyle={styles.button}
        onPress={sendNewPassword}
      />
    </Container>
  );
};
