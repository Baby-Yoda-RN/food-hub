import React, {FC} from 'react';
import {Text, View, KeyboardAvoidingView} from 'react-native';
import {TVerifyScreenViewProps} from './Verify.type';
import {Button, Header, PinInput, Container} from '../../components';
import {styles} from './Verify.style';
import {size, color} from '../../theme';
import images from '../../assets/images';

export const VerifyScreenView: FC<TVerifyScreenViewProps> = ({
  title = 'Verification Code',
  emailName = 'test@gmail.com',
  pinEntry,
  OnPressResend,
  onPressSubmit,
  goBack,
}) => {
  return (
    <Container
      isScrollViewDisabled={true}
      backgroundImage={images.authBackground}>
      <Header
        leftIconName="ChevronLeft"
        leftIconStyle={styles.leftIconStyle}
        iconWidth={size.rg}
        iconHeight={size.rg}
        containerStyle={styles.header}
        leftPress={goBack}
      />

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtext}>
        {`Please type the verification code send to \n${emailName}`}
      </Text>

      <PinInput
        keyBoardType="numeric"
        digitCount={4}
        onChangePinEntry={pinEntry}
        containerStyle={styles.pinContainer}
      />

      <View style={styles.container2}>
        <Text style={styles.subtext2}>{"I don't receive a code!"}</Text>
        <Text style={styles.subtext2Link} onPress={OnPressResend}>
          {'Please resend'}
        </Text>
      </View>

      <Button
        containerStyle={styles.button}
        title="Submit"
        onPress={onPressSubmit}
      />
    </Container>
  );
};
