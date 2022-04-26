import React, {useEffect} from 'react';
import {Alert, Text} from 'react-native';
import {TextInput} from './src/components/textInput/TextInput';
import {Icon} from './src/components';
import {Button} from './src/components';
import {ToggleButton} from './src/components';
import SplashScreen from 'react-native-splash-screen';
import {color} from './src/theme';
import {Tag} from './src/components/tag/Tag';

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
      <TextInput type="regular" />
      <TextInput type="password" />
      <TextInput type="search" />
      <TextInput type="phone" />
      <Icon name="Heart" height={100} width={100} fill="orange" />
      <Icon name="Bullet" height={10} width={10} fill="green" />
      <ToggleButton
        primaryText={'Test'}
        secondaryText={'Test2'}
        selectionMode={true}
        buttonTheme={color.primary}
        switchData={false}
      />
      <Tag isPrice={false} />
    </>
  );
};

export default App;
