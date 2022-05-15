import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Button} from '../button/Button';
import {color, size} from 'theme';
import {styles} from './Footer.style';
import {TFooter} from './Footer.type';

export const Footer: FC<TFooter> = ({
  onPressSignUp,
  divider,
  dividerStyle,
  dividerTextStyle,
  isEmailorPhone,
  onPressSignIn,
}) => {
  const footerNote = 'Already have an account?';
  const emailOrPhone = 'Start with email or phone';

  return (
    <View style={styles.container}>
      <View style={styles.divider}>
        <View style={[styles.lineStyle, dividerStyle]} />
        <Text style={[styles.text, dividerTextStyle]}>{divider}</Text>
        <View style={[styles.lineStyle, dividerStyle]} />
      </View>
      <View style={styles.topButtonContainer}>
        <Button
          title="FACEBOOK"
          leftIconName="Facebook"
          iconSize={size.lg}
          buttonTheme={color.white}
          titleStyle={styles.topButtonText}
          containerStyle={styles.topButton}
        />
        <Button
          title="GOOGLE"
          leftIconName="Google"
          iconSize={size.lg}
          buttonTheme={color.white}
          titleStyle={styles.topButtonText}
          containerStyle={styles.topButton}
        />
      </View>
      {!!isEmailorPhone && (
        <>
          <TouchableOpacity
            style={styles.bottomButtons}
            onPress={onPressSignUp}>
            <Text style={styles.bottomButtonText}>{emailOrPhone}</Text>
          </TouchableOpacity>
          <View style={styles.bottomText}>
            <Text style={styles.text}>{footerNote} </Text>
            <TouchableOpacity onPress={onPressSignIn}>
              <Text style={styles.linkText}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};
