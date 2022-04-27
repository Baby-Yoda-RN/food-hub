import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {TextInput} from './src/components/textInput/TextInput';
import {Icon} from './src/components';
import {Button} from './src/components';
import SplashScreen from 'react-native-splash-screen';
import {font} from './src/theme';
import StorybookUIRoot from './storybook';

const App = () => {
  const message:string = 'Hello World'
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
      <Text style={{fontFamily: font.regular}}>{message}</Text>
      <Text style={{fontFamily: font.semiBold}}>{message}</Text>
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
