import React from 'react';
import {Text} from 'react-native';
import {TextInput} from './src/components/textInput/TextInput';

const App = () => {
  const message: string = 'Testing Text';
  return (
    <>
      <Text>{message}</Text>
      <TextInput type="regular" />
      <TextInput type="password" rightIcon="pass" />
      <TextInput type="search" leftIcon="left" />
      <TextInput type="phone" leftIcon="flag" />
    </>
  );
};

export default App;
