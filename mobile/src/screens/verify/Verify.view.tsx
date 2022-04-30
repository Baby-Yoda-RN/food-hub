import React, {FC} from 'react';
import {Text, View, KeyboardAvoidingView} from 'react-native';
import {TVerifyScreenViewProps} from './Verify.type';
import {Button, Header, PinInput} from '../../components';
import {styles} from './Verify.style';
import {size} from '../../theme';

export const VerifyScreenView: FC<TVerifyScreenViewProps> = ({
  title = 'Verification Code',
  emailName = 'test@gmail.com',
  pinEntry,
}) => {
  return (
    <View style={styles.background}>
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <Header
          leftIconName="ChevronLeft"
          iconWidth={size.rg}
          iconHeight={size.rg}
          containerStyle={styles.header}
        />

        <Text style={styles.title}>{title}</Text>
        <Text
          style={
            styles.subtext
          }>{`Please type the verification code send to ${emailName}`}</Text>

        <PinInput
          keyBoardType="numeric"
          digitCount={4}
          onChangePinEntry={pinEntry}
        />
        <View style={styles.container2}>
          <Text style={styles.subtext2}>{"I don't receive a code!"}</Text>
          <Text style={styles.subtextbutton} onPress={() => {}}>
            {'Please resend'}
          </Text>
        </View>

        <Button containerStyle={styles.buttonContainer} title="Submit" />
      </KeyboardAvoidingView>
    </View>
  );
};
