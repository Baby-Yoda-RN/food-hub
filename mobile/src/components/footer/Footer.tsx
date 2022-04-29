import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Button} from '../button/Button';
import {color, size} from '../../theme';
import {styles} from './Footer.style';
import {TFooter} from './Footer.type';

export const Footer: FC<TFooter> = ({onPress, type}) => {
  const footerNote = 'Already have an account?';
  const wideSpaces = '                         ';
  const shortSpaces = '     ';
  const emailOrPhone = 'Start with email or phone';
  const text = type === 'welcome' || type === 'signup' ? 'Sign in' : 'Sign up';

  const lineThrough = <Text style={styles.lineThrough}>{wideSpaces}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {lineThrough}
        {shortSpaces}
        {text} in with{shortSpaces}
        {lineThrough}
      </Text>
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
      {type === 'welcome' && (
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
