import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Button} from '../button/Button';
import {color, size} from '../../theme';
import {styles} from './Footer.style';

export const Footer = () => {
  const footerNote = 'Already have an account?';
  const wideSpaces = '                         ';
  const shortSpaces = '     ';
  const emailOrPhone = 'Start with email or phone';

  const lineThrough = (
    <Text style={{textDecorationLine: 'line-through'}}>{wideSpaces}</Text>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {lineThrough}
        {shortSpaces}sign in with{shortSpaces}
        {lineThrough}
      </Text>
      <View style={styles.topButtons}>
        <Button
          title="FACEBOOK"
          buttonOutlineColor="black"
          buttonWidth={120}
          leftIconName="Facebook"
          iconWidth={size.m + size.s}
          iconHeight={size.lg}
          buttonTheme={color.white}
          titleStyle={{color: color.primary}}
        />
        <Button
          title="GOOGLE"
          buttonOutlineColor="black"
          buttonWidth={120}
          leftIconName="Google"
          iconWidth={size.m + size.s}
          iconHeight={size.lg}
          buttonTheme={color.white}
          titleStyle={{color: color.primary}}
        />
      </View>
      <TouchableOpacity style={styles.bottomButtons}>
        <Text style={styles.bottomButtonText}>{emailOrPhone}</Text>
      </TouchableOpacity>
      <View style={styles.bottomText}>
        <Text style={styles.text}>{footerNote} </Text>
        <Text style={styles.linkText}>Sign in</Text>
      </View>
    </View>
  );
};
