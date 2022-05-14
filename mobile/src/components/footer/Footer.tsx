import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Button} from '../button/Button';
import {color, size} from 'theme';
import {styles} from './Footer.style';
import {TFooter} from './Footer.type';

export const Footer: FC<TFooter> = ({
  onPress,
  divider,
  dividerStyle,
  dividerTextStyle,
  isEmailorPhone,
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
      <View style={styles.topButtons}>
        <Button
          title="FACEBOOK"
          leftIconName="Facebook"
          iconSize={size.lg}
          buttonTheme={color.white}
          titleStyle={{color: color.black}}
          containerStyle={{borderRadius: size.lg, height: size.lg + size.sm}}
        />
        <Button
          title="GOOGLE"
          leftIconName="Google"
          iconSize={size.lg}
          buttonTheme={color.white}
          titleStyle={{color: color.black}}
          containerStyle={{borderRadius: size.lg, height: size.lg + size.sm}}
        />
      </View>
      {!!isEmailorPhone && (
        <>
          <TouchableOpacity style={styles.bottomButtons} onPress={onPress}>
            <Text style={styles.bottomButtonText}>{emailOrPhone}</Text>
          </TouchableOpacity>
          <View style={styles.bottomText}>
            <Text style={styles.text}>{footerNote} </Text>
            <Text style={styles.linkText}>Sign in</Text>
          </View>
        </>
      )}
    </View>
  );
};
