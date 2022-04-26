import React from 'react';
import {Text} from 'react-native';
import {TextInput} from './src/components/textInput/TextInput';
import {Icon} from './src/components';
import {Tag} from './src/components/tag/Tag';

const App = () => {
  const message: string = 'Testing Text';
  return (
    <>
      {/* <Text>{message}</Text>
      <TextInput type="regular" />
      <TextInput type="password" />
      <TextInput type="search" />
      <TextInput type="phone" />
      <Icon name="Heart" height={100} width={100} fill='orange' />
      <Icon name="Bullet" height={10} width={10} fill='green' /> */}
      <Tag />
    </>
  );
};

export default App;
