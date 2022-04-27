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
          buttonHeight={size.lg + size.rg}
          buttonWidth={size.xxl + size.sm}
          leftIconName="Facebook"
          iconWidth={size.lg}
          iconHeight={size.lg}
          buttonTheme={color.white}
          titleStyle={{color: color.black}}
        />
        <Button
          title="GOOGLE"
          buttonOutlineColor="black"
          buttonHeight={size.lg + size.rg}
          buttonWidth={size.xxl + size.sm}
          leftIconName="Google"
          iconWidth={size.lg}
          iconHeight={size.lg}
          buttonTheme={color.white}
          titleStyle={{color: color.black}}
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
