import React, {useEffect} from 'react';
import {Alert, Text} from 'react-native';
import {TextInput} from './src/components/textInput/TextInput';
import {Icon} from './src/components';
import {WelcomeScreen} from './src/screens/welcome/WelcomeScreen';
import {Button} from './src/components';
import SplashScreen from 'react-native-splash-screen';
import {color} from './src/theme';

const App = () => {
  const message: string = 'Testing Text';
  useEffect(() => {
    setTimeout(() => {}, 1000);
    SplashScreen.hide();
  }, []);

  return (
    <>
      <WelcomeScreen />
    </>
  );
};

export default App;
