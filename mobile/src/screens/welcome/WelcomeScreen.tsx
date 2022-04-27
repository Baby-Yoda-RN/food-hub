import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {Button} from '../../components';
import {Footer} from '../../components/footer/Footer';
import {style} from '../../components/textInput/TextInput.style';
import {color, size} from '../../theme';
import {styles} from './WelcomeScreen.style';

export const WelcomeScreen = () => {
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
              buttonHeight={size.lg}
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
            <Footer />
          </View>
        </View>
      </ImageBackground>
    </ImageBackground>
  );
};
