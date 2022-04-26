import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {TextInput} from './src/components/textInput/TextInput';
import {Icon} from './src/components';
import {Button} from './src/components';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  const message: string = 'Testing Text';
  useEffect(() => {
    setTimeout(() => {}, 1000);
    SplashScreen.hide();
  }, []);

  return (
    <>
      <Button
        title="GOOGLE"
        buttonOutlineColor="black"
        buttonWidth={120}
        leftIconName="Google"
        iconWidth={20}
        iconHeight={20}
      />
      <Text>{message}</Text>
      <TextInput type="regular" placeholder="Your email or phone" />
      <TextInput type="password" rightIcon="Eye" placeholder="Password" />
      <TextInput type="search" leftIcon="Magnify" />
      <TextInput type="phone" leftIcon="FlagUSA" />
      <Icon name="Heart" height={100} width={100} fill="orange" />
      <Icon name="Bullet" height={10} width={10} fill="green" />
    </>
  );
};

export default App;
