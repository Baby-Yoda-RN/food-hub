import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Button} from '../button/Button';
import {color, size} from '../../theme';
import {styles} from './Footer.style';
import {Icon} from '../icon/Icon';
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation';

type Props = NativeStackScreenProps<RootStackParams, 'Welcome'>;

export const Footer: FC<Props> = ({navigation}) => {
  const footerNote = 'Already have an account?';
  const wideSpaces = '                         ';
  const shortSpaces = '     ';
  const emailOrPhone = 'Start with email or phone';

  const lineThrough = <Text style={styles.lineThrough}>{wideSpaces}</Text>;

  const onNavigate = () => {
    navigation.navigate('Login', {name: 'Login'});
  };
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
          leftIconName="Facebook"
          iconSize={size.lg}
          buttonTheme={color.white}
          titleStyle={{color: color.black}}
        />
        <Button
          title="GOOGLE"
          leftIconName="Google"
          iconSize={size.lg}
          buttonTheme={color.white}
          titleStyle={{color: color.black}}
        />
      </View>
      <TouchableOpacity style={styles.bottomButtons} onPress={onNavigate}>
        <Text style={styles.bottomButtonText}>{emailOrPhone}</Text>
      </TouchableOpacity>
      <View style={styles.bottomText}>
        <Text style={styles.text}>{footerNote} </Text>
        <Text style={styles.linkText}>Sign in</Text>
      </View>
    </View>
  );
};
