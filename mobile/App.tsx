import React from 'react';
import {Text} from 'react-native';
import {TextInput} from './src/components/textInput/TextInput';
import {Icon} from './src/components';
import { Button } from './src/components';
import { color, size } from './src/theme';
import {styles} from './src/components/button/Button.styles';
import { style } from './src/components/textInput/TextInput.style';

const App = () => {
  const message: string = 'Testing Text';

  return (
    <>
    < Button 
        title="GOOGLE"
        buttonOutlineColor='black'
        leftIconName="Google"
        iconWidth = {20}
        iconHeight = {20}
      />
      <Text>{message}</Text>
      <TextInput type="regular" />
      <TextInput type="password" />
      <TextInput type="search" />
      <TextInput type="phone" />
      <Icon name="Heart" height={100} width={100} fill='orange' />
      <Icon name="Bullet" height={10} width={10} fill='green' />
    </>
  );
};

export default App;
