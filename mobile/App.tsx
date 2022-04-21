import React from 'react';
import {Text} from 'react-native';
import {TextInput} from './src/components/textInput/TextInput';

const App = () => {
  const message: string = 'Testing Text';

  return (
    <>
      <Text>{message}</Text>
      <TextInput />
      <TextInput />
    </>
  );
};

export default App;
