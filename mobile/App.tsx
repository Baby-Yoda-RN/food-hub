import React, {useEffect} from 'react';
import {Alert, Text} from 'react-native';
import {TextInput} from './src/components/textInput/TextInput';
import {Icon} from './src/components';
import {Button} from './src/components';
import {ToggleButton} from './src/components';
import {ListItem} from './src/components/listItem/ListItem';
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
      <ListItem
        title="Greek salad"
        subTitle="with backed salmon"
        image={
          'https://www.positronx.io/wp-content/uploads/2020/02/react-native-150x150-1.jpg'
        }
        price="$12.00"
        itemQuantity={2}
        iconSize={25}
      />
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
