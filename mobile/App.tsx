import React from 'react';
import {Text} from 'react-native';
import {TextInput} from './src/components/textInput/TextInput';
import {Icon} from './src/components';

const App = () => {
  const message: string = 'Testing Text';
  return (
    <>
      <Text>{message}</Text>
      <TextInput type="regular" />
      <TextInput type="password" rightIcon="Eye" />
      <TextInput type="search" leftIcon="Magnify" />
      <TextInput type="phone" leftIcon="FlagUSA" />
      <Icon name="Heart" height={100} width={100} fill="orange" />
      <Icon name="Bullet" height={10} width={10} fill="green" />
    </>
  );
};

export default App;
