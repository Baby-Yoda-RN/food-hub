import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {Button, Footer} from '../../components';
import {color, size} from '../../theme';
import {styles} from './Welcome.style';
import {TWelcomeScreenViewProps} from './Welcome.type';

export const WelcomeScreenView: FC<TWelcomeScreenViewProps> = ({
  pressSignIn,
  pressSignUp,
  goToStoryBook,
}) => {
  const newTitle = 'FoodHub';
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
            {__DEV__ && (
              <Button
                title="Storybook"
                buttonTheme={color.white}
                titleStyle={{color: color.primary}}
                onPress={goToStoryBook}
              />
            )}
          </View>
          <View style={styles.topSection}>
            <Text style={styles.title1}>
              Welcome to <Text style={styles.title2}>{newTitle}</Text>
            </Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>

          <View style={styles.footer}>
            <Footer
              onPressSignIn={pressSignIn}
              onPressSignUp={pressSignUp}
              divider={'Sign in with'}
              isEmailorPhone
            />
          </View>
        </View>
      </ImageBackground>
    </ImageBackground>
  );
};
