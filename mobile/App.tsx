import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {TextInput} from './src/components/textInput/TextInput';
import {Icon} from './src/components';
import {Button} from './src/components';
import SplashScreen from 'react-native-splash-screen';
import {WelcomeScreen} from './src/screens/welcome/WelcomeScreen';

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
