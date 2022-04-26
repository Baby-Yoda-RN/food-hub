import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '../button/Button';
import {size} from '../../theme';
import {styles} from './Footer.style';

export const Footer = () => {
  const footerNote = 'Already have an account?';
  const wideSpaces = '                         ';
  const shortSpaces = '     ';

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
      <View style={{flexDirection: 'row'}}>
        <Button
          title="FACEBOOK"
          buttonOutlineColor="black"
          buttonWidth={120}
          leftIconName="Facebook"
          iconWidth={20}
          iconHeight={size.lg}
        />
        <Button
          title="GOOGLE"
          buttonOutlineColor="black"
          buttonWidth={120}
          leftIconName="Google"
          iconWidth={20}
          iconHeight={size.lg}
        />
      </View>
      <View style={{backgroundColor: 'red'}}>
        <Button title="Start with email or phone" />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>{footerNote} </Text>
        <Text style={{textDecorationLine: 'underline'}}>Sign in</Text>
      </View>
    </View>
  );
};
