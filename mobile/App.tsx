import React from 'react';
import {Text} from 'react-native';
import {TextInput} from './src/components/textInput/TextInput';
import {Icon} from './src/components';
import { ListItem } from './src/components/listItem/ListItem';

const App = () => {
  const message: string = 'Testing Text';
  return (
    <>
      <Text>{message}</Text>
      <TextInput type="regular" />
      <TextInput type="password" />
      <TextInput type="search" />
      <TextInput type="phone" />
      <Icon name="Heart" height={100} width={100} fill='orange' />
      <Icon name="Bullet" height={10} width={10} fill='green' />
      <ListItem 
      title = "Greek salad" 
      subTitle='with backed salmon'
      image = {'https://www.positronx.io/wp-content/uploads/2020/02/react-native-150x150-1.jpg'}
      price = "$12.00"
      leftIconName ='Minus' 
      rightIconName = 'Plus'
      iconWidth={20} 
      iconHeight = {20}
      />
    </>
  );
};

export default App;
