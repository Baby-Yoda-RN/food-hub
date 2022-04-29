import React, {FC} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {Button, Footer} from '../../components';
import {RootStackParams} from '../../navigation';
import {color, size} from '../../theme';
import {styles} from './WelcomeScreen.style';
import {useNavigation} from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParams, 'Welcome'>;

export const WelcomeScreen: FC<Props> = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const title = 'FoodHub';
  const subTitle = `Your favourite foods delivered 
fast at your door.`;
  const imagesrc = '../../assets/images/WelcomeScreen.png';
  const imagesrcOpacity = '../../assets/images/WelcomeScreenOpacity.png';

  return (
    <ImageBackground
      source={require(imagesrc)}
      resizeMode="cover"
      style={styles.imageBackground}>
      <ImageBackground
        source={require(imagesrcOpacity)}
        resizeMode="cover"
        style={styles.imageBackground}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Button
              title="skip"
              buttonTheme={color.white}
              buttonHeight={size.md}
              buttonWidth={size.xl}
              titleStyle={{color: color.primary}}
            />
          </View>
          <View style={styles.topSection}>
            <Text style={styles.title1}>
              Welcome to <Text style={styles.title2}>{title}</Text>
            </Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>

          <View style={styles.footer}>
            <Footer navigation={navigation} isWelcome />
          </View>
        </View>
      </ImageBackground>
    </ImageBackground>
  );
};
