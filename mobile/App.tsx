import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {TextInput} from './src/components/textInput/TextInput';
import {Icon} from './src/components';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  const message: string = 'Testing Text';
  useEffect(() => {
    setTimeout(() => {}, 1000);
    SplashScreen.hide();
  }, []);
  return (
    <>
      <Text>{message}</Text>
      <TextInput type="regular" />
      <TextInput type="password" />
      <TextInput type="search" />
      <TextInput type="phone" />
      <Icon name="Heart" height={100} width={100} fill="orange" />
      <Icon name="Bullet" height={10} width={10} fill="green" />
    </>
  );
};

export default App;
